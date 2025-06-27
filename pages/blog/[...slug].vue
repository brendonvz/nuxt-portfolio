<template>
  <div class="py-12 md:py-16">
    <h1 class="text-4xl text-center font-bold">{{ data.title }}</h1>
  </div>

  <div
    ref="gridContainer"
    class="w-full grid grid-cols-12 2xl:auto-rows-fr gap-4 grid-container"
  >
    <!-- Blog Post Section -->
    <section
      class="@container/section blog-post-section flex bg-[color:var(--element-background)] flex-col col-span-full gap-2 p-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item"
    >
      <div class="p-6 flex flex-1 flex-col gap-4">
        <ContentRenderer :value="data" class="prose max-w-none" />

        <div class="mt-8" v-if="data.tags && data.tags.length > 0">
          <a
            v-for="tag in data.tags"
            :key="tag"
            :href="`/blog/tags/${tag}`"
            class="text-sm font-semibold inline-block py-2 px-4 rounded-lg bg-[color:var(--element-active-background)] text-[color:var(--element-text-active)] uppercase last:mr-0 mr-4 transition-all duration-200 hover:opacity-80"
          >
            <Icon name="pajamas:label" size="1.5rem" class="mr-2" /> {{ tag }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () =>
  queryContent().where({ _path: path }).findOne()
);

// SEO
useSeoMeta({
  title: () => `Brendon van Zanten | ${data.value?.title}`,
  description: () =>
    data.value?.description ||
    `Read "${data.value?.title}" on Brendon van Zanten's blog. Web development insights and tutorials.`,
  keywords: () =>
    data.value?.tags?.join(", ") || "web development, programming, tutorial",
});

const gridContainer = ref(null);

onMounted(() => {
  // Make the container visible immediately
  gsap.set(gridContainer.value, { visibility: "visible" });

  // Animate the blog post section
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
      delay: 0.05,
    }
  );
});
</script>
