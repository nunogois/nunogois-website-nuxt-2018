module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Nuno Góis - Full-Stack Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuno Góis - Full-Stack Developer. Portuguese full-stack developer experienced in .NET, ASP.NET, .NET Core, C#, Java, SQL, JavaScript and many other interesting technologies and matters of software development. Always looking for challenges, always looking to learn something new.' },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:title', content: 'Nuno Góis - Full-Stack Developer' },
      { prefix: 'og: http://ogp.me/ns# website: http://ogp.me/ns/website#', property: 'og:type', content: 'website' },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:description', content: 'Nuno Góis - Full-Stack Developer. Portuguese full-stack developer experienced in .NET, .NET Core, ASP.NET, C#, Java, SQL, JavaScript and many other interesting technologies and matters of software development. Always looking for challenges, always looking to learn something new.' },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:image', content: 'https://www.nunogois.com/thumbnail.png' },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:url', content: 'https://www.nunogois.com/' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'theme-color', content: '#1a1a1a'}
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '192x192', href: '/logo192.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.1/animate.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  generate: {
    fallback: true
  },
  plugins: [
    { src: '~/plugins/fontawesome.js' }
  ],
  css: [
    'assets/main.css',    
    'assets/scrollbar.css'
  ],
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
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
