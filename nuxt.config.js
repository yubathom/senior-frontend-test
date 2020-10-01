export default {
  mode: "universal",
  components: true,
  /*
   * Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],

  css: ["~/assets/tailwind.scss"],
  modules: ["nuxt-purgecss"],
  purgeCSS: {
    mode: "postcss",
  },
}
