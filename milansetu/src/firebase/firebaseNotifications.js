// ─────────────────────────────────────────────────────────────────────────────
// src/firebase/firebaseNotifications.js
//
// Firebase Cloud Messaging (FCM) integration:
//  - Request browser notification permission
//  - Get FCM registration token
//  - Listen for foreground messages (in-app toasts)
//  - Store token in Django backend
// ─────────────────────────────────────────────────────────────────────────────
import { getToken, onMessage } from 'firebase/messaging';
import { getMessagingInstance, VAPID_KEY } from './firebase';
import { apiClient } from '../api/auth';

/**
 * Request browser notification permission.
 * @returns {Promise<'granted'|'denied'|'default'>}
 */
export async function requestNotificationPermission() {
  if (!('Notification' in window)) return 'denied';
  return Notification.requestPermission();
}

/**
 * Get the FCM registration token for this browser.
 * Registers the service worker first.
 * @returns {Promise<string|null>}
 */
export async function getFCMToken() {
  try {
    const messaging = await getMessagingInstance();
    if (!messaging) return null;

    // Register FCM service worker
    const swReg = await navigator.serviceWorker.register('/firebase-messaging-sw.js');

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: swReg,
    });
    return token || null;
  } catch (err) {
    console.warn('[FCM] Could not get token:', err);
    return null;
  }
}

/**
 * Store the FCM token in Django backend so we can send push notifications.
 * @param {string} token
 */
export async function saveFCMTokenToBackend(token) {
  try {
    await apiClient.post('/api/milansetu/fcm/token/', { token });
  } catch (err) {
    console.warn('[FCM] Could not save token to backend:', err);
  }
}

/**
 * Initialize FCM: request permission → get token → save to backend.
 * Call this once after the user logs in.
 * @returns {Promise<string|null>} The token, or null if unavailable
 */
export async function initFCM() {
  const permission = await requestNotificationPermission();
  if (permission !== 'granted') return null;

  const token = await getFCMToken();
  if (token) await saveFCMTokenToBackend(token);
  return token;
}

/**
 * Listen for FCM messages while the app is in the foreground.
 * Calls your callback with { title, body, data } when a message arrives.
 *
 * @param {function} callback - ({ title, body, data }) => void
 * @returns {Promise<function|null>} Unsubscribe function
 */
export async function onForegroundMessage(callback) {
  const messaging = await getMessagingInstance();
  if (!messaging) return null;

  return onMessage(messaging, (payload) => {
    const title = payload.notification?.title || payload.data?.title || 'MilanSetu';
    const body  = payload.notification?.body  || payload.data?.body  || '';
    const data  = payload.data || {};
    callback({ title, body, data });
  });
}
