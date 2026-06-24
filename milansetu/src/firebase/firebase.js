// ─────────────────────────────────────────────────────────────────────────────
// src/firebase/firebase.js
//
// Firebase app initialization.
// Fill in your config values from Firebase Console:
//   Project Settings → Your Apps → Web App → SDK setup and configuration
// ─────────────────────────────────────────────────────────────────────────────
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getMessaging, isSupported } from 'firebase/messaging';

// ── PASTE YOUR FIREBASE CONFIG HERE ──────────────────────────────────────────
const firebaseConfig = {
  apiKey:            "REPLACE_WITH_YOUR_API_KEY",
  authDomain:        "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId:         "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket:     "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId:             "REPLACE_WITH_YOUR_APP_ID",
  // measurementId: "REPLACE_IF_ANALYTICS_ENABLED",
};

// ── VAPID Key for Web Push (FCM) ──────────────────────────────────────────────
// Firebase Console → Project Settings → Cloud Messaging → Web Push certificates
export const VAPID_KEY = "REPLACE_WITH_YOUR_VAPID_KEY";

// ── App Encryption Secret ─────────────────────────────────────────────────────
// A strong passphrase used to derive per-conversation AES keys.
// Keep this consistent across all clients (same secret = same derived keys).
export const APP_ENCRYPTION_SECRET = "REPLACE_WITH_YOUR_40_CHAR_SECRET";
// ─────────────────────────────────────────────────────────────────────────────

// Singleton init
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);

// Messaging only works in browsers that support Service Workers
export const getMessagingInstance = async () => {
  const supported = await isSupported();
  if (!supported) return null;
  return getMessaging(app);
};

export default app;
