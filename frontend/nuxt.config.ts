export default defineNuxtConfig({
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/style.scss" as *;',
        },
      },
    },
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
      "@vueuse/core",
    ],
  ],
});
