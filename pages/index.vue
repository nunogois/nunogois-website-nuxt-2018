<template>
  <div>
    <section class="container-nuxt">

      <div>
        <h1 class="title-nuxt">
          <nunogois/>
        </h1>
        <h2 class="subtitle-nuxt animated slideInUp">
          Software Developer
        </h2>
        <!-- <div class="links-nuxt">
          <router-link :to="'/about'" class="button is-dark is-medium">About Me</router-link>
          <router-link :to="'/contact'" class="button is-medium">Contact</router-link>
        </div> -->
      </div>

    </section>
  </div>
</template>

<script>
  import nunogois from '~/components/nunogois.vue'

  export default {
    components: {
      nunogois
    }
  }
</script>

<style>

.container-nuxt {
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title-nuxt {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  border-bottom:1px solid #333;
}

.subtitle-nuxt {
  font-weight: 300;
  font-size: 42px; 
  word-spacing: 5px;
  padding-bottom: 15px;
  padding-top:25px;
}

.links-nuxt {
  padding-top: 15px;
}

.links-nuxt > a {
  margin:10px;
}

/* MOBILE */
@media only screen and (max-width: 768px) {
  .title-nuxt {
    font-size: 47px;
  }

  .subtitle-nuxt {
    font-size:16px;
    padding:10px;
  }
}
</style>

<!--<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style> -->
