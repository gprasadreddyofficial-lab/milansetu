// Firebase Cloud Messaging Service Worker
// Place this file at: public/firebase-messaging-sw.js
// (Vite serves public/ at the root, so it will be at /firebase-messaging-sw.js)

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// ── PASTE YOUR FIREBASE CONFIG HERE (same as firebase.js) ────────────────────
firebase.initializeApp({
  apiKey:            "REPLACE_WITH_YOUR_API_KEY",
  authDomain:        "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId:         "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket:     "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId:             "REPLACE_WITH_YOUR_APP_ID",
});
// ─────────────────────────────────────────────────────────────────────────────

const messaging = firebase.messaging();

// Handle background push messages
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || payload.data?.title || 'MilanSetu';
  const body  = payload.notification?.body  || payload.data?.body  || 'You have a new message';
  const icon  = payload.notification?.icon  || '/milansetu-icon.png';

  self.registration.showNotification(title, {
    body,
    icon,
    badge: '/milansetu-icon.png',
    data: payload.data || {},
    vibrate: [200, 100, 200],
    tag: 'milansetu-notification',
  });
});

// Click on notification → focus or open the app
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.postMessage({ type: 'NOTIFICATION_CLICK', data: event.notification.data });
          return client.focus();
        }
      }
      return clients.openWindow(url);
    })
  );
});
