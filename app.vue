<template>
  <main class="mx-auto w-full max-w-7xl px-4 pt-6 pb-8">
    <SiteHeader />
    <NuxtPage />
    <footer class="mt-14 flex justify-between items-end text-xs tracking-wide text-[color:var(--foreground)] opacity-60">
      <div>
        <div>© {{ year }} Brendon van Zanten</div>
        <div class="mt-1 opacity-70">Designed &amp; coded in Niagara</div>
      </div>
      <div class="text-right">
        <div>brendon.vanzanten@gmail.com</div>
        <div class="mt-1 opacity-70">brendonvanzanten.com</div>
      </div>
    </footer>
  </main>
  <ColorModeToggle />
</template>

<script setup>
import { onMounted } from "vue";

const year = new Date().getFullYear();

useSchemaOrg([
  defineWebSite({ name: 'Brendon van Zanten' }),
  definePerson({
    name: 'Brendon van Zanten',
    url: 'https://brendonvanzanten.com',
    jobTitle: 'Software Engineer',
    email: 'brendon.vanzanten@gmail.com',
    sameAs: [
      'https://ca.linkedin.com/in/brendon-van-zanten-13121559',
      'https://instagram.com/brendonvz',
    ],
  }),
])

// Shared defaults — pages override title/description/ogTitle/ogDescription/ogUrl as needed
useSeoMeta({
  author: "Brendon van Zanten",
  ogSiteName: "Brendon van Zanten",
  ogType: "website",
  ogImage: "https://brendonvanzanten.com/images/og-card.jpg",
  twitterCard: "summary_large_image",
  twitterSite: "@brendon_vz",
  twitterCreator: "@brendon_vz",
  twitterImage: "https://brendonvanzanten.com/images/og-card.jpg",
});

// Load external resources with low render impact
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Instrument+Serif:ital@0;1&display=swap",
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
