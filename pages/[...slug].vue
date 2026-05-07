<template>
  <PageHero title="404" />
  <div class="flex flex-col items-start gap-3 -mt-6">
    <p class="font-display font-normal text-3xl text-[color:var(--foreground)]">Page not found.</p>
    <p class="text-[color:var(--foreground)] opacity-60 text-[15px] max-w-sm">
      That page doesn't exist or was moved.
    </p>
    <NuxtLink
      to="/"
      class="mt-2 inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm font-medium no-underline transition-opacity hover:opacity-75"
      style="background-color: var(--color-accent);"
    >
      Go home
    </NuxtLink>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Brendon van Zanten | Page Not Found',
  robots: 'noindex',
})
</script>
