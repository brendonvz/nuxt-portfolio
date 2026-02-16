<template>
  <div class="py-12 md:py-16">
    <h1 class="text-4xl text-center font-bold">{{ data.title }}</h1>
  </div>

  <div
    ref="gridContainer"
    class="w-full grid grid-cols-12 gap-4 grid-container"
  >
    <!-- Logo Section Container -->
    <div
      v-if="data.logo || data.goodwell || data.studioMined"
      class="col-span-full md:col-span-6 xl:col-span-3 flex flex-col gap-4"
    >
      <!-- Main Logo Section -->
      <section
        v-if="data.logo"
        class="@container/section client-logo-section flex flex-col gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item aspect-square"
        :style="{ backgroundColor: data.logoBg || 'var(--element-background)' }"
      >
        <div class="flex flex-1 items-center justify-center p-6">
          <img
            :src="`/images/work/${data.logo}`"
            :alt="`${data.client || data.title} logo`"
            loading="eager"
            decoding="async"
            class="max-w-[60%] max-h-[60%] object-contain"
          />
        </div>
      </section>

      <!-- Goodwell Logo Section -->
      <section
        v-if="data.goodwell"
        class="@container/section goodwell-logo-section flex flex-col gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item aspect-square"
        :style="{ backgroundColor: data.goodwellBg || '#ECE9E1' }"
      >
        <a
          href="https://goodwellstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-1 items-center justify-center p-6"
        >
          <img
            src="/images/work/goodwell-logo.png"
            alt="Goodwell Studio logo"
            loading="lazy"
            decoding="async"
            class="max-w-[80%] max-h-[80%] object-contain"
          />
        </a>
      </section>

      <!-- Studio Mined Logo Section -->
      <section
        v-if="data.studioMined"
        class="@container/section studio-mined-logo-section flex flex-col gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item aspect-square"
        :style="{ backgroundColor: data.studioMinedBg || '#edd710' }"
      >
        <a
          href="https://studiomined.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-1 items-center justify-center p-6"
        >
          <img
            src="/images/work/studio-mined-logo.jpg"
            alt="Studio Mined logo"
            loading="lazy"
            decoding="async"
            class="max-w-[80%] max-h-[80%] object-contain"
          />
        </a>
      </section>
    </div>

    <!-- Writeup and Screenshot Container -->
    <div
      class="col-span-full md:col-span-6 flex flex-col gap-4"
      :class="(data.logo || data.goodwell || data.studioMined) ? 'xl:col-span-9' : 'xl:col-span-full'"
    >
      <!-- Writeup Section -->
      <section
        class="@container/section client-writeup-section bg-[color:var(--element-background)] p-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item self-start w-full"
      >
        <div class="p-6 flex flex-col gap-4">
          <div v-if="data.tag" class="mb-6">
            <span
              class="bg-[color:var(--color-red)] text-white text-sm font-medium px-4 py-1 rounded-full"
            >
              {{ data.tag }}
            </span>
          </div>
          <ContentRenderer :value="data" class="prose max-w-none" />

          <a
            v-if="data.website"
            :href="data.website"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center w-fit bg-[color:var(--element-active-background)] hover:opacity-80 text-[color:var(--element-text-active)] py-2 px-6 rounded-full transition-all duration-200 self-start font-semibold mt-6"
          >
            View Website
            <svg
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <!-- Screenshot Section -->
      <section
        v-if="data.screenshot"
        class="@container/section screenshot-section bg-[color:var(--element-background)] ring-1 ring-[color:var(--border-color)] rounded-4xl section-item overflow-hidden w-full"
      >
        <img
          :src="`/images/work/${data.screenshot}`"
          :alt="`${data.title} screenshot`"
          loading="lazy"
          decoding="async"
          class="w-full h-auto object-cover"
        />
      </section>
    </div>
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
    `Learn about "${data.value?.title}" - a client project by Brendon van Zanten.`,
  keywords: () =>
    data.value?.client
      ? `${data.value.client}, client work, web development`
      : "client work, web development, portfolio",
});

const gridContainer = ref(null);

onMounted(() => {
  // Make the container visible immediately
  gsap.set(gridContainer.value, { visibility: "visible" });

  // Animate the sections
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
