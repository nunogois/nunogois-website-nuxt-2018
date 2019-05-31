<template>
  <div class="animated fadeIn" v-show="loaded">
    <navbar/>
    <nuxt/>
  </div>
</template>

<script>
console.log('%cNuno Góis © ' + new Date().getFullYear(), 'font-size:20px;background:black;color:white;padding:10px;');

import navbar from '~/components/navbar.vue'

export default {
  data () {
    return {
      loaded: false
    }
  },
  components: {
    navbar
  },
  mounted: function() {
    this.loaded = true;
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  padding-top: 60px;
  padding-top: 4.25rem;
  overflow-y: auto;

  padding-bottom:44px;

  background-color: #1a1a1a;

  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  color: white;  
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.subtitle {
  margin-top: 0 !important;
}

a {
  font-weight:bold;
}
a:hover {
  color:#0061ff;
}
</style>
