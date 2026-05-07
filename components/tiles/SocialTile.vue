<!-- components/tiles/SocialTile.vue -->
<template>
  <a :href="url" target="_blank" rel="noopener noreferrer"
     :aria-label="ariaLabel"
     :class="['tile-base tile col-span-6 md:col-span-3 xl:col-span-3 md:row-span-2 md:aspect-square xl:aspect-square xl:row-span-2 cursor-pointer flex items-center justify-center group', sectionClass]"
     :style="bgStyle">
    <!-- LinkedIn -->
    <svg v-if="kind === 'linkedin'" class="w-14 h-14 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H10V9z"/>
    </svg>
    <!-- Instagram -->
    <svg v-else-if="kind === 'instagram'" class="w-14 h-14 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
    </svg>
    <!-- Email -->
    <svg v-else class="w-14 h-14 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <rect x="3" y="5" width="18" height="14" rx="3"/>
      <path d="M3 7l9 6 9-6"/>
    </svg>
    <span class="absolute bottom-4 left-4 text-[11px] tracking-wider uppercase opacity-0 translate-y-1.5 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      {{ label }}
    </span>
  </a>
</template>
<script setup>
const props = defineProps({ kind: String })
const bgStyle = computed(() => ({
  linkedin:  { backgroundColor: '#0A66C2', color: '#ffffff' },
  instagram: { background: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)', color: '#ffffff' },
  email:     { backgroundColor: 'var(--color-accent)', color: '#ffffff' },
}[props.kind]))
const sectionClass = computed(() => ({
  linkedin:  'linkedin-section',
  instagram: 'instagram-section',
  email:     'contact-section',
}[props.kind]))
const label = computed(() => ({
  linkedin:  '→ /in/bvanzanten',
  instagram: '→ @brendonvz',
  email:     '→ say hello',
}[props.kind]))
const ariaLabel = computed(() => ({
  linkedin:  'LinkedIn — /in/bvanzanten',
  instagram: 'Instagram — @brendonvz',
  email:     'Email — say hello',
}[props.kind]))
const url = computed(() => ({
  linkedin:  'https://ca.linkedin.com/in/brendon-van-zanten-13121559',
  instagram: 'https://instagram.com/brendonvz',
  email:     'mailto:brendon.vanzanten@gmail.com',
}[props.kind]))
</script>
