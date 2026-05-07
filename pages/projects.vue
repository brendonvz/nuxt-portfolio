<template>
  <PageHero title="Projects" />

  <!-- Show the list of projects once data is available -->
  <section
    ref="projectContainer"
    class="w-full grid grid-cols-12 2xl:auto-rows-fr gap-4 grid-container"
    v-if="data?.viewer?.repositories?.nodes"
  >
    <div
      v-for="project in data.viewer.repositories.nodes"
      :key="project.id"
      class="@container/section tile-base tile flex bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-3 gap-2 section-item"
    >
      <div class="p-6 flex flex-1 flex-col gap-4">
        <h2 class="font-display text-2xl mb-2 text-[color:var(--foreground)]">
          {{ project.name }}
        </h2>
        <p v-if="hasProjectDescription(project.description)" class="flex-1">
          {{ project.description?.trim() }}
        </p>
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="w-fit inline-block bg-[color:var(--element-active-background)] hover:opacity-80 text-[color:var(--element-text-active)] py-2 px-6 rounded-full transition-all duration-200 font-semibold font-sans text-[14px]"
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

useSeoMeta({
  title: "Brendon van Zanten | Projects",
  description: "View my portfolio of web development projects including Vue.js applications, WordPress sites, and custom web solutions.",
  keywords: "web development projects, vue.js portfolio, github projects, open source",
  ogTitle: "Brendon van Zanten - Projects",
  ogDescription: "View my portfolio of web development projects including Vue.js applications, WordPress sites, and custom web solutions.",
  ogImageAlt: "Web Development Projects - Brendon van Zanten",
  ogUrl: "https://brendonvanzanten.com/projects",
  twitterTitle: "Brendon van Zanten - Projects",
  twitterDescription: "View my portfolio of web development projects including Vue.js applications, WordPress sites, and custom web solutions.",
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
let gsapInstance = null;

const hasProjectDescription = (description) => {
  const normalizedDescription = description?.trim().toLowerCase();

  return Boolean(
    normalizedDescription && normalizedDescription !== "no description available"
  );
};

const getGsap = async () => {
  if (!gsapInstance) {
    const { gsap } = await import("gsap");
    gsapInstance = gsap;
  }

  return gsapInstance;
};

const animateProjects = async () => {
  if (!projectContainer.value) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    projectContainer.value.classList.add('is-ready');
    return;
  }

  const fallback = setTimeout(() => {
    if (projectContainer.value) projectContainer.value.classList.add('is-ready');
  }, 1000);

  const gsap = await getGsap();
  clearTimeout(fallback);

  const children = Array.from(projectContainer.value.children);
  gsap.set(children, { opacity: 0, y: 20 });
  projectContainer.value.classList.add('is-ready');
  gsap.to(children, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "back.out(1.2)",
    stagger: 0.08,
    delay: 0.05,
  });
};

onMounted(() => {
  void animateProjects();
});

watch(data, (newData) => {
  if (newData) {
    // We need to wait for the DOM to update with the new data
    // before we can animate the new elements.
    setTimeout(() => {
      void animateProjects();
    }, 0);
  }
});
</script>
