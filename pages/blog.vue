<template>
  <div>    
    <h1 class="page_title">// BLOG</h1>
    <div class="container">
        <!-- <font-awesome-icon :icon="['fas', 'graduation-cap']" style="font-size:56px;" class="animated pulse infinite" />
        <span style="font-size:28px;">Learning Series</span>
        <br>
        <span>NOTE: Unfortunately, I'll have to put my Learning Series on hold for an indeterminate time due to bigger projects. Follow me on social media so you know when I get back to it!</span>
        <br>
        <br>
        <span>If you want real-time help or wish to help others that may need your help, you can go ahead and join my <a href="https://discord.gg/rvT8TCm">Discord</a>.</span>
        <br>
        <span>Click the title of any of the articles below to get started:</span>
        <div class="columns is-multiline" style="padding-top:20px">                
          <blog-item v-for="item in items" :key="item.id" :title="item.title" :subtitle="item.subtitle" :color="item.color" :description="item.description" :link="item.link" />
        </div> -->
        <div style="padding-bottom:20px;">
            <input type="text" v-model="search" class="searchbox" placeholder="Looking for something in particular? Try typing here!"/>        
        </div>
        <div class="columns is-multiline">                
          <blog-item v-for="item in s_items" :key="item.guid" :data-guid="item.guid" :item="item" />
        </div>
    </div>
  </div>
</template>

<script>
import blogItem from '~/components/blogItem.vue'
var Parser = require('rss-parser')
var parser = new Parser()

  export default {
    data () {
        return {
          search: '',
          items: []
        }
    },
    components: {
      blogItem
    },
    computed:
    {
        s_items:function()
        {
            var vm = this;
            return vm.items.filter(function(item){
                return item.title.toLowerCase().indexOf(vm.search.toLowerCase())>=0 || item.content.toLowerCase().indexOf(vm.search.toLowerCase())>=0 || item.categories.filter(c => c.toLowerCase().indexOf(vm.search.toLowerCase()) >= 0).length>0;
            });
        }
    },
    mounted: function () {
      window.update_colors = function(auth) {
        var colors = {}

        var cards = document.getElementsByClassName("blog-item")
        for (var i = 0; i < cards.length; i++) {
            var guid = cards[i].dataset.guid
            var color = cards[i].getElementsByClassName("card-category")[0].style.color
            colors[guid] = color
        }

        var xhttp = new XMLHttpRequest()
        xhttp.open("POST", "https://cors-anywhere.herokuapp.com/https://nunogois-api.herokuapp.com/colors", true)
        xhttp.setRequestHeader("Content-type", "application/json")
        xhttp.send(JSON.stringify({ auth: auth, colors: colors }))
      }

      var el = this
      parser.parseURL('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@yokiharo').then(function (res) {
        
          res.items.forEach(function (item) {
            var content = item.content
            var i = item.content.indexOf('Continue reading on Medium »')
            content = content.substring(0, i-1) + ' target="__blank">Read More' + content.split('Continue reading on Medium »')[1]
            item.content = content
            item.color = undefined
            item.loaded = true
          })

        el.items = res.items

        el.$axios.get('https://cors-anywhere.herokuapp.com/https://nunogois-api.herokuapp.com/colors').then(function (colors) {
          res.items.forEach(function (item) {
            item.color = colors.data[item.guid]
          })
          el.$set(el.items, Object.assign([], res.items))
        })
      })
        // this.items = [ 
        //         {
        //             id: 0,
        //             title: 'Web Development',
        //             subtitle: '1. Basics',
        //             color: '#ffe255',
        //             description: "Basic introduction to Web and Web Development. Learn about concepts like Back-end and Front-end.",
        //             link: "/blog/learning/webdev_1.html"
        //         },
        //         {
        //             id: 1,                                    
        //             title: 'Web Development',
        //             subtitle: '2. New Project',
        //             color: '#52ffff',
        //             description: "Create a new project from scratch. Learn about Node, VS Code and JSON. Create a basic page with HTML, CSS and JS.",
        //             link: "/blog/learning/webdev_2.html"
        //         },
        //         {
        //             id: 2,                                    
        //             title: 'Web Development',
        //             subtitle: '3. Bootstrap & jQuery (Coming Soon)',
        //             color: '#ff85ce',
        //             description: "Create a basic Web App using Bootstrap and jQuery (and some other extras). Learn about requests and how to communicate between the Back-end and the Front-end.",
        //             link: "javascript:;"
        //         },
        //         {
        //             id: 3,                                    
        //             title: 'Web Development',
        //             subtitle: '4. Version Control & Hosting (Coming Soon)',
        //             color: '#ff9797',
        //             description: "Learn the basics of Version Control (Git). Discover ways of hosting your project for free.",
        //             link: "javascript:;"
        //         },
        //         {
        //             id: 4,                                    
        //             title: 'Web Development',
        //             subtitle: '5. Nuxt Website (Coming Soon)',
        //             color: '#3de698',
        //             description: "Create a Nuxt Website. Learn the basics of Vue and complete the process of creating a modern website from scratch.",
        //             link: "javascript:;"
        //         },
        //         {
        //             id: 5,                                    
        //             title: 'Web Development',
        //             subtitle: '6. Quasar Cross-Platform App (Coming Soon)',
        //             color: '#67d5ff',
        //             description: "Create a Quasar Cross-Platform App. Use the Web Development knowledge acquired to create a modern cross-platform App.",
        //             link: "javascript:;"
        //         }
        //     ]
    }
  }
</script>

<style>
.searchbox {
    background-color:transparent;
    color:white;
    border:none;
    width:100%;
    outline:none;
    font-size:22px;
}
</style>