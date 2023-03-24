export default defineNuxtConfig({
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/style.scss" as *;',
        },
      },
    },
  },
});
