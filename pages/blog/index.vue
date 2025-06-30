<template>
  <div class="py-12 md:py-16">
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
  title: "Brendon van Zanten | Blog",
  description:
    "Web development insights, tutorials, and thoughts from a full stack developer. Learn about Vue.js, Nuxt.js, WordPress, and modern web technologies.",
  keywords:
    "web development blog, vue.js tutorials, nuxt.js guides, javascript tips, wordpress development",
  // Open Graph tags for Facebook, LinkedIn, etc.
  ogTitle: "Brendon van Zanten - Blog",
  ogDescription: "Web development insights, tutorials, and thoughts from a full stack developer. Learn about Vue.js, Nuxt.js, WordPress, and modern web technologies.",
  ogImage: "/images/profilepic.png",
  ogImageAlt: "Web Development Blog - Brendon van Zanten",
  ogType: "website",
  ogUrl: "https://brendonvanzanten.com/blog",
  ogSiteName: "Brendon van Zanten",
  // Twitter Card tags
  twitterCard: "summary_large_image",
  twitterSite: "@brendon_vz",
  twitterCreator: "@brendon_vz",
  twitterTitle: "Brendon van Zanten - Blog",
  twitterDescription: "Web development insights, tutorials, and thoughts from a full stack developer.",
  twitterImage: "/images/profilepic.png",
  twitterImageAlt: "Web Development Blog - Brendon van Zanten",
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
