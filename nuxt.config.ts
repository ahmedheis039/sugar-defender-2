// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: ['Oswald', 'Inter:200,300,400,500,600,700,800,900', 'Oswald+Sans'],
    }],
  ],
  plugins: ["~/plugins/preline.client.ts"],
})
