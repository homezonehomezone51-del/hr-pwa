self.addEventListener("fetch",e=>{
 e.respondWith(caches.open("hr").then(c=>c.match(e.request)||fetch(e.request)))
});