/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts}',      // Nuxt pages
    './components/**/*.{vue,js,ts}', // Components
    './layouts/**/*.{vue,js,ts}',    // Layouts
    './app.vue',                     // Root app
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
