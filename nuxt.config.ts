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
		}
	},

	modules: [
		"@nuxt/content",
		"@vueuse/nuxt",
		"nuxt-icon",
		"@nuxtjs/apollo",
		"@nuxtjs/color-mode",
		"@nuxtjs/seo",
	],

	app: {
		head: {
			title: "Brendon van Zanten - Full Stack Web Developer",
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon-16x16.png",
				},
				{ rel: "manifest", href: "/site.webmanifest" },
			],
		},
	},

	apollo: {
		clients: {
			default: {
				tokenName: "github-token",
				httpEndpoint: "https://api.github.com/graphql", // GitHub GraphQL API
			},
		},
	},

	runtimeConfig: {
		githubToken: process.env.GITHUB_TOKEN,
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
