<!-- components/PageHero.vue -->
<template>
  <header class="mb-14">
    <div v-if="subtitle" class="inline-flex items-center gap-2.5 text-xs tracking-[0.12em] uppercase opacity-60 mb-6 text-[color:var(--foreground)]">
      <span v-if="showDot" class="w-2 h-2 rounded-full bg-[#57B97C] shadow-[0_0_0_4px_rgba(87,185,124,0.18)]" />
      {{ subtitle }}
    </div>
    <h1 class="font-display font-normal text-[clamp(54px,7vw,84px)] leading-[0.95] tracking-[-0.02em] text-[color:var(--foreground)]">
      <template v-if="animated && titleParts">
        <span class="sr-only">{{ title }}</span>
        <span aria-hidden="true">
          <span v-for="(ch, i) in titleParts.line1" :key="'a'+i" class="letter" :style="delay(i)">{{ sp(ch) }}</span>
          <template v-if="titleParts.line2">
            <br />
            <span v-for="(ch, i) in titleParts.line2" :key="'b'+i" class="letter" :style="delay(i + titleParts.line1.length)">{{ sp(ch) }}</span>
          </template>
          <em v-if="titleParts.line3" class="italic text-accent">
            <span v-for="(ch, i) in titleParts.line3" :key="'c'+i" class="letter" :style="delay(i + titleParts.line1.length + (titleParts.line2?.length || 0))">{{ sp(ch) }}</span>
          </em>
        </span>
      </template>
      <template v-else>
        {{ title }}
      </template>
    </h1>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  showDot: { type: Boolean, default: false },
  animated: { type: Boolean, default: false },
  titleParts: { type: Object, default: null }
})

const sp = (ch) => (ch === ' ' ? '\u00A0' : ch)
const delay = (i) => ({ animationDelay: (i * 35 + 100) + 'ms' })
</script>
