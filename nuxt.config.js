module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "River Discharge to the Gulf of Mexico",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "River Discharge Datasets for the Gulf of Mexico"
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/ssh/favicon.ico'
      },
      {
        /* Google Font */
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      },
      {
        /* Adobe Proxima Nova */
        rel: "stylesheet",
        href: "https://use.typekit.net/pel5bpx.css"
      },
      {
        /* Font Awesome */
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
        integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
        crossorigin: "anonymous"
      }
    ],
    script: [{
        /* jQuery for ajax */
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"
      },
      {
        /* moment timezone */
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.23/moment-timezone-with-data.min.js"
      },
      {
        /* d3 */
        src: "https://d3js.org/d3.v5.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#00a2cc'
  },

  /*
   ** Global CSS
   */
  css: [{
      src: "~assets/css/webflow.css"
    },
    {
      src: '~assets/css/main.css'
    }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~plugins/ga.js',
    ssr: false
  }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/sentry",
    // cache with options
    [
      "@nuxtjs/component-cache",
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ],
    "bootstrap-vue/nuxt",
  ],
  /*
   ** Bootstrap-vue configuration
   */
  bootstrapVue: {
    bootstrapCSS: true, // or false for customized CSS
    bootstrapVueCSS: true
  },

  /*
   ** Axios module configuration
   */
  axios: {},
  router: {
    base: '/river_discharge/'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}