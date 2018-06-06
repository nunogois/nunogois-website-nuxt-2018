<template>
<div class="column is-4">
    <div class="card animated fadeIn" v-show="loaded">
    <div class="card-image" :style="{color: color}">
        <font-awesome-icon :icon="[library, icon]" style="font-size:56px;" v-show="!text" />    
        <span style="font-size:56px;" v-html="text"></span>
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
    props: {
        library: {default: 'far', type: String},
        icon: {default: 'question-circle', type: String},
        text: {default: '', type: String},
        title: {type: String},
        color: {type: String},
        content: {type: String}
    },
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