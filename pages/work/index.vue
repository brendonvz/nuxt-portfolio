<template>
  <div class="py-12 md:py-16">
    <h1 class="text-4xl text-center font-bold">Client Work</h1>
  </div>

  <div
    ref="workContainer"
    class="w-full grid grid-cols-12 2xl:auto-rows-fr gap-4"
  >
    <ClientWorkCard :work="workItems" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// SEO
useSeoMeta({
  title: "Brendon van Zanten | Client Work",
  description:
    "Explore the web development projects I've completed for clients. Custom websites, web applications, and digital solutions.",
  keywords:
    "web development projects, client work, custom websites, web applications, portfolio",
  // Open Graph tags for Facebook, LinkedIn, etc.
  ogTitle: "Brendon van Zanten - Client Work",
  ogDescription: "Explore the web development projects I've completed for clients. Custom websites, web applications, and digital solutions.",
  ogImage: "/images/profilepic.jpg",
  ogImageAlt: "Client Work - Brendon van Zanten",
  ogType: "website",
  ogUrl: "https://brendonvanzanten.com/work",
  ogSiteName: "Brendon van Zanten",
  // Twitter Card tags
  twitterCard: "summary_large_image",
  twitterSite: "@brendon_vz",
  twitterCreator: "@brendon_vz",
  twitterTitle: "Brendon van Zanten - Client Work",
  twitterDescription: "Explore the web development projects I've completed for clients.",
  twitterImage: "/images/profilepic.jpg",
  twitterImageAlt: "Client Work - Brendon van Zanten",
});

const { data: workItems } = await useAsyncData("work", () =>
  queryContent("/work").sort({ date: -1 }).find()
);

const workContainer = ref(null);

onMounted(async () => {
  const { gsap } = await import("gsap");

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
