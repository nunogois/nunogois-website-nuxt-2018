<template>
    <div>
        <section class="container-nuxt">
        <div>
            <h1 v-if="error.statusCode === 404">Page not found.</h1>
            <h1 v-else>Something went wrong.</h1>
            <nuxt-link to="/">HOME</nuxt-link>
        </div>
        </section>
    </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
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
</style>