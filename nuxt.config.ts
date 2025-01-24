// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  // Configuración del servidor de desarrollo
  devServer: {
    host: '127.0.0.1', // Host local
    port: 3000, // Puerto local
  },
});

