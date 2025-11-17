
const CACHE_NAME = 'encrypted-mapper-cache-v1-21';
const urlsToCache = [
    '/',
    '/index.html',
    '/icons/icon-192.png',
    '/icons/icon-512.png',
    '/icons/whdigo-transparent-square-logo.png',
    '/icons/whdigo-words-transparent.png',
    '/libs/argon2.wasm',
    '/libs/argon2-bundled.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
        // This handles navigation requests (index.html)
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put('/', copy));
                    return response;
                })
                .catch(() => caches.match('/index.html'))
        );
    } else {
        // Other files: cache-first
        event.respondWith(
            caches.match(event.request)
                .then(response => response || fetch(event.request))
        );
    }
});