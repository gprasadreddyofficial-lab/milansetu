/**
 * auth.js — all API calls related to authentication and profile.
 *
 * Base URL is proxied through Vite to http://127.0.0.1:8000 in dev.
 * Every helper returns { data, error } so callers never have to try/catch.
 */

const BASE = '/api';

// ── Token helpers ────────────────────────────────────────────────────────────

export const saveTokens = ({ access, refresh }) => {
  localStorage.setItem('access_token', access);
  localStorage.setItem('refresh_token', refresh);
};

export const clearTokens = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
};

export const getAccessToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');

export const saveUser = (user) =>
  localStorage.setItem('user', JSON.stringify(user));

export const getSavedUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch {
    return null;
  }
};

// ── Generic fetch wrapper ─────────────────────────────────────────────────────

async function request(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };

  const token = getAccessToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  try {
    const res = await fetch(`${BASE}${path}`, { ...options, headers });
    const isJson = res.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await res.json() : null;

    if (!res.ok) {
      // Flatten DRF error objects into a single readable string
      const msg =
        data?.detail ||
        Object.values(data || {})
          .flat()
          .join(' ') ||
        `HTTP ${res.status}`;
      return { data: null, error: msg };
    }
    return { data, error: null };
  } catch (err) {
    return { data: null, error: 'Network error. Please check your connection.' };
  }
}

// ── Auth endpoints ────────────────────────────────────────────────────────────

/**
 * Sign in with email + password.
 * Returns { id, email, access, refresh } on success.
 */
export async function signIn(email, password) {
  return request('/auth/signin/', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

/**
 * Register a new user with profile data.
 * Returns { id, email, access, refresh } on success.
 */
export async function signUp(payload) {
  return request('/milansetu/signup/', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

/**
 * Refresh the access token using the stored refresh token.
 */
export async function refreshAccessToken() {
  const refresh = getRefreshToken();
  if (!refresh) return { data: null, error: 'No refresh token' };
  const result = await request('/auth/token/refresh/', {
    method: 'POST',
    body: JSON.stringify({ refresh }),
  });
  if (result.data?.access) {
    localStorage.setItem('access_token', result.data.access);
  }
  return result;
}

// ── Profile endpoints ─────────────────────────────────────────────────────────

/**
 * Fetch the currently authenticated user's profile.
 */
export async function fetchMyProfile() {
  return request('/milansetu/profile/me/');
}

/**
 * Partially update the authenticated user's profile.
 * @param {object} fields — only the fields you want to change
 */
export async function updateMyProfile(fields) {
  return request('/milansetu/profile/me/', {
    method: 'PATCH',
    body: JSON.stringify(fields),
  });
}
