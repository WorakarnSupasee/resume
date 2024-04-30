// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', "@nuxt/image"],
  vite: {
    plugins: [svgLoader()]
  },
  image: {
    provider: "ipx"
}
})