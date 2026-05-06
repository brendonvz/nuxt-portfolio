import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	vite: {
		plugins: [tailwindcss()],
		server: {
			watch: {
				usePolling: false,
				interval: 1000,
				ignored: ['**/node_modules/**', '**/.git/**']
			}
		}
	},

	// Performance optimizations
	experimental: {
		appManifest: false,
		viewTransition: true,
	},

	nitro: {
		compressPublicAssets: true,
		minify: true,
		preset: 'netlify',
		experimental: {
			wasm: true
		},
		esbuild: {
			options: {
				target: 'es2020'
			}
		},
		routeRules: {
			// Prevent favicon caching
			'/favicon/**': { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } },
			// Other static assets can still be cached
			'/images/**': { headers: { 'Cache-Control': 'public, max-age=31536000' } }, // 1 year
			'/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000' } }, // 1 year
			// Keep hidden variation page out of search results
			'/logo-variations': { headers: { 'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet' } },
			'/logo-variations/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet' } },
		}
	},

	modules: [
		"@nuxt/content",
		"@vueuse/nuxt",
		"nuxt-icon",
		"@nuxtjs/color-mode",
		"@nuxtjs/seo",
	],

	content: {
		markdown: {
			anchorLinks: false,
		},
	},

	site: {
		url: "https://brendonvanzanten.com",
		name: "Brendon van Zanten",
		description: "Full Stack Web Developer specializing in Vue.js, Nuxt.js, WordPress, and modern web applications. Based in Niagara, Ontario.",
		defaultLocale: "en",
	},

	app: {
		head: {
			title: "Brendon van Zanten - Full Stack Web Developer",
			titleTemplate: "%s",
			link: [
				{ rel: "icon", href: "/favicon/favicon.ico?v=3" },
				{ rel: "shortcut icon", href: "/favicon/favicon.ico?v=3" },
				{ rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg?v=3" },
				{ rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png?v=3", sizes: "96x96" },
				{ rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
				{ rel: "apple-touch-icon", type: "image/svg+xml", href: "/favicon/apple-touch-icon.svg" },
				{ rel: "manifest", href: "/favicon/site.webmanifest" },
			],
			meta: [
				{ name: "apple-mobile-web-app-title", content: "Brendon" },
			],
		},
	},

	runtimeConfig: {
		server: {
			githubToken: process.env.GITHUB_TOKEN,
		},
		public: {
			siteUrl: "https://brendonvanzanten.com",
			siteName: "Brendon van Zanten",
			siteDescription:
				"Full Stack Web Developer specializing in Vue.js, Nuxt.js, WordPress, and modern web applications. Based in Niagara, Ontario.",
			language: "en",
		},
	},

	compatibilityDate: "2025-01-08",

	colorMode: {
		classSuffix: "",
		fallback: "light",
		dataValue: "theme",
		preference: "system",
		storageKey: "nuxt-color-mode",
	},

	// CSS optimization
	css: ["~/assets/css/main.css"],

	// Build optimizations
	build: {
		transpile: ["gsap"],
	},
});
