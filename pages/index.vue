<template>
  <div class="py-12 md:py-16">
    <h1 class="text-4xl text-center font-bold">Brendon van Zanten</h1>
  </div>

  <div
    ref="gridContainer"
    class="@container w-full grid grid-cols-12 md:auto-rows-fr 2xl:auto-rows-fr gap-4 grid-container"
  >
    <!-- About Section -->
    <section
      class="@container/section about-section flex bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-3 gap-2 p-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item"
    >
      <div class="p-6 flex flex-1 flex-col gap-4">
        <div class="mb-6">
          <span
            class="bg-[color:var(--color-red)] text-white text-sm font-medium px-4 py-1 rounded-full"
            >About</span
          >
        </div>
        <p class="text-pretty max-w-prose">
          I am a Web Developer based in Niagara, Ontario who has been
          creating full-stack applications since 2015.
        </p>
        <p class="text-pretty max-w-prose">
          I enjoy building dynamic, user-friendly interfaces with Vue and Nuxt. On the back end, I develop reliable and scalable systems using technologies like Node.js, PHP, and .NET.
        </p>
      </div>
    </section>

    <!-- Profile Pic Section -->
    <section
      class="@container/section profilepic-section flex bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:col-span-3 xl:row-span-3 gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item 6xl:aspect-square"
    >
      <img
        src="/images/profilepic.png"
        alt="Brendon van Zanten profile picture"
        class="w-full h-full object-cover rounded-4xl"
      />
    </section>

    <!-- Services Section -->
    <section
      class="@container/section services-section flex bg-[color:var(--element-background)] flex-col max-xl:order-last col-span-full md:col-span-6 xl:col-span-3 xl:row-span-6 gap-2 p-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item"
    >
      <div class="p-6 flex flex-1 flex-col gap-4">
        <div class="mb-6">
          <span
            class="bg-[color:var(--color-red)] text-white text-sm font-medium px-4 py-1 rounded-full"
            >Services</span
          >
        </div>
        <p class="text-pretty max-w-prose">
          I specialize in creating modern, responsive websites and web applications that deliver great user experiences.</p>
				<p>My expertise spans full-stack web development, custom WordPress solutions, Webflow design and development, as well as ongoing website maintenance and hosting.
        </p>
        <div class="flex justify-center mt-6">
          <img
            src="/images/laptop-coding.png"
            alt="Laptop with code"
            class="w-40 object-contain transition-transform duration-300 hover:scale-105 hover:rotate-2 filter grayscale-50 brightness-97"
            style="
              transform-origin: center;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
            "
          />
        </div>
      </div>
    </section>

    <!-- LinkedIn Section -->
    <section
      class="@container/section linkedin-section flex bg-[#0077b5] flex-col col-span-full md:col-span-6 xl:col-span-3 xl:row-span-3 gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item min-h-48 md:aspect-auto xl:aspect-auto 6xl:aspect-square"
    >
      <a
        href="https://ca.linkedin.com/in/brendon-van-zanten-13121559"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-1 items-center justify-center"
        aria-label="LinkedIn"
      >
        <Icon
          name="entypo-social:linkedin-with-circle"
          size="4rem"
          class="text-white"
        />
      </a>
    </section>

    <!-- Experience Section -->
    <section
      class="@container/section experience-section flex bg-[color:var(--element-background)] flex-col col-span-full md:col-span-6 xl:row-span-6 gap-2 p-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item"
    >
      <div class="p-6 flex flex-1 flex-col">
        <div class="mb-6">
          <span
            class="bg-[color:var(--color-red)] text-white text-sm font-medium px-4 py-1 rounded-full"
            >Experience</span
          >
        </div>

        <div class="space-y-6 lg:space-y-8 mb-6">
          <div class="flex flex-col gap-3 lg:gap-2">
            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-1 lg:gap-0">
              <div>
                <h4 class="text-lg font-semibold">District School Board of Niagara</h4>
              </div>
            </div>
            <div class="mt-2 pl-4 border-l border-[color:var(--experience-border-color)] space-y-3">
              <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-1 lg:gap-0">
                <div>
                  <p class="text-[color:var(--foreground)] opacity-80">Software Engineer</p>
                </div>
                <span class="text-[color:var(--foreground)] opacity-80 text-sm lg:text-base"
                  >2025 - Present</span
                >
              </div>
              <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-1 lg:gap-0">
                <div>
                  <p class="text-[color:var(--foreground)] opacity-80">Senior Web Developer</p>
                </div>
                <span class="text-[color:var(--foreground)] opacity-80 text-sm lg:text-base"
                  >2023 - 2025</span
                >
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-1 lg:gap-0">
            <div>
              <h4 class="text-lg font-semibold">Freelance Web Developer</h4>
              <p class="text-[color:var(--foreground)] opacity-80">
                Brendon van Zanten
              </p>
            </div>
            <span class="text-[color:var(--foreground)] opacity-80 text-sm lg:text-base"
              >2022 - Present</span
            >
          </div>

					<div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-1 lg:gap-0">
            <div>
              <h4 class="text-lg font-semibold">
                Greenhouse Operations Technician
              </h4>
              <p class="text-[color:var(--foreground)] opacity-80">
                van Zanten Floral
              </p>
            </div>
            <span class="text-[color:var(--foreground)] opacity-80 text-sm lg:text-base"
              >2022 - 2023</span
            >
          </div>

          <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-1 lg:gap-0">
            <div>
              <h4 class="text-lg font-semibold">Full Stack Web Developer</h4>
              <p class="text-[color:var(--foreground)] opacity-80">
                Symetric Productions
              </p>
            </div>
            <span class="text-[color:var(--foreground)] opacity-80 text-sm lg:text-base"
              >2015 - 2022</span
            >
          </div>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center w-fit bg-[color:var(--element-active-background)] hover:opacity-80 text-[color:var(--element-text-active)] py-2 px-6 rounded-full transition-all duration-200 self-start font-semibold"
        >
          View resume
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

    <!-- Instagram Section -->
    <section
      class="@container/section instagram-section flex bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] flex-col col-span-full md:col-span-6 xl:col-span-3 xl:row-span-3 gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item min-h-48 md:aspect-auto xl:aspect-auto 6xl:aspect-square"
    >
      <a
        href="https://www.instagram.com/brendonvz/"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-1 items-center justify-center"
        aria-label="Instagram"
      >
        <Icon name="entypo-social:instagram" size="4rem" class="text-white" />
      </a>
    </section>

    <!-- Contact Section -->
    <section
      class="@container/section contact-section flex bg-[#2563eb] flex-col col-span-full md:col-span-6 xl:col-span-3 xl:row-span-3 gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item min-h-48 md:aspect-auto xl:aspect-auto 6xl:aspect-square"
    >
      <a
        href="mailto:brendon.vanzanten@gmail.com?subject=Hello%20from%20Brendon%20van%20Zanten%20Website"
        class="flex flex-1 items-center justify-center"
        aria-label="Email"
      >
        <Icon name="mdi:email" size="4rem" class="text-white" />
      </a>
    </section>

    <!-- Featured Work Sections -->
    <section
      v-for="item in featuredWork"
      :key="item.slug"
      class="@container/section featured-work-section flex flex-col col-span-full md:col-span-6 xl:col-span-3 xl:row-span-3 gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl section-item aspect-square md:aspect-auto xl:aspect-auto 6xl:aspect-square max-md:order-last"
      :style="{ backgroundColor: item.logoBg || 'var(--element-background)' }"
    >
      <NuxtLink
        :to="item._path"
        class="flex flex-1 items-center justify-center p-6"
      >
        <img
          v-if="item.logo"
          :src="`/images/work/${item.logo}`"
          :alt="`${item.client || item.title} logo`"
          class="max-w-[60%] max-h-[60%] object-contain"
        />
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

// SEO
useSeoMeta({
  title: "Brendon van Zanten | Home",
  description:
    "Full Stack Web Developer with 8+ years of experience in Vue.js, Nuxt.js, WordPress, and modern web applications. View my work and get in touch.",
  keywords:
    "web developer, full stack developer, vue.js, nuxt.js, wordpress, webflow, javascript, php, ontario, niagara",
  author: "Brendon van Zanten",
  twitterCreator: "@brendon_vz",
  // Open Graph tags for Facebook, LinkedIn, etc.
  ogTitle: "Brendon van Zanten - Full Stack Web Developer",
  ogDescription: "Full Stack Web Developer with 8+ years of experience in Vue.js, Nuxt.js, WordPress, and modern web applications. Based in Niagara, Ontario.",
  ogImage: "/images/profilepic.png",
  ogImageAlt: "Brendon van Zanten - Full Stack Web Developer",
  ogType: "website",
  ogUrl: "https://brendonvanzanten.com",
  ogSiteName: "Brendon van Zanten",
  // Twitter Card tags
  twitterCard: "summary_large_image",
  twitterSite: "@brendon_vz",
  twitterCreator: "@brendon_vz",
  twitterTitle: "Brendon van Zanten - Full Stack Web Developer",
  twitterDescription: "Full Stack Web Developer with 8+ years of experience in Vue.js, Nuxt.js, WordPress, and modern web applications.",
  twitterImage: "/images/profilepic.png",
  twitterImageAlt: "Brendon van Zanten - Full Stack Web Developer",
});

const { data: workItems } = await useAsyncData("latest-work", () =>
  queryContent("/work").sort({ date: -1 }).limit(3).find()
);

const { data: featuredWork } = await useAsyncData("featured-work", () =>
  queryContent("/work").where({ featured: true }).sort({ date: -1 }).find()
);

const links = [
  {
    name: "Twitter",
    href: "https://x.com/brendon_vz",
    icon: "entypo-social:twitter",
  },
  {
    name: "LinkedIn",
    href: "https://ca.linkedin.com/in/brendon-van-zanten-13121559",
    icon: "entypo-social:linkedin-with-circle",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/brendonvz/",
    icon: "entypo-social:instagram",
  },
];

// Add color mode composable
const colorMode = useColorMode();

const gridContainer = ref(null);

onMounted(() => {
  // Make the container visible immediately
  gsap.set(gridContainer.value, { visibility: "visible" });

  // Custom animation order while keeping HTML layout intact
  const animationOrder = [
    ".about-section",
    ".profilepic-section",
    ".services-section",
    ".linkedin-section",
    ".experience-section",
    ".instagram-section",
    ".contact-section",
    ".featured-work-section",
  ];

  animationOrder.forEach((selector, index) => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.2)",
        delay: 0.05 + index * 0.08,
      }
    );
  });
});
</script>
