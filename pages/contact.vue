<template>
  <div>
    <h1 class="page_title">// CONTACT</h1>
    <div class="container" v-show="!email">        
        <div class="columns is-multiline col-center animated fadeIn" v-show="loaded">                
            <div class="column is-4"><a href="javascript:;" @click="toggleEmail()"><font-awesome-icon style="font-size:200px;color: #bd880c" :icon="['far', 'envelope']"/></a></div>
            <div class="column is-4"><a href="https://github.com/yokiharo" target="_blank"><font-awesome-icon style="font-size:200px;color: #573b76" :icon="['fab', 'github-alt']"/></a></div>
            <div class="column is-4"><a href="https://www.linkedin.com/in/nuno-gois" target="_blank"><font-awesome-icon style="font-size:200px;color: #337ab7" :icon="['fab', 'linkedin']"/></a></div>
        </div>
    </div>
    <div class="animated fadeIn" v-show="email">
        this is email
        <a href="javascript:;" @click="toggleEmail()">Close</a>
    </div>
    <h1 class="animated slideInUp" style="text-align:center;padding-top:50px;">© {{year}} - Nuno Góis</h1>
  </div>
</template>

<script>
import item from '~/components/item.vue'

  export default {
    data () {
        return {
            loaded: false,
            email: false
        }
    },
    components: {
      item
    },
    methods: {
        toggleEmail() {
            this.email = !this.email;
        }
    },
    computed: {
        year() {
            return new Date().getFullYear();
        }
    },
    mounted: function () {
        this.loaded = true;
    }
  }
</script>

<style>
.col-center {
    text-align:center;
}
</style>