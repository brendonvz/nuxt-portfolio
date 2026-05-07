<!-- components/tiles/StackTile.vue -->
<template>
  <div class="tile-base tile stack-section col-span-full md:aspect-[4/1] xl:col-span-6 xl:row-span-3 xl:aspect-auto flex flex-col"
       style="background-color: var(--tile-light-bg); color: var(--tile-light-text);">
    <div class="px-6 pt-5 pb-2.5">
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase"
            style="background-color: rgba(0, 0, 0, 0.1);">
        <span class="w-1.5 h-1.5 rounded-full inline-block" style="background-color: var(--tile-light-text);" />
        Stack
      </span>
      <h4 class="font-display text-[22px] mt-2 mb-0 font-normal tracking-[-0.01em]" style="color: inherit;">Tools I reach for, first.</h4>
    </div>
    <div class="flex-1 overflow-hidden relative marquee-mask">
      <div class="flex gap-3.5 marquee-track w-max py-3.5">
        <span v-for="(c, i) in doubled" :key="i"
              class="inline-flex items-center px-3.5 py-2 rounded-full text-[12.5px] whitespace-nowrap"
              style="background-color: rgba(128, 128, 128, 0.15); color: var(--tile-light-text);">
          {{ c }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
const chips = ['Vue','Nuxt','Tailwind','Node.js','.NET','PHP','Webflow','WordPress','MySQL','MongoDB','GraphQL','Docker','Azure','GitHub','GitLab','Netlify','Cloudflare','Claude','Codex','OpenCode','Copilot','VS Code']
const doubled = [...chips, ...chips]
</script>
