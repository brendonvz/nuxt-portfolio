<template>
  <main class="mx-auto w-full max-w-7xl px-8 pb-8">
    <SiteHeader />
    <NuxtPage />
  </main>
  <ColorModeToggle />
</template>

<script setup>
// Preload critical resources
useHead({
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    { rel: "dns-prefetch", href: "https://api.github.com" },
  ],
});

// Register service worker for caching
if (process.client && "serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch((error) =>
      console.log("Service Worker registration failed:", error)
    );
}
</script>
