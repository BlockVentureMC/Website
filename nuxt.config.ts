// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/websocket.ts"],
  nitro: {
    experimental: {
      websocket: true,
    }
  },
  ssr: false,
  runtimeConfig: {
    public: {
      wsUrl: process.env.WS_URL,
    }
  }
});
