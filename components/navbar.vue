<template>
    <nav class="navbar is-transparent is-fixed-top" aria-label="main navigation">
    <div class="navbar-brand">

        <span class="navbar-title" :class="{'is-invisible': !burger_open, 'animated fadeIn': burger_open}">NUNO GÓIS</span>

        <div class="navbar-burger burger" data-target="navbar_menu" @click="burger_toggle" :class="{'is-active': burger_open}">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <div id="navbar_menu" class="navbar-menu animated fadeIn" :class="{'is-active': burger_open}">
        <div class="navbar-end">
            <router-link :to="'/'" class="navbar-item" @click.native="burger_close">HOME</router-link>
            <router-link :to="'/blog'" class="navbar-item" @click.native="burger_close">BLOG</router-link>
            <router-link :to="'/about'" class="navbar-item" @click.native="burger_close">ABOUT ME</router-link>
            <router-link :to="'/skills'" class="navbar-item" @click.native="burger_close">SKILLS</router-link>
            <router-link :to="'/projects'" class="navbar-item" @click.native="burger_close">PROJECTS</router-link>
            <router-link :to="'/contact'" class="navbar-item" @click.native="burger_close">CONTACT</router-link>
        </div>
    </div>
    
    </nav>
</template>

<style>
.navbar-title {
    color:#989898;
    padding:15px;
}

.navbar-item {
    color: #989898;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    font-weight:300;
}
.navbar-item .logo {
    max-height:inherit;
}
a.navbar-item:hover, a.navbar-item.is-active, a.navbar-link:hover, a.navbar-link.is-active, .navbar-burger:hover {
    background-color:inherit
    
}
.navbar {
    background-color: #1a1a1a;
}

.nuxt-link-exact-active {
    color:#d8d8d8;
}

@media screen and (max-width: 1023px) {
    .navbar-menu {
        background-color: #1a1a1a;
        color: #989898;
    }
}
</style>

<script>
export default {
    data () {
        return { burger_open: false }
    },
    methods: {
        burger_toggle () {
            this.burger_open = !this.burger_open;
        },
        burger_close() {
            this.burger_open = false;
        }
    }
}
</script>