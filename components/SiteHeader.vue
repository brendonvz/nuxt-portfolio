<template>
  <nav class="flex justify-center mt-4">
    <div
      class="flex space-x-2 bg-[color:var(--element-background)] rounded-full p-2 shadow-lg relative"
    >
      <!-- Sliding bubble background -->
      <div
        v-if="activeIndex !== -1"
        class="absolute top-2 bottom-2 bg-[color:var(--element-active-background)] rounded-full transition-all duration-300 ease-out"
        :style="{
          left: `${bubblePosition}px`,
          width: `${bubbleWidth}px`,
        }"
      ></div>

      <NuxtLink
        v-for="(item, index) in navigation"
        :key="item.name"
        :ref="(el) => (navItems[index] = el)"
        :to="item.href"
        class="px-4 py-2 rounded-full transition-all duration-300 font-medium text-[color:var(--element-text)] relative z-10"
        :class="[item.current ? 'text-[color:var(--element-text-active)]' : '']"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref, onMounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const navigation = computed(() => [
  { name: "Home", href: "/", current: route.name === "index" },
  { name: "Blog", href: "/blog", current: route.name?.includes("blog") },
  { name: "Projects", href: "/projects", current: route.name === "projects" },
  { name: "Uses", href: "/uses", current: route.name === "uses" },
]);

const navItems = ref([]);
const activeIndex = computed(() =>
  navigation.value.findIndex((item) => item.current)
);
const bubblePosition = ref(0);
const bubbleWidth = ref(0);

const updateBubblePosition = (index) => {
  if (index === -1) return;
  const activeItem = navItems.value[index];
  if (!activeItem || !activeItem.$el) return;

  bubblePosition.value = activeItem.$el.offsetLeft;
  bubbleWidth.value = activeItem.$el.offsetWidth;
};

onMounted(async () => {
  await nextTick();
  if (activeIndex.value !== -1) {
    updateBubblePosition(activeIndex.value);
  }
});

watch(activeIndex, async (newIndex) => {
  await nextTick();
  if (newIndex !== -1) {
    updateBubblePosition(newIndex);
  }
});
</script>
