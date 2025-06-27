<script setup>
const props = defineProps(["posts"]);
</script>

<template>
  <div
    v-for="post in props.posts"
    :key="post.slug"
    class="@container/section flex bg-[color:var(--background)] dark:bg-[color:var(--element-background)] flex-col col-span-full md:col-span-4 xl:row-span-3 gap-2 ring-1 ring-[color:var(--border-color)] rounded-4xl overflow-hidden section-item"
  >
    <NuxtLink :to="post._path">
      <img
        :src="`/images/blog/${post.cover}`"
        alt="Blog Post Cover Image"
        class="w-full h-48 object-cover rounded-t-4xl"
      />
    </NuxtLink>
    <div class="p-6 flex flex-1 flex-col gap-4">
      <h2 class="text-xl font-bold mb-2 text-[color:var(--foreground)]">
        {{ post.title }}
      </h2>
      <p class="text-neutral-600 dark:text-neutral-400 mb-4">
        {{ post.description }}
      </p>
      <NuxtLink
        :to="post._path"
        class="w-fit inline-block bg-[color:var(--element-active-background)] hover:opacity-80 text-[color:var(--element-text-active)] py-2 px-6 rounded-full transition-all duration-200 self-start font-semibold"
      >
        Read More
      </NuxtLink>
    </div>
  </div>
</template>
