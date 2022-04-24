const assets = [
  "/",
  "styles.css",
  "app.js",
  "sw-register.js",
  "https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2"
];

self.addEventListener("install", event => {
  caches.open("assets").then(cache => {
    cache.addAll(assets)
  })
})

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if(cachedResponse){
          return cachedResponse
        } else {
          return fetch(event.request)
        }
      }) 
  )
})