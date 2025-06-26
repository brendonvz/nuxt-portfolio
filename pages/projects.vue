<template>
  <div class="py-16">
    <h1 class="text-4xl text-center font-bold">Projects</h1>
  </div>

  <!-- Show loading state while waiting for the data -->
  <div v-if="pending">Loading...</div>

  <!-- Show error message if the query fails -->
  <div v-if="error">{{ error.message }}</div>

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
        <a :href="project.url" target="_blank">
          <h2 class="text-2xl font-semibold mb-2 hover:underline">
            {{ project.name }}
          </h2>
        </a>
        <p>{{ project.description }}</p>
        <div class="mt-4">
          <Icon name="fontisto:star" size="1.1rem" />
          Stars: {{ project.stargazers.totalCount }}
          <Icon name="system-uicons:branch" size="1.1rem" />
          Forks: {{ project.forks.totalCount }}
          <Icon name="system-uicons:eye" size="1.1rem" />
          Watchers: {{ project.watchers.totalCount }}
        </div>
      </div>
    </div>
  </section>

  <!-- Handle case where no projects are available -->
  <div v-else>No projects found.</div>
</template>

<script setup>
import { gql } from "@apollo/client/core";
import { ref, onMounted, watch } from "vue";
import { gsap } from "gsap";

// SEO
useSeoMeta({
  title: "Projects - Brendon van Zanten",
  description:
    "View my portfolio of web development projects including Vue.js applications, WordPress sites, and custom web solutions.",
  keywords:
    "web development projects, vue.js portfolio, github projects, open source",
});

const query = gql`
  {
    viewer {
      repositories(first: 6, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

// Use the useAsyncQuery hook properly
const { data, error, pending } = useAsyncQuery(query);

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
