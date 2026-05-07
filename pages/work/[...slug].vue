<template>
  <div class="mb-6">
    <NuxtLink
      to="/work"
      class="inline-flex items-center gap-1.5 text-[13px] font-medium opacity-60 hover:opacity-100 transition-opacity text-[color:var(--foreground)]"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
      Work
    </NuxtLink>
  </div>
  <PageHero :title="data.title" />

  <div
    ref="gridContainer"
    class="w-full grid grid-cols-12 gap-4 grid-container"
  >
    <!-- Logo Section Container (left column on md+) -->
    <div
      v-if="data.logo || data.goodwell || data.studioMined"
      class="col-span-full md:col-span-6 xl:col-span-3 flex flex-col gap-4"
    >
      <!-- Main Logo -->
      <section
        v-if="data.logo"
        class="@container/section tile-base client-logo-section flex flex-col gap-2 section-item aspect-[4/3] md:aspect-square"
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

      <!-- Goodwell Logo — desktop only; mobile version appears after writeup -->
      <section
        v-if="data.goodwell"
        class="@container/section tile-base goodwell-logo-section hidden md:flex flex-col gap-2 section-item aspect-square"
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

      <!-- Studio Mined Logo — desktop only; mobile version appears after writeup -->
      <section
        v-if="data.studioMined"
        class="@container/section tile-base studio-mined-logo-section hidden md:flex flex-col gap-2 section-item aspect-square"
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
        class="@container/section tile-base tile client-writeup-section bg-[color:var(--element-background)] p-2 section-item self-start w-full"
      >
        <div class="p-6 flex flex-col gap-4">
          <div v-if="data.tag" class="mb-6">
            <span
              class="bg-accent text-white text-sm font-medium px-4 py-1 rounded-full"
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
        class="@container/section tile-base tile screenshot-section bg-[color:var(--element-background)] section-item w-full"
      >
        <div class="aspect-video w-full">
          <img
            :src="`/images/work/${data.screenshot}`"
            :alt="`${data.title} screenshot`"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>

    <!-- Goodwell Logo — mobile only; desktop version is inside the left column container above -->
    <section
      v-if="data.goodwell"
      class="@container/section tile-base goodwell-logo-section md:hidden flex flex-col gap-2 section-item aspect-[4/3] col-span-full"
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

    <!-- Studio Mined Logo — mobile only; desktop version is inside the left column container above -->
    <section
      v-if="data.studioMined"
      class="@container/section tile-base studio-mined-logo-section md:hidden flex flex-col gap-2 section-item aspect-[4/3] col-span-full"
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
</template>

<script setup>
import { ref, onMounted } from "vue";

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () =>
  queryContent().where({ _path: path }).findOne()
);

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' });
}

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
  ogImage: () => data.value?.screenshot ? `/images/work/${data.value.screenshot}` : undefined,
  twitterImage: () => data.value?.screenshot ? `/images/work/${data.value.screenshot}` : undefined,
});

const gridContainer = ref(null);

onMounted(async () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    gridContainer.value.classList.add('is-ready');
    return;
  }

  const fallback = setTimeout(() => {
    if (gridContainer.value) gridContainer.value.style.visibility = 'visible';
  }, 1000);

  const { gsap } = await import("gsap");
  clearTimeout(fallback);

  const children = Array.from(gridContainer.value.querySelectorAll('.section-item'));
  gsap.set(children, { opacity: 0, y: 20 });
  gridContainer.value.classList.add('is-ready');
  gsap.to(children, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "back.out(1.2)",
    stagger: 0.08,
    delay: 0.05,
  });
});
</script>
