// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '姚超航 | 个人主页',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'author', content: '姚超航' },
        { name: 'description', content: '欢迎来到我的个人主页，一起探索前端的奇妙世界！' },
        { name: 'keywords', content: '姚超航,前端开发,个人主页' }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://at.alicdn.com/t/c/font_4128188_53mq5rtpueu.css?spm=a313x.7781069.1998910419.53&file=font_4128188_53mq5rtpueu.css",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/reset.css", "~/assets/css/animate.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  nitro: {
    devProxy: {
      "/api": {
        target: "https://email.chaohangweb.cn",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
});
