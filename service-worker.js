// service-worker.js
self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', function(event) {
  // No caching needed, just default pass-through
});
