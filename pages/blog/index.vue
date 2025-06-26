<template>
  <div class="py-16">
    <h1 class="text-4xl text-center font-bold">Blog</h1>
  </div>
  <div
    ref="postContainer"
    class="w-full grid grid-cols-12 2xl:auto-rows-fr gap-4"
  >
    <Post :posts="posts" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

// SEO
useSeoMeta({
  title: "Blog - Brendon van Zanten",
  description:
    "Web development insights, tutorials, and thoughts from a full stack developer. Learn about Vue.js, Nuxt.js, WordPress, and modern web technologies.",
  keywords:
    "web development blog, vue.js tutorials, nuxt.js guides, javascript tips, wordpress development",
});

const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog").find()
);

const postContainer = ref(null);

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
