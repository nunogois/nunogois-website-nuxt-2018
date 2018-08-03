<template>
  <div>    
    <h1 class="page_title">// BLOG</h1>
    <div class="container">
        <font-awesome-icon :icon="['fas', 'graduation-cap']" style="font-size:56px;" class="animated pulse infinite" />
        <span style="font-size:28px;">Learning Series</span>
        <br>
        <span>The blog is still under development. Join my <a href="https://discord.gg/rvT8TCm">Discord</a> for help and to help others!</span>
        <br>
        <span>Click the title of any of the articles below:</span>
        <div class="columns is-multiline" style="padding-top:20px">                
          <blog-item v-for="item in items" :key="item.id" :title="item.title" :subtitle="item.subtitle" :color="item.color" :description="item.description" :link="item.link" />
        </div>
    </div>
  </div>
</template>

<script>
import blogItem from '~/components/blogItem.vue'

  export default {
    data () {
        return {
            items: []
        }
    },
    components: {
      blogItem
    },
    mounted: function () {
        this.items = [ 
                {
                    id: 0,
                    title: 'Web Development',
                    subtitle: '1. Basics',
                    color: '#ffe255',
                    description: "Basic introduction to Web and Web Development. Learn about concepts like Back-end and Front-end.",
                    link: "/blog/learning/webdev_1.html"
                },
                {
                    id: 1,                                    
                    title: 'Web Development',
                    subtitle: '2. New Project',
                    color: '#52ffff',
                    description: "Creating a new project from scratch. Learn about Node, VS Code and JSON. Create a basic page with HTML, CSS and JS.",
                    link: "/blog/learning/webdev_2.html"
                }
            ]
    }
  }
</script>