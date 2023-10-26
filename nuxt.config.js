export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "The Civilians Band",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "The Civilians Band - Utah Cover Band",
        name: "The Civilians Band - Utah Cover Band",
        content:
          "The Civilians Band is a Utah cover band playing hits from every decade of rock 'n roll. Weddings, corporate events, parties, and other events."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/civ-logo.png" }],
    // Script tags
    script: [
      // Fathom Analytics
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "HZDZBXMX",
        defer: true
      }
    ],
    // Router config
    router: {
      middleware: ["fathom"]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
