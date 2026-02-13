self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('discipline-store').then(cache => {
            return cache.addAll(['index.html']);
        })
    );
});
