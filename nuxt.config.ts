// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    viewer: true,
    config: {
      plugins: [require("@tailwindcss/typography")],
    },
  },
});
