<template>
  <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;background-color:var(--background,#EDEEF2);font-family:system-ui,sans-serif;">
    <p style="font-size:clamp(100px,15vw,180px);line-height:1;color:#E96A4E;opacity:0.15;user-select:none;pointer-events:none;letter-spacing:-0.04em;">
      {{ error?.statusCode }}
    </p>
    <h1 style="font-size:clamp(24px,3.5vw,48px);line-height:1.1;font-weight:400;color:var(--foreground,#1a1a1a);margin-top:-2rem;margin-bottom:0.75rem;">
      {{ error?.statusCode === 404 ? 'Page not found.' : 'Something went wrong.' }}
    </h1>
    <p style="font-size:15px;color:var(--foreground,#1a1a1a);opacity:0.6;max-width:24rem;margin-bottom:1.5rem;">
      {{ error?.statusCode === 404 ? "That page doesn't exist or was moved." : 'An unexpected error occurred.' }}
    </p>
    <a href="/" style="display:inline-flex;align-items:center;padding:0.625rem 1.25rem;border-radius:9999px;background-color:#E96A4E;color:#fff;font-size:14px;font-weight:500;text-decoration:none;">
      Go home
    </a>
  </div>
</template>

<script setup>
const props = defineProps({ error: Object })
</script>
