// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://at.alicdn.com/t/c/font_4151139_y8pgb3fcw2r.css?spm=a313x.7781069.1998910419.53&file=font_4151139_y8pgb3fcw2r.css",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/reset.css", "~/assets/css/animate.css"],
  modules: ["@nuxtjs/tailwindcss"],
});
