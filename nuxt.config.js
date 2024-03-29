export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3000, // default: 3005
    host: '0.0.0.0', // default: localhost
  },
  ssr: false,
  head: {
    title: 'Starter project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/style/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vuelidate', '@/plugins/toast'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  router: {
    middleware: ['auth'],
  },
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        threads: true,
      },
    ],
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            file: 'ru.js',
          },
          {
            code: 'uz',
            file: 'uz.js',
          },
          {
            code: 'oz',
            file: 'oz.js',
          },
        ],
        strategy: 'prefix_and_default',
        defaultLocale: 'oz',
        detectBrowserLanguage: false,
        lazy: true,
        vueI18nLoader: true,
        langDir: 'languages/',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com/',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Router
  // router: {
  //   middleware: ['auth'],
  // },
  // Nuxt auth
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/login/',
            method: 'post',
            propertyName: 'access',
          },
          logout: { url: '/logout/', method: 'post' },
          user: {
            url: '/api/v1/auth/user/',
            method: 'get',
            propertyName: '',
          },
        },
      },
    },
  },
}
