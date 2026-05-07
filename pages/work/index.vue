<template>
  <PageHero title="Client Work" />

  <div
    class="w-full grid grid-cols-12 2xl:auto-rows-fr gap-4"
  >
    <ClientWorkCard :work="workItems" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

useSeoMeta({
  title: "Brendon van Zanten - Client Work",
  description: "Explore the web development projects I've completed for clients. Custom websites, web applications, and digital solutions.",
  keywords: "web development projects, client work, custom websites, web applications, portfolio",
  ogTitle: "Brendon van Zanten - Client Work",
  ogDescription: "Explore the web development projects I've completed for clients. Custom websites, web applications, and digital solutions.",
  ogImageAlt: "Client Work - Brendon van Zanten",
  ogUrl: "https://brendonvanzanten.com/work",
  twitterTitle: "Brendon van Zanten - Client Work",
  twitterDescription: "Explore the web development projects I've completed for clients.",
  twitterImageAlt: "Client Work - Brendon van Zanten",
});

const { data: workItems } = await useAsyncData("work", () =>
  queryContent("/work").sort({ date: -1 }).find()
);

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
