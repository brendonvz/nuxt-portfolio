<template>
  <div class="py-12 md:py-16">
    <h1 class="text-4xl text-center font-bold">Projects</h1>
  </div>

  <!-- Show loading state while waiting for the data -->
  <div v-if="pending">Loading...</div>

  <!-- Show the list of projects once data is available -->
  <section
    ref="projectContainer"
    class="w-full grid grid-cols-12 2xl:auto-rows-fr gap-4"
    v-if="data?.viewer?.repositories?.nodes"
  >
    <div
      v-for="project in data.viewer.repositories.nodes"
      :key="project.id"
      class="@container/section flex bg-[color:var(--background)] dark:bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-3 gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl overflow-hidden section-item"
    >
      <div class="p-6 flex flex-1 flex-col gap-4">
        <h2 class="text-2xl font-semibold mb-2">
          {{ project.name }}
        </h2>
        <p class="flex-1">{{ project.description }}</p>
        <a
          :href="project.url"
          target="_blank"
          class="w-fit inline-block bg-[color:var(--element-active-background)] hover:opacity-80 text-[color:var(--element-text-active)] py-2 px-6 rounded-full transition-all duration-200 font-semibold"
        >
          View on GitHub
        </a>
      </div>
    </div>
  </section>

  <!-- Handle case where no projects are available -->
  <div v-else-if="!pending">No projects found.</div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { gsap } from "gsap";

// SEO
useSeoMeta({
  title: "Brendon van Zanten | Projects",
  description:
    "View my portfolio of web development projects including Vue.js applications, WordPress sites, and custom web solutions.",
  keywords:
    "web development projects, vue.js portfolio, github projects, open source",
  // Open Graph tags for Facebook, LinkedIn, etc.
  ogTitle: "Brendon van Zanten - Projects",
  ogDescription: "View my portfolio of web development projects including Vue.js applications, WordPress sites, and custom web solutions.",
  ogImage: "/images/profilepic.png",
  ogImageAlt: "Web Development Projects - Brendon van Zanten",
  ogType: "website",
  ogUrl: "https://brendonvanzanten.com/projects",
  ogSiteName: "Brendon van Zanten",
  // Twitter Card tags
  twitterCard: "summary_large_image",
  twitterSite: "@brendon_vz",
  twitterCreator: "@brendon_vz",
  twitterTitle: "Brendon van Zanten - Projects",
  twitterDescription: "View my portfolio of web development projects including Vue.js applications, WordPress sites, and custom web solutions.",
  twitterImage: "/images/profilepic.png",
  twitterImageAlt: "Web Development Projects - Brendon van Zanten",
});

// Hybrid approach: server-side rendering + client-side API calls
const { data, pending, error } = await useAsyncData(
  "github-projects",
  async () => {
    try {
      const response = await $fetch("/api/github/projects");
      return response;
    } catch (err) {
      console.error("GitHub API error:", err);
      return null;
    }
  },
  {
    default: () => null,
    server: true, // Pre-render on server, cache on client
  }
);

const projectContainer = ref(null);

const animateProjects = () => {
  if (projectContainer.value) {
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
  }
};

onMounted(animateProjects);

watch(data, (newData) => {
  if (newData) {
    // We need to wait for the DOM to update with the new data
    // before we can animate the new elements.
    setTimeout(animateProjects, 0);
  }
});
</script>
