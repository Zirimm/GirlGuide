// Name of the cache
const CACHE_NAME = 'dispenser-locator-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/main.js',
  '/map.html',
  '/manifest.json'
];

// Install service worker and cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch resources from the cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
