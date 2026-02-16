const APP_CACHE = "brendon-portfolio-app-v2";
const ASSET_CACHE = "brendon-portfolio-assets-v2";

const APP_SHELL_ROUTES = ["/", "/blog", "/projects", "/uses", "/work"];
const OFFLINE_FALLBACK = "/";

self.addEventListener("install", (event) => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(APP_CACHE);
			await cache.addAll(APP_SHELL_ROUTES);
		})(),
	);
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		(async () => {
			const keys = await caches.keys();
			await Promise.all(
				keys
					.filter((key) => key !== APP_CACHE && key !== ASSET_CACHE)
					.map((key) => caches.delete(key)),
			);
		})(),
	);
	self.clients.claim();
});

self.addEventListener("fetch", (event) => {
	const { request } = event;

	if (request.method !== "GET") return;

	const url = new URL(request.url);

	if (request.mode === "navigate") {
		event.respondWith(networkFirst(request, APP_CACHE, OFFLINE_FALLBACK));
		return;
	}

	if (
		url.pathname.startsWith("/_nuxt/") ||
		url.pathname.startsWith("/images/") ||
		url.pathname.startsWith("/favicon/")
	) {
		event.respondWith(staleWhileRevalidate(request, ASSET_CACHE));
	}
});

async function networkFirst(request, cacheName, fallbackPath) {
	const cache = await caches.open(cacheName);

	try {
		const response = await fetch(request);
		cache.put(request, response.clone());
		return response;
	} catch {
		const cached = await cache.match(request);
		if (cached) return cached;
		return cache.match(fallbackPath);
	}
}

async function staleWhileRevalidate(request, cacheName) {
	const cache = await caches.open(cacheName);
	const cached = await cache.match(request);

	const networkFetch = fetch(request)
		.then((response) => {
			if (response && response.status === 200) {
				cache.put(request, response.clone());
			}
			return response;
		})
		.catch(() => null);

	return cached || networkFetch;
}
