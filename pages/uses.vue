<template>
  <div class="py-16">
    <h1 class="text-4xl text-center font-bold">Uses</h1>
  </div>

  <div
    ref="usesContainer"
    class="w-full grid grid-cols-12 2xl:auto-rows-fr gap-4"
  >
    <div
      class="@container/section flex bg-[color:var(--background)] dark:bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-3 gap-2 p-6 ring-1 ring-[color:var(--border-color)] rounded-4xl overflow-hidden section-item"
    >
      <h2 class="text-2xl font-bold mb-2">This Website</h2>
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
      class="@container/section flex bg-[color:var(--background)] dark:bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-3 gap-2 p-6 ring-1 ring-[color:var(--border-color)] rounded-4xl overflow-hidden section-item"
    >
      <h2 class="text-2xl font-bold mb-2">Editor</h2>
      <ul class="list-disc">
        <li class="ml-8 py-1">
          <a
            href="https://code.visualstudio.com/"
            aria-label="Visual Studio Code"
            >Visual Studio Code</a
          >
        </li>
        <li class="ml-8 py-1">
          <a href="https://www.cursor.com/" aria-label="Cursor">Cursor</a>
        </li>
        <li class="ml-8 py-1">
          <a
            href="https://code.visualstudio.com/"
            aria-label="Panda Theme + Material Icon Them"
            >Panda Theme + Material Icon Theme</a
          >
        </li>
      </ul>
    </div>
    <div
      class="@container/section flex bg-[color:var(--background)] dark:bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-3 gap-2 p-6 ring-1 ring-[color:var(--border-color)] rounded-4xl overflow-hidden section-item"
    >
      <h2 class="text-2xl font-bold mb-2">Hardware</h2>
      <ul class="list-disc">
        <li class="ml-8 py-1">
          <a href="https://www.apple.com/ca/macbook-pro/"
            >MacBook Pro M4 14" (2025) 16GB RAM, 512GB SSD</a
          >
        </li>
        <li class="ml-8 py-1">
          <a
            href="https://www.lg.com/us/monitors/lg-38wn95c-w-ultrawide-monitor"
            >LG 38" Ultrawide (38WN95C)</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

// SEO
useSeoMeta({
  title: "Brendon van Zanten | Uses",
  description:
    "Tools, software, and hardware I use for web development. My development setup, favorite VS Code extensions, and productivity tools.",
  keywords:
    "developer tools, vs code setup, web development tools, productivity setup",
});

const usesContainer = ref(null);

onMounted(() => {
  gsap.fromTo(
    ".section-item",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "back.out(1.2)",
      stagger: 0.08,
      delay: 0.05,
    }
  );
});
</script>
