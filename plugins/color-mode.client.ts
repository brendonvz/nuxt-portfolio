export default defineNuxtPlugin(() => {
  const colorMode = useColorMode();

  // Ensure color mode is properly initialized on page load
  if (process.client) {
    // Force initialization from localStorage
    const storedMode = localStorage.getItem('nuxt-color-mode');
    if (storedMode && storedMode !== colorMode.value) {
      colorMode.value = storedMode;
    }

    console.log('Color mode plugin initialized:', colorMode.value);
  }
});