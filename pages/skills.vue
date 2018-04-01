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
                    content: "I am a " + this.age + " years old full-stack developer from Portugal. I love my job and have over 5 years of professional experience. I'm currently working for <a href=\"https://www.iqa.pt\">IQA</a>, developing <a href=\"https://www.myagir.com\">AGIR</a> and all of its related projects."
                },
                {
                    id: 1,
                    text: '.NET',
                    title: '.NET',
                    color: '#68217a',
                    content: "I absolutely love putting my skills to the test. I'm a bit of a creative and perfectionist individual who is addicted to new challenges, the feeling of evolution and self-improvement. There is always something new to learn and ways to improve."
                },
                {
                    id: 2,
                    text: 'SQL',
                    title: 'SQL',
                    color: '#f21614',
                    content: "Besides creating stuff, I love music, movies, TV series, videogames, reading and writing. If you wish to know more about my personality and personality tests is your thing, I'm considered an INTJ according to MBTI."
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