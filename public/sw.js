const CACHE_NAME = "brendon-portfolio-v1";
const urlsToCache = [
	"/",
	"/blog",
	"/projects",
	"/uses",
	"/images/profilepic.png",
	"/images/laptop-coding.png",
	"/_nuxt/entry.css",
	"/_nuxt/entry.js",
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Return cached version or fetch from network
			return response || fetch(event.request);
		}),
	);
});
