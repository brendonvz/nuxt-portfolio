<template>
	<div class="bento-grid mt-20">
		<div class="bento-item flex flex-col md:flex-row">
			<div class="md:w-3/4">
				<h1 class="text-8xl font-bold">Brendon van Zanten</h1>
				<p class="text-base text-gray-900 p-2 italic">Currently a Senior Web Developer at DSBN</p>
				<div class="flex flex-row gap-4 mb-4 mt-2">
					<a v-for="link in links" :key="link.name" :href="link.href">
						<Icon :name="link.icon" size="1.5rem" class="text-blacks-300" />
					</a>
				</div>
				<div>
					<p class="text-lg py-2">
						I am a Web Developer living based in Niagara, Ontario who has been doing full-stack development since 2015.
					</p>
					<p class="text-lg py-2">
						My technical skills consist mostly of HTML, CSS, Javascript with a focus on Vue and Nuxt! and then backend knowledge of Node, PHP and .NET
					</p>
				</div>
			</div>
			<div><img src="~/assets/images/profilepic.png" class="p-8 mx-auto" /></div>
		</div>
	</div>
</template>

<script setup>
	const { data: posts } = await useAsyncData('latest-posts', () =>
		queryContent('/blog')
			.sort({ data: 1 })
			.limit(3)
			.find()
	)

	const links = [
		{ name: 'Twitter', href: 'https://x.com/brendon_vz', icon: 'entypo-social:twitter' },
		{ name: 'LinkedIn', href: 'https://ca.linkedin.com/in/brendon-van-zanten-13121559', icon: 'entypo-social:linkedin-with-circle' },
		{ name: 'Instagram', href: 'https://www.instagram.com/brendonvz/', icon: 'entypo-social:instagram' }
	]

</script>