/**
 * AuthContext — global auth state for the app.
 *
 * Provides:
 *   user        — { id, email } or null
 *   profile     — profile_details object or null
 *   loading     — true while we're restoring session from localStorage
 *   login(email, password) → { error } | { error: null }
 *   register(payload)      → { error } | { error: null }
 *   logout()
 *   refreshProfile()       — re-fetches /profile/fetch_detail/ and updates state
 *   updateProfile(fields)  — PATCHes profile and updates state
 */

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  signIn,
  signUp,
  fetchMyProfile,
  updateMyProfile,
  saveTokens,
  saveUser,
  clearTokens,
  getSavedUser,
  getAccessToken,
} from '../api/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // restoring session

  // ── Restore session on mount ──────────────────────────────────────────────
  useEffect(() => {
    const savedUser = getSavedUser();
    const token = getAccessToken();
    if (savedUser && token) {
      setUser(savedUser);
      // Fetch latest profile in background
      fetchMyProfile().then(({ data }) => {
        if (data) setProfile(data);
      });
    }
    setLoading(false);
  }, []);

  // ── Login ─────────────────────────────────────────────────────────────────
  const login = useCallback(async (email, password) => {
    const { data, error } = await signIn(email, password);
    if (error) return { error };

    saveTokens({ access: data.access, refresh: data.refresh });
    const userData = { id: data.id, email: data.email };
    saveUser(userData);
    setUser(userData);

    // Load profile after login
    const { data: profileData } = await fetchMyProfile();
    if (profileData) setProfile(profileData);

    return { error: null };
  }, []);

  // ── Register ──────────────────────────────────────────────────────────────
  const register = useCallback(async (payload) => {
    const { data, error } = await signUp(payload);
    if (error) return { error };

    saveTokens({ access: data.access, refresh: data.refresh });
    const userData = { id: data.id, email: data.email };
    saveUser(userData);
    setUser(userData);

    // Load profile after register
    const { data: profileData } = await fetchMyProfile();
    if (profileData) setProfile(profileData);

    return { error: null };
  }, []);

  // ── Logout ────────────────────────────────────────────────────────────────
  const logout = useCallback(() => {
    clearTokens();
    setUser(null);
    setProfile(null);
  }, []);

  // ── Refresh profile ───────────────────────────────────────────────────────
  const refreshProfile = useCallback(async () => {
    const { data } = await fetchMyProfile();
    if (data) setProfile(data);
  }, []);

  // ── Update profile ────────────────────────────────────────────────────────
  const updateProfile = useCallback(async (fields) => {
    const { data, error } = await updateMyProfile(fields);
    if (error) return { error };
    setProfile(data);
    return { error: null };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, profile, loading, login, register, logout, refreshProfile, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Convenience hook
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
