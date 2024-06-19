// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/theonegreatwork/',
    head: {
        htmlAttrs: { dir: 'rtl', lang: 'he' },
    },
  },
  // devtools: { enabled: true },
  ssr: false,
  target: 'static',
  router: {
    base: '/theonegreatwork/',
 },
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Assistant: [500, 700, 800],
    }
  }
})
