<template>
  <main class="mx-auto w-full max-w-7xl px-4 pb-8">
    <SiteHeader />
    <NuxtPage />
  </main>
  <ColorModeToggle />
</template>

<script setup>
import { onMounted } from "vue";

// Load external resources with low render impact
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap",
      media: "print",
      onload: "this.media='all'",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  ],
  script: import.meta.dev
    ? [
        {
          innerHTML:
            "navigator.serviceWorker?.getRegistrations?.().then((registrations)=>registrations.forEach((registration)=>registration.unregister())).catch(()=>{});window.caches?.keys?.().then((keys)=>keys.forEach((key)=>window.caches.delete(key))).catch(()=>{});",
          tagPosition: "bodyClose",
        },
      ]
    : [],
});

// Register service worker for caching
onMounted(() => {
  if (import.meta.dev) {
    navigator.serviceWorker
      ?.getRegistrations()
      .then((registrations) =>
        Promise.all(registrations.map((registration) => registration.unregister()))
      )
      .catch(() => {});
    window.caches
      ?.keys()
      .then((keys) => Promise.all(keys.map((key) => window.caches.delete(key))))
      .catch(() => {});
    return;
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }
});
</script>
