<template>
  <div class="py-12 md:py-16">
    <h1 class="text-4xl text-center">Brendon van Zanten</h1>
  </div>

  <div class="w-full pb-12">
    <div class="mb-6 text-sm opacity-80">
      Best fits with your current site are marked <span class="font-semibold">Recommended</span>.
    </div>
    <h2 class="text-2xl mb-4">Light Mode Variations</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <section
        v-for="variant in lightVariants"
        :key="variant.name"
        class="aspect-square rounded-4xl ring-1 ring-[color:var(--border-color)] p-4 flex flex-col"
        :style="{
          background: `linear-gradient(0deg, ${variant.overlayBottom} 0%, ${variant.overlayTop} 100%), ${variant.bg}`,
        }"
      >
        <div class="flex-1 flex items-center justify-center">
          <LogoMark
            class="w-full h-full max-w-[44%] max-h-[44%] object-contain"
            :style="{ color: variant.mark }"
          />
        </div>
        <div class="text-xs leading-tight bg-black/10 rounded-xl p-2">
          <p class="font-semibold">
            {{ variant.name }}
            <span v-if="variant.recommended">• Recommended</span>
          </p>
          <p>BG {{ variant.bg }}</p>
          <p>Mark {{ variant.mark }}</p>
        </div>
      </section>
    </div>

    <h2 class="text-2xl mt-10 mb-4">Dark Mode Variations</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <section
        v-for="variant in darkVariants"
        :key="variant.name"
        class="aspect-square rounded-4xl ring-1 ring-[color:var(--border-color)] p-4 flex flex-col"
        :style="{
          background: `linear-gradient(0deg, ${variant.overlayBottom} 0%, ${variant.overlayTop} 100%), ${variant.bg}`,
        }"
      >
        <div class="flex-1 flex items-center justify-center">
          <LogoMark
            class="w-full h-full max-w-[44%] max-h-[44%] object-contain"
            :style="{ color: variant.mark }"
          />
        </div>
        <div class="text-xs leading-tight bg-white/10 rounded-xl p-2 text-white">
          <p class="font-semibold">
            {{ variant.name }}
            <span v-if="variant.recommended">• Recommended</span>
          </p>
          <p>BG {{ variant.bg }}</p>
          <p>Mark {{ variant.mark }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  robots: 'noindex, nofollow, noarchive, nosnippet',
  googlebot: 'noindex, nofollow, noarchive, nosnippet',
});

const lightPalette = [
  { name: "Navy", color: "#0f4168", recommended: true },
  { name: "Ocean", color: "#11496f", recommended: true },
  { name: "Cobalt", color: "#1b5678" },
  { name: "Slate", color: "#253f53" },
  { name: "Steel", color: "#365064" },
  { name: "Mist", color: "#20485f", recommended: true },
  { name: "Graphite", color: "#1f3347" },
  { name: "Indigo", color: "#2f2c52" },
  { name: "Teal", color: "#2a4b40" },
  { name: "Forest", color: "#224337" },
  { name: "Copper", color: "#5a3b22" },
  { name: "Terracotta", color: "#664428" },
  { name: "Ruby", color: "#8f1d1d" },
  { name: "Plum", color: "#4f2a5f" },
  { name: "Sapphire", color: "#1e3a8a" },
  { name: "Emerald", color: "#166534" },
];

const darkPalette = [
  { name: "Navy", color: "#0b4467", recommended: true },
  { name: "Deep Navy", color: "#083f61", recommended: true },
  { name: "Midnight", color: "#0a2f4a" },
  { name: "Slate Night", color: "#22384d", recommended: true },
  { name: "Blue Slate", color: "#2b4358" },
  { name: "Teal Night", color: "#134959" },
  { name: "Forest Night", color: "#1f3d32" },
  { name: "Graphite", color: "#2a3442" },
  { name: "Charcoal Blue", color: "#1c3144" },
  { name: "Aubergine", color: "#3a2749" },
  { name: "Burgundy", color: "#4a1f2a" },
  { name: "Brown Night", color: "#3f2d22" },
  { name: "Royal", color: "#1d2f6f" },
  { name: "Petrol", color: "#0f3d4f" },
  { name: "Deep Green", color: "#1d3f2a" },
  { name: "Ink", color: "#182534" },
];

const lightVariants = lightPalette.map((item) => ({
  name: `${item.name} Light`,
  bg: "#ffffff",
  mark: item.color,
  overlayBottom: "rgba(0,0,0,0.02)",
  overlayTop: "rgba(0,0,0,0.00)",
  recommended: item.recommended,
}));

const darkVariants = darkPalette.map((item) => ({
  name: `${item.name} Dark`,
  bg: item.color,
  mark: "#ffffff",
  overlayBottom: "rgba(0,0,0,0.20)",
  overlayTop: "rgba(0,0,0,0.04)",
  recommended: item.recommended,
}));
</script>
