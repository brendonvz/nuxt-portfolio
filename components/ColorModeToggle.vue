<template>
  <div
    class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    :class="{ 'left-auto right-6 transform-none': isLargeScreen }"
  >
    <button
      class="flex items-center bg-[color:var(--element-background)] rounded-full p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative"
      @click="toggleColorMode"
    >
      <!-- Sliding bubble background -->
      <div
        class="absolute top-2 bottom-2 bg-[color:var(--element-active-background)] rounded-full transition-all duration-500 ease-out aspect-square"
        :style="{
          left: `${bubblePosition}px`,
          width: `${bubbleWidth}px`,
        }"
      ></div>

      <span
        ref="sunRef"
        class="p-2 rounded-full transition-all duration-300 relative z-10"
      >
        <Icon
          name="ph:sun-bold"
          class="w-5 h-5 text-[color:var(--foreground)]"
        />
      </span>
      <span
        ref="moonRef"
        class="p-2 rounded-full transition-all duration-300 relative z-10"
      >
        <Icon
          name="ph:moon-bold"
          class="w-5 h-5 text-[color:var(--foreground)]"
        />
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const sunRef = ref(null);
const moonRef = ref(null);
const bubblePosition = ref(0);
const bubbleWidth = ref(0);
const isLargeScreen = ref(false);

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? "light" : "dark";
};

const updateBubble = () => {
  if (isDark.value) {
    if (moonRef.value) {
      const buttonWidth = moonRef.value.offsetWidth;
      const buttonHeight = moonRef.value.offsetHeight;
      bubblePosition.value =
        moonRef.value.offsetLeft + (buttonWidth - buttonHeight) / 2;
      bubbleWidth.value = buttonHeight; // Use height to make it circular
    }
  } else {
    if (sunRef.value) {
      const buttonWidth = sunRef.value.offsetWidth;
      const buttonHeight = sunRef.value.offsetHeight;
      bubblePosition.value =
        sunRef.value.offsetLeft + (buttonWidth - buttonHeight) / 2;
      bubbleWidth.value = buttonHeight; // Use height to make it circular
    }
  }
};

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1152;
};

onMounted(async () => {
  await nextTick();
  updateBubble();

  if (process.client) {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }
});

watch(isDark, async () => {
  await nextTick();
  updateBubble();
});
</script>
