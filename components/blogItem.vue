<template>
<div class="column blog-item is-half-tablet is-one-quarter-fullhd">    
    <!-- <div class="card animated fadeIn" v-show="loaded">
        <a :href="link" class="card-link">
        <h1 class="card-category" v-html="title"></h1>
        <h1 class="card-subtitle" v-html="subtitle" :style="{color: color}"></h1>
        </a>
        <div class="card-content">            
            <div class="content" v-html="description"></div>
        </div>
    </div>     -->
    <div class="card animated fadeIn" v-show="loaded && item.loaded">
        <a :href="item.link" class="card-link">
          <h1 class="card-category" :style="'color: ' + item.color">{{ item.title }}</h1>
        </a>
        <span style="font-size:12px;float:right;padding: 0px 25px 5px 0px;">{{ item.isoDate.split('T')[0] }}</span>
        <div class="card-content">
            <div class="content" v-html="item.content"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['item'],
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
    padding-top:5px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: color 0.5s ease;
}

.card-subtitle {
    text-align: center;
    font-size: 18px;
}

.card-content {
    padding-top:0px;
}

.medium-feed-link {
  position: absolute;
  bottom: 15px;
}

.medium-feed-snippet {
  padding-bottom: 1em;
}

</style>