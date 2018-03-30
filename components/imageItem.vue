<template>
<div class="column is-4">
    <div class="card animated fadeIn" v-show="loaded">
    <div class="card-image">
        <figure class="image is-128x128">
            <img :src="image"/>
        </figure>
    </div>
    <div class="card-content">
        <h1 class="card-title" v-html="title" :style="{color: color}"></h1>
        <div class="content" v-html="content"></div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['image', 'title', 'color', 'content'],
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

.card-image > .image {
    display:inline-block;
}

.card-title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}

.card-content {
    padding-top:5px;
}

.card-content > .content {
    padding-top:20px;
}
</style>