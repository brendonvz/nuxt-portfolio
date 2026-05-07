<!-- components/tiles/ResumeTile.vue -->
<template>
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    class="tile-base tile resume-section col-span-full md:aspect-[4/1] xl:col-span-6 xl:row-span-2 xl:aspect-auto flex items-center justify-between px-7 py-6 cursor-pointer group"
  >
    <div class="flex-1 min-w-0">
      <div class="font-mono text-[11px] tracking-[0.1em] uppercase text-[color:var(--foreground)] opacity-60">Resume · PDF · 2 pages</div>
      <div class="font-display text-[28px] mt-2 leading-[1.15] tracking-[-0.01em] text-[color:var(--foreground)]">The long version, <em class="italic text-accent">printable</em><span class="text-accent">.</span></div>
      <div class="font-mono text-[11.5px] opacity-60 mt-5 tracking-wide text-[color:var(--foreground)]">Last updated · May 2026</div>
    </div>
    <div class="w-14 h-14 shrink-0 ml-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style="background-color: var(--color-alt-bg); color: var(--color-alt-text);">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
    </div>
  </a>
</template>
