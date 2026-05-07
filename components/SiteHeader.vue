<template>
  <div class="flex justify-center md:grid md:grid-cols-[auto_1fr_auto] items-center mb-14">
    <!-- Logo + Name on left (desktop only) -->
    <NuxtLink
      v-if="!isMobile"
      to="/"
      class="inline-flex items-center gap-3 text-[15px] tracking-wide no-underline group text-[color:var(--foreground)]"
    >
      <LogoMark
        class="w-7 h-7 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 text-[color:var(--foreground)]"
      />
      <span class="hidden sm:inline font-medium font-sans">brendon van zanten</span>
    </NuxtLink>

    <!-- Center nav -->
    <nav class="flex w-full md:w-auto justify-center" aria-label="Main navigation">
      <div
        ref="navContainer"
        class="flex space-x-2 bg-[color:var(--element-background)] rounded-full p-2 shadow-lg relative"
      >
        <!-- Sliding bubble background -->
        <div
          v-if="activeIndex !== -1"
          class="nav-active-pill absolute top-2 bottom-2 bg-[color:var(--color-alt-bg)] rounded-full transition-all duration-300 ease-out"
          :class="`nav-active-pill-${activeIndex}`"
          :style="{
            '--bubble-left': `${bubblePosition}px`,
            '--bubble-width': `${bubbleWidth}px`,
          }"
        ></div>

        <NuxtLink
          v-for="(item, index) in navigation"
          :key="item.name"
          :to="item.href"
          class="nav-link px-4 py-2 rounded-full transition-all duration-300 font-medium relative z-10 font-sans text-[14px]"
          :class="[
            `nav-link-${index}`,
            item.current ? 'nav-link-active text-[color:var(--color-alt-text)]' : 'text-[color:var(--foreground)]',
          ]"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </nav>

    <!-- Available for work button on right (desktop only) -->
    <a
      v-if="!isMobile"
      href="mailto:brendon.vanzanten@gmail.com"
      class="available-work-btn inline-flex items-center gap-2 px-4 py-2 bg-[color:var(--color-alt-bg)] text-[color:var(--color-alt-text)] rounded-full font-medium no-underline transition-all duration-300 font-sans text-[14px]"
    >
      <span class="w-2 h-2 rounded-full bg-[#F4C95D] pulse-dot" aria-hidden="true" />
      <span>Available for work</span>
    </a>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";

const isMobile = ref(false);
const checkMobile = () => { isMobile.value = window.innerWidth < 768; };
import { useRoute } from "vue-router";

const route = useRoute();

const navigation = computed(() => [
  { name: "Home", href: "/", current: route.name === "index" },
  { name: "Work", href: "/work", current: route.name?.includes("work") },
  { name: "Projects", href: "/projects", current: route.name === "projects" },
  { name: "Uses", href: "/uses", current: route.name === "uses" },
]);

const navContainer = ref(null);
const activeIndex = computed(() =>
  navigation.value.findIndex((item) => item.current)
);
const bubblePosition = ref(0);
const bubbleWidth = ref(0);

const updateBubblePositionFromElement = (activeElement) => {
  if (!activeElement) return;

  bubblePosition.value = activeElement.offsetLeft;
  bubbleWidth.value = activeElement.offsetWidth;
};

const updateBubblePosition = () => {
  if (activeIndex.value === -1) return;
  const activeElement = navContainer.value?.querySelector(".nav-link-active");
  updateBubblePositionFromElement(activeElement);
};

const scheduleBubblePositionUpdate = () => {
  requestAnimationFrame(updateBubblePosition);
};

onMounted(async () => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
  await nextTick();
  if (activeIndex.value !== -1) {
    scheduleBubblePositionUpdate();
  }
  window.addEventListener("resize", updateBubblePosition);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
  window.removeEventListener("resize", updateBubblePosition);
});

watch(() => route.fullPath, async () => {
  await nextTick();
  if (activeIndex.value !== -1) {
    scheduleBubblePositionUpdate();
  }
});
</script>

<style scoped>
.available-work-btn:hover {
  background-color: var(--color-hover);
}

.nav-active-pill {
  left: var(--bubble-left);
  width: var(--bubble-width);
}

.nav-link-0 {
  anchor-name: --nav-item-0;
}

.nav-link-1 {
  anchor-name: --nav-item-1;
}

.nav-link-2 {
  anchor-name: --nav-item-2;
}

.nav-link-3 {
  anchor-name: --nav-item-3;
}

@supports (left: anchor(--nav-item-0 left)) and
  (width: anchor-size(--nav-item-0 width)) {
  .nav-active-pill {
    bottom: auto;
    height: anchor-size(height);
    left: anchor(left);
    top: anchor(top);
    width: anchor-size(width);
  }

  .nav-active-pill-0 {
    position-anchor: --nav-item-0;
  }

  .nav-active-pill-1 {
    position-anchor: --nav-item-1;
  }

  .nav-active-pill-2 {
    position-anchor: --nav-item-2;
  }

  .nav-active-pill-3 {
    position-anchor: --nav-item-3;
  }
}
</style>
