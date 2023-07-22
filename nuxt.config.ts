// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/animate.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
