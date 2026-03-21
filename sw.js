const CACHE_NAME = 'personal-website-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/pages/about.html',
  '/pages/portfolio.html',
  '/pages/blog.html',
  '/pages/post.html',
  '/pages/contact.html',
  '/404.html'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Cache failed:', err))
  );
  self.skipWaiting();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            // Don't cache if not valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Clone response to cache it
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));
            return response;
          });
      })
      .catch(() => {
        // Return offline page if network fails
        if (event.request.mode === 'navigate') {
          return caches.match('/404.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});
