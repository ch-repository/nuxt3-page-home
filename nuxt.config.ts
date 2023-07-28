// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '姚超航 | 个人主页',
      meta: [
        { name: 'author', content: '姚超航' },
        { name: 'description', content: '欢迎来到我的个人主页，一起探索前端的奇妙世界！' },
        { name: 'keywords', content: '姚超航,前端开发,个人主页' }
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/reset.css", "~/assets/css/animate.css", "~/assets/iconfont/iconfont.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
});
