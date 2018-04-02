<template>
  <div>
    <h1 class="page_title">// SKILLS</h1>
    <div class="container">
        <div style="padding-bottom:20px;">
            <input type="text" v-model="search" class="searchbox" :placeholder="search_placeholder"/>        
        </div>
        <div class="columns is-multiline">                
            <item v-for="item in s_items" :key="item.id" :library="item.library" :text="item.text" :icon="item.icon" :title="item.title" :color="item.color" :content="item.content"/>
        </div>
    </div>
  </div>
</template>

<script>
import item from '~/components/item.vue'

  export default {
    data () {
        return {
            search: '',
            search_placeholder: 'Looking for something in particular? Try typing here!',
            items: [ 
                {
                    id: 0,
                    library: 'fab',
                    icon: 'js-square',
                    title: 'JavaScript',
                    color: '#f7df1e',
                    content: "In my opinion, JavaScript is the language you <i>need</i> to know in 2018. Yes, it has its weird parts, but you can do pretty much everything you think of with it and a bit of front-end knowledge (HTML, CSS). I use JSON even for non-JavaScript related projects. I've started using JavaScript mostly with jQuery as a DOM manipulator and AJAX, but now I'm using it with Node.js (npm/yarn are great!), Nuxt.js/Vue.js, NativeScript, some experiments on Electron and just plain JavaScript using some new ECMAScript cool features sometimes. TypeScript is great from what I've seen and I intend to dive deeper into it at a later stage."
                },
                {
                    id: 1,
                    text: '.NET',
                    title: '.NET',
                    color: 'rgb(186, 70, 216)',
                    content: "I've always been a .NET developer, ever since I learned Visual Basic around 2005. C# has always been my favorite language but has taken a second place due to the relevance of JavaScript currently. There isn't much I haven't made in .NET: ASP.NET, WebForms, Web API, Web Services, SignalR, WinForms, Windows Services, Console Apps, Office Add-Ins, and so on. I've dabbled around with Xamarin and Core but never used them for big projects. It seems like there are better alternatives for Xamarin if you have the know-how. However Core seems like a great idea for cross-platform!"
                },
                {
                    id: 2,         
                    library: 'fas',
                    icon: 'database',
                    title: 'Databases',
                    color: '#f21614',
                    content: "Due to my .NET oriented experience, the database engine I'm most familiar with is SQL Server. I'm experienced in creating complex SQL queries, designing schemas, creating indexes, managing databases and respective users/roles, and so on. I've also used MySQL and SQLite successfully in the past, using several available connectors or developing wrappers for different programming languages. Recently I've experimented with MongoDB and loved it! Even though I consider myself efficient in this space, there's still a lot I would like to learn."
                },
                {
                    id: 3,         
                    library: 'fab',
                    icon: 'css3-alt',
                    title: 'CSS',
                    color: '#1a75be',
                    content: "I'm experienced in creating intuitive, attractive and responsive designs. I'm familiar with CSS frameworks like Bootstrap and their grid systems that facilitate the process of creating a responsive layout. I'm recently leaning towards Bulma and other lightweight CSS frameworks."
                }
            ]
        }
    },
    components: {
      item
    },
    computed:
    {
        s_items:function()
        {
            var vm = this;
            return this.items.filter(function(item){
                return item.title.toLowerCase().indexOf(vm.search.toLowerCase())>=0 || item.content.toLowerCase().indexOf(vm.search.toLowerCase())>=0;
            });
        }
    },
    mounted: function() {
        if (window.innerWidth < 768)
            this.search_placeholder = "Type here to filter skills...";
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