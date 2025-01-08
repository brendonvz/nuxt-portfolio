// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/apollo'
  ],

	css: [
    '~/assets/css/main.css',
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  apollo: {
    clients: {
      default: {
				tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql', // GitHub GraphQL API
      },
    },
  },

  runtimeConfig: {
		githubToken: process.env.GITHUB_TOKEN
  },

  compatibilityDate: '2025-01-08',
});
