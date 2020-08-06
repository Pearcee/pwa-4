const staticVersion = "dev-site-v3";
const assets = [
  "/",
  "/index.html",
  "/location.html",
  "/grid.html",
  "/css/style.css",
  "/js/app.js",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticVersion).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
