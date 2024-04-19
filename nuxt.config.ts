// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	runtimeConfig: {
		githubToken: process.env.GITHUB_TOKEN
	},
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@nuxtjs/apollo'],
	content: {
    highlight: {
      theme: 'nord',
      preload: ['ts','js','css','java','json','bash','vue']
    }
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    }
  }
})