<template>
  <div>
    <section class="container-nuxt">
      <div>
        <h1 class="title-nuxt animated slideInDown">
          <nunogois/>
        </h1>
        <h2 class="subtitle-nuxt animated slideInUp">
          Full-Stack Developer
        </h2>
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