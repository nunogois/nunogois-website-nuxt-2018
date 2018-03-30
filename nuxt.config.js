module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuno Góis - Software Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuno Góis - Software Developer. Portuguese full-stack developer experienced in .NET, ASP.NET, C#, Java, SQL, JavaScript and many other interesting matters of software development. Always looking for challenges, always looking to learn something new.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/fontawesome.js' }
  ],
  css: [
    'assets/main.css',    
    'assets/scrollbar.css'
  ],
  modules: [
    '@nuxtjs/bulma'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
