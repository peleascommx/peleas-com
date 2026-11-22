/* Service worker sencillo para la plantilla base.
   Guarda en caché la página principal para que cargue rápido.
   Reemplazar [NOMBRE] no es necesario: no contiene datos del negocio. */
const CACHE = 'plantilla-base-v1';
const ARCHIVOS = ['./', './index.html', './app.html', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((respuesta) => respuesta || fetch(event.request))
  );
});
