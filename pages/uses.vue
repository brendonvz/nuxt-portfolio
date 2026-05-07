<template>
  <PageHero title="Uses" />

  <div
    ref="usesContainer"
    class="w-full grid grid-cols-12 2xl:auto-rows-fr gap-4 grid-container"
  >
    <div
      class="@container/section tile-base tile flex bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-3 gap-2 p-6 section-item"
    >
      <h2 class="font-display text-2xl mb-2 text-[color:var(--foreground)]">This Website</h2>
      <ul class="list-disc">
        <li class="ml-8 py-1"><a href="https://vuejs.org/">Vue 3</a></li>
        <li class="ml-8 py-1"><a href="https://nuxt.com/">Nuxt 3</a></li>
        <li class="ml-8 py-1">
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
        </li>
        <li class="ml-8 py-1">
          Hosted on <a href="https://netlify.com/">Netlify</a>
        </li>
      </ul>
    </div>

    <div
      class="@container/section tile-base tile flex bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-3 gap-2 p-6 section-item"
    >
      <h2 class="font-display text-2xl mb-2 text-[color:var(--foreground)]">Dev Environment</h2>
      <ul class="list-disc">
        <li class="ml-8 py-1">
          Cursor / VS Code
        </li>
        <li class="ml-8 py-1">
          Panda Theme + Material Icon Theme
        </li>
        <li class="ml-8 py-1">
          Codex / OpenCode
        </li>
        <li class="ml-8 py-1">
          Ghostty with ZSH
        </li>
      </ul>
    </div>
    <div
      class="@container/section tile-base tile flex bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-3 gap-2 p-6 section-item"
    >
      <h2 class="font-display text-2xl mb-2 text-[color:var(--foreground)]">Hardware</h2>
      <ul class="list-disc">
        <li
          class="ml-8 py-1 leading-snug md:leading-normal"
          style="padding-left: 0; text-indent: 0;"
        >
          <a href="https://www.apple.com/ca/macbook-pro/"
            >MacBook Pro M4 14" (2025) 16GB RAM, 512GB SSD</a
          >
        </li>
        <li class="ml-8 py-1">Keychron K3 Mechanical Keyboard</li>
        <li class="ml-8 py-1">
          <a
            href="https://www.lg.com/us/monitors/lg-38wn95c-w-ultrawide-monitor"
            >LG 38" Ultrawide (38WN95C)</a
          >
        </li>
        <li class="ml-8 py-1">iPhone 16 Pro</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const usesContainer = ref(null);

useSeoMeta({
  title: "Brendon van Zanten - Uses",
  description: "Tools, software, and hardware I use for web development. My development setup, favorite VS Code extensions, and productivity tools.",
  keywords: "developer tools, vs code setup, web development tools, productivity setup",
  ogTitle: "Brendon van Zanten - Uses",
  ogDescription: "Tools, software, and hardware I use for web development. My development setup, favorite VS Code extensions, and productivity tools.",
  ogImageAlt: "Developer Tools and Setup - Brendon van Zanten",
  ogUrl: "https://brendonvanzanten.com/uses",
  twitterTitle: "Brendon van Zanten - Uses",
  twitterDescription: "Tools, software, and hardware I use for web development. My development setup and productivity tools.",
  twitterImageAlt: "Developer Tools and Setup - Brendon van Zanten",
});

onMounted(async () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    usesContainer.value.classList.add('is-ready');
    return;
  }

  const fallback = setTimeout(() => {
    if (usesContainer.value) usesContainer.value.classList.add('is-ready');
  }, 1000);

  const { gsap } = await import("gsap");
  clearTimeout(fallback);

  const children = Array.from(usesContainer.value.children);
  gsap.set(children, { opacity: 0, y: 20 });
  usesContainer.value.classList.add('is-ready');
  gsap.to(children, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "back.out(1.2)",
    stagger: 0.08,
    delay: 0.05,
  });
});
</script>
