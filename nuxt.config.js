require('dotenv').config()
export default {
  // target: 'server',
  head: {
    title: 'LinkTr33',
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
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
  ],
  modules: ['@nuxtjs/axios', '@nuxt/http', '@nuxtjs/auth-next'],
  serverMiddleware: {
    '/api': '~/server',
  },
  // serverMiddleware: ['~/server/index.js'],
  axios: {
    baseURL: process.env.BASE_URL_BACK, // here set your API url
  },
  auth: {
    strategies: {
      local: {
        //      scheme: "refresh",
        token: {
          property: 'token', // property name that the Back-end sends for you as a access token for saving on localStorage and cookie of user browser
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/auth', method: 'post' },
          logout: false,
          user: { url: '/api/users', method: 'get' },
        },
        redirect: {
          login: '/login',
          logout: '/login?logout=true',
          callback: false,
          home: '/admin',
        },
      },
    },
  },
  build: {
    extend(config, ctx) {},
  }
}
