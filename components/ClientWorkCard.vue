<script setup>
const props = defineProps(["work"]);
</script>

<template>
  <NuxtLink
    v-for="item in props.work"
    :key="item.slug"
    :to="item._path"
    class="@container/section tile-base tile flex bg-[color:var(--element-background)] flex-col col-span-full md:col-span-4 xl:row-span-3 gap-2 section-item"
  >
    <div
      v-if="item.logo"
      class="flex items-center justify-center p-8 md:p-10 min-h-56"
      :style="{ backgroundColor: item.logoBg || 'var(--element-background)' }"
    >
      <img
        :src="`/images/work/${item.logo}`"
        :alt="`${item.client || item.title} logo`"
        loading="lazy"
        decoding="async"
        class="max-w-[80%] max-h-28 object-contain"
      />
    </div>
    <div class="p-6 flex flex-1 flex-col gap-4">
      <h2 class="font-display text-2xl mb-2 text-[color:var(--foreground)]">
        {{ item.title }}
      </h2>
      <span
        class="w-fit inline-block bg-[color:var(--element-active-background)] hover:opacity-80 text-[color:var(--element-text-active)] py-2 px-6 rounded-full transition-all duration-200 self-start font-semibold font-sans text-[14px]"
      >
        View Project
      </span>
    </div>
  </NuxtLink>
</template>
