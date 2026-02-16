<template>
  <footer class="bg-[color:var(--element-background)] border-t border-[color:var(--border-color)]">
    <section
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-[color:var(--foreground)] flex flex-row opacity-90"
    >
      <p class="flex-1">&copy; Brendon van Zanten. All Rights Reserved</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[color:var(--foreground)]"
        >
          <Icon :name="link.icon" size="1.5rem" />
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup>
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
</script>
