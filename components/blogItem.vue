<template>
<div class="column is-4">    
    <div class="card animated fadeIn" v-show="loaded">
        <a :href="link" class="card-link">
        <h1 class="card-category" v-html="title"></h1>
        <h1 class="card-subtitle" v-html="subtitle" :style="{color: color}"></h1>
        </a>
        <div class="card-content">            
            <div class="content" v-html="description"></div>
        </div>
    </div>    
</div>
</template>

<script>
export default {
    props: ['title', 'subtitle', 'color', 'description', 'link'],
    data () {
        return {
            loaded: false
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.loaded = true;
        })
    }
}
</script>

<style>
.card {
    border-radius: 20px;
    background-color:transparent;
    color:white;
    border:1px solid white;
    height:100%;
}
.card-image {
    text-align:center;
    padding-top:20px;
}

.card-link, .card-link:hover {
    color: #fff
}

.card-image > .image {
    display:inline-block;
}

.card-category {
    padding-top:20px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}

.card-subtitle {
    text-align: center;
    font-size: 18px;
}

.card-content {
    padding-top:0px;
}

.card-content > .content {
    padding-top:20px;
}
</style>