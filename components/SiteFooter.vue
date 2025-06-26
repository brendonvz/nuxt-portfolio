<template>
  <footer class="bg-gray-800">
    <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row">
      <p class="flex-1">&copy; Brendon van Zanten. All Rights Reserved</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup>
	const links = [
		{ name: 'Twitter', href: 'https://x.com/brendon_vz', icon: 'entypo-social:twitter' },
		{ name: 'LinkedIn', href: 'https://ca.linkedin.com/in/brendon-van-zanten-13121559', icon: 'entypo-social:linkedin-with-circle' },
		{ name: 'Instagram', href: 'https://www.instagram.com/brendonvz/', icon: 'entypo-social:instagram' }
	]
</script>