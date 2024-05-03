// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  routeRules: {
    // revalidate after 60 seconds
    "/spa": { ssr: false },
    "/ssr": { ssr: true },
    "/ssg": { prerender: true },
    "/isr_ttl": { isr: 60 },
  },
})
