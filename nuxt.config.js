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
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      },
      {
        hid: "description",
        name: "GCOOS River Discharge",
        content: "GCOOS Products: River Discharge Datasets for the Gulf of Mexico"
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
        /* Font Awesome */
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css",
        integrity: "sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN",
        crossorigin: "anonymous"
      },
      {
        /* Leaflet */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet@1.5.1/dist/leaflet.css",
        integrity: "sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",
        crossorigin: ""
      }, {
        /* Leaflet Fullscreen Button */
        rel: "stylesheet",
        href: "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css"
      }, 
      {
        /* Leaflet Gesture Control */
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css"
      }, 
      {
        /* jQuery UI */
        rel: "stylesheet",
        href: "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
      }
    ],
    script: [{
        /* Leaflet */
        src: "https://unpkg.com/leaflet@1.5.1/dist/leaflet.js",
        integrity: "sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==",
        crossorigin: ""
      },
      {
        /* ESRI Leaflet */
        src: "https://unpkg.com/esri-leaflet@2.3.2/dist/esri-leaflet.js",
        integrity: "sha512-6LVib9wGnqVKIClCduEwsCub7iauLXpwrd5njR2J507m3A2a4HXJDLMiSZzjcksag3UluIfuW1KzuWVI5n/cuQ==",
        crossorigin: ""
      },
      {
        /* Leaflet Fullscreen */
        src: "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js"
      },
      {
        /* Leaflet Gesture Control */
        src: "https://unpkg.com/leaflet-gesture-handling@1.1.8/dist/leaflet-gesture-handling.min.js"
      },
      {
        /* Google Maps API */
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB1Qb_BhHlGWmRWf4PQrgTcG2xZai5ENP8&libraries"
      },
      {
        /* Leaflet GoogleMutant */
        src: "https://unpkg.com/leaflet.gridlayer.googlemutant@latest/Leaflet.GoogleMutant.js"
      },
      {
        /* jQuery for ajax */
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
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
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    },
    babel: {
      compact: true
    }
  }
}