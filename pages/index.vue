<template>
  <PageHero
    title="Brendon van Zanten"
    subtitle="Software engineer · Niagara, ON"
    :show-dot="true"
    :animated="true"
    :title-parts="{
      line1: 'Brendon'.split(''),
      line2: 'van '.split(''),
      line3: 'Zanten.'.split('')
    }"
  />

  <div
    ref="gridContainer"
    class="@container w-full grid grid-cols-12 gap-4 grid-container"
  >
    <!-- Logo Section -->
    <section
      class="@container/section tile-base logo-section wiggle-on-hover flex flex-col col-span-full md:col-span-6 xl:col-span-3 xl:row-span-3 gap-2 md:aspect-square"
    >
      <div class="flex flex-1 items-center justify-center p-6">
        <LogoMark
          aria-label="Brendon van Zanten logo"
          class="logo-mark w-full h-full max-w-[40%] max-h-[40%] object-contain"
        />
      </div>
    </section>

    <!-- About Section -->
    <div class="tile-base tile col-span-full md:col-span-6 md:aspect-square xl:col-span-6 xl:row-span-3 xl:aspect-auto group about-section">
      <div class="p-6 h-full flex items-center relative overflow-hidden">
        <div>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase text-white bg-accent">
            <span class="w-1.5 h-1.5 rounded-full bg-white inline-block" />
            About
          </span>
          <p class="font-display text-[20px] leading-[1.4] mt-3 tracking-[-0.01em] text-[color:var(--foreground)] text-pretty">
            Software Engineer based in <em class="italic text-accent">Niagara, Ontario</em>, shipping full-stack applications since 2015. I enjoy building dynamic front ends with Vue &amp; Nuxt, and reliable back ends with Node and .NET.
          </p>
        </div>
        <span class="absolute right-5 -bottom-1 font-display italic text-[130px] leading-none pointer-events-none transition-transform duration-700 group-hover:-rotate-12 opacity-[0.08] text-accent">&amp;</span>
      </div>
    </div>

    <!-- Profile Pic Section -->
    <section
      class="@container/section tile-base profilepic-section flex bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:col-span-3 xl:row-span-3 gap-2 aspect-square"
    >
      <picture>
        <source srcset="/images/profilepic.avif" type="image/avif" />
        <source srcset="/images/profilepic.webp" type="image/webp" />
        <img
          src="/images/profilepic.jpg"
          alt="Brendon van Zanten profile picture"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="768"
          height="768"
          class="w-full h-full object-cover"
        />
      </picture>
    </section>


    <!-- Available for Work Strip (mobile only) -->
    <a
      href="mailto:brendon.vanzanten@gmail.com"
      class="available-strip-section md:hidden tile-base tile col-span-full flex items-center justify-between px-7 py-6 cursor-pointer group no-underline"
    >
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="w-1.5 h-1.5 rounded-full bg-[#F4C95D] pulse-dot shrink-0" aria-hidden="true" />
          <span class="font-mono text-[11px] tracking-[0.12em] uppercase opacity-60 text-[color:var(--foreground)]">Available for work</span>
        </div>
        <p class="font-display text-[26px] leading-[1.2] text-[color:var(--foreground)]">Let's build something <em class="italic text-accent">great</em><span class="text-accent">.</span></p>
      </div>
      <div
        class="w-12 h-12 shrink-0 ml-6 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        style="background-color: var(--color-accent);"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
        </svg>
      </div>
    </a>

    <!-- Experience Section -->
    <div class="tile-base tile col-span-full md:col-span-6 md:aspect-square xl:col-span-6 xl:row-span-6 xl:aspect-auto experience-section">
      <div class="p-6 h-full flex flex-col">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase text-white w-fit bg-accent">
          <span class="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          Experience
        </span>
        <h3 class="font-display font-normal text-[32px] mt-5 mb-5 tracking-[-0.02em] leading-[1.1] text-[color:var(--foreground)]">Ten years of shipping.</h3>
        <div class="flex flex-col gap-2 flex-1 min-h-0">
          <div v-for="j in jobs" :key="j.role+j.year"
               class="grid grid-cols-[1fr_auto] gap-3 items-baseline pb-2 border-b border-dashed last:border-0 last:pb-0 transition-transform hover:translate-x-1.5" style="border-color: var(--tw-line);">
            <div>
              <div class="font-medium text-[13.5px] text-[color:var(--foreground)]">{{ j.role }}</div>
              <div class="text-[12px] opacity-60 mt-px text-[color:var(--foreground)]">{{ j.org }}</div>
            </div>
            <div class="text-[11px] opacity-60 text-[color:var(--foreground)]">{{ j.year }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="tile-base tile col-span-full md:col-span-6 md:aspect-square xl:col-span-3 xl:row-span-3 xl:aspect-square services-section">
      <div class="p-6 h-full flex items-center">
        <div>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase text-white bg-accent">
            <span class="w-1.5 h-1.5 rounded-full bg-white inline-block" />
            Services
          </span>
          <p class="font-display text-[20px] leading-[1.4] mt-3.5 tracking-[-0.01em] text-[color:var(--foreground)]">
            Modern sites &amp; full-stack apps, custom <em class="italic text-accent">Webflow &amp; WordPress</em> builds alongside great designers — and ongoing care to keep everything fast.
          </p>
        </div>
      </div>
    </div>

    <!-- LinkedIn Section -->
    <TilesSocialTile kind="linkedin" class="!col-span-full md:!col-span-6 xl:!col-span-3 xl:!row-span-3 xl:!aspect-square" />

    <!-- Stack Tile -->
    <TilesStackTile />

    <!-- Featured Work Row -->
    <section
      v-for="(item, index) in featuredWork"
      :key="item.slug"
      class="@container/section tile-base featured-work-section col-span-full md:col-span-6 md:aspect-square xl:col-span-6 xl:aspect-[2/1]"
      :class="{ 'xl:col-start-1': index === 0 }"
      :style="{ backgroundColor: item.logoBg || 'var(--element-background)' }"
    >
      <NuxtLink
        :to="item._path"
        class="relative flex items-center justify-center w-full h-full p-8 pb-16"
      >
        <img
          v-if="item.logo"
          :src="`/images/work/${item.logo}`"
          :alt="`${item.client || item.title} logo`"
          loading="lazy"
          decoding="async"
          class="max-w-[60%] max-h-[120px] object-contain"
        />
        <div
          class="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          :class="item.lightOnDark ? 'bg-gradient-to-t from-black/25 to-transparent' : 'bg-gradient-to-t from-black/10 to-transparent'"
        />
        <div class="absolute inset-x-6 bottom-6 flex items-end justify-between">
          <div>
            <div class="font-display text-xl" :style="{ color: item.lightOnDark ? '#ffffff' : '#1B2332' }">{{ item.client }}</div>
            <div class="font-mono text-[11px] uppercase tracking-wider" :style="{ color: item.lightOnDark ? 'rgba(255,255,255,0.7)' : 'rgba(27,35,50,0.7)' }">{{ item.tag }}</div>
          </div>
          <div class="font-mono text-[11px]" :style="{ color: item.lightOnDark ? 'rgba(255,255,255,0.7)' : 'rgba(27,35,50,0.7)' }">Client Work</div>
        </div>
      </NuxtLink>
    </section>

    <!-- Social + Resume Row -->
    <TilesSocialTile kind="instagram" class="xl:col-start-1 !col-span-full md:!col-span-6 xl:!col-span-3" />
    <TilesSocialTile kind="email" class="!col-span-full md:!col-span-6 xl:!col-span-3" />
    <TilesResumeTile />
  </div>

</template>

<script setup>
import { ref, onMounted } from "vue";

const jobs = [
  { role: 'Software Engineer',          org: 'District School Board of Niagara', year: '2025 — Now' },
  { role: 'Senior Web Developer',       org: 'District School Board of Niagara', year: '2023 — 2025' },
  { role: 'Freelance Web Developer',    org: 'Brendon van Zanten',               year: '2022 — Now' },
  { role: 'Greenhouse Operations Tech', org: 'van Zanten Floral',                year: '2022 — 2023' },
  { role: 'Full Stack Web Developer',   org: 'Symetric Productions',             year: '2015 — 2022' },
]

useSeoMeta({
  title: "Brendon van Zanten | Home",
  description: "Full Stack Web Developer with 10+ years of experience in Vue.js, Nuxt.js, WordPress, and modern web applications. View my work and get in touch.",
  keywords: "web developer, full stack developer, vue.js, nuxt.js, wordpress, webflow, javascript, php, ontario, niagara",
  ogTitle: "Brendon van Zanten - Full Stack Web Developer",
  ogDescription: "Full Stack Web Developer with 10+ years of experience in Vue.js, Nuxt.js, WordPress, and modern web applications. Based in Niagara, Ontario.",
  ogImage: "https://brendonvanzanten.com/images/og-card.jpg",
  ogImageAlt: "Brendon van Zanten - Full Stack Web Developer",
  ogUrl: "https://brendonvanzanten.com",
  twitterTitle: "Brendon van Zanten - Full Stack Web Developer",
  twitterDescription: "Full Stack Web Developer with 10+ years of experience in Vue.js, Nuxt.js, WordPress, and modern web applications.",
  twitterImage: "https://brendonvanzanten.com/images/og-card.jpg",
  twitterImageAlt: "Brendon van Zanten - Full Stack Web Developer",
  twitterCard: "summary_large_image",
});

const { data: featuredWork } = await useAsyncData("featured-work", () =>
  queryContent("/work").where({ featured: true }).sort({ date: -1 }).find()
);

const gridContainer = ref(null);

onMounted(async () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    gridContainer.value.classList.add('is-ready');
    return;
  }

  // Safety net: reveal grid if GSAP import stalls on slow connections
  const fallback = setTimeout(() => {
    if (gridContainer.value) gridContainer.value.classList.add('is-ready');
  }, 1000);

  const { gsap } = await import("gsap");
  clearTimeout(fallback);

  const children = Array.from(gridContainer.value.children);
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

  // Logo mark springs in after its tile has faded in (~0.45s)
  const logoMark = gridContainer.value.querySelector('.logo-mark');
  if (logoMark) {
    gsap.fromTo(logoMark,
      { scale: 0.65, transformOrigin: '50% 50%' },
      { scale: 1, duration: 1, ease: 'back.out(2.2)', delay: 0.45 }
    );
  }
});
</script>
