<template>
  <main class="mx-auto w-full max-w-7xl px-4 pb-8">
    <SiteHeader />
    <NuxtPage />
  </main>
  <ColorModeToggle />
</template>

<script setup>
import { onMounted } from "vue";

// Preload critical resources
useHead({
  link: [
    {
      rel: "preload",
      as: "style",
      href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&display=swap",
      media: "print",
      onload: "this.media='all'",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    { rel: "dns-prefetch", href: "https://api.github.com" },
  ],
});

// Register service worker for caching
onMounted(() => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }
});
</script>
