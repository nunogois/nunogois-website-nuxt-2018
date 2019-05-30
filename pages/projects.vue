<template>
  <div>
    <h1 class="page_title">// PROJECTS</h1>
    <div class="container">        
        <div class="columns is-multiline">                
            <image-item v-for="item in items" :key="item.id" :image="item.image" :title="item.title" :color="item.color" :content="item.content"/>
        </div>
    </div>
    <h1 class="animated slideInUp" style="text-align:center;margin-top:40px;">Check out my <a href="https://github.com/yokiharo" target="_blank">GitHub</a> for some open-source projects!</h1>
  </div>
</template>

<script>
import imageItem from '~/components/imageItem.vue'

export default {
    data () {
        return {
            items: []
        }
    },
    components: {
        imageItem
    },
    computed: {
        year() {
            return new Date().getFullYear();
        }
    },
    mounted: function () {
        this.items = [ 
                {
                    id: 0,
                    image: '/img/agir.png',
                    title: 'AGIR',
                    color: 'rgb(0, 168, 253)',
                    content: "<a href=\"https://www.myagir.com\" target=\"_blank\">AGIR</a> ® (© " + this.year + " | <a href=\"https://www.iqa.pt\" target=\"_blank\">IQA - Sistemas de Gestão da Qualidade</a>) is a Quality Management Software (QMS), Process Management (BPM) and Document control software. I've been working on the platform since 2011: From ASP.NET, SQL and Web API to .NET WinForms or Java, from Windows Services to Office Add-Ins. My favourite part of the platform is its flexibility - features like an intuitive Form Designer and a custom JavaScript framework mean that it is able to do pretty much anything you set your mind to."
                },
                {
                    id: 1,
                    image: '/img/nunogois_old.png',
                    title: 'Nuno Góis (old)',
                    color: 'rgb(226, 226, 226)',
                    content: "My old website was a single page that tried to list the most relevant info in a minimalist way. It was also a way to try Node.js in a personal way. I was pretty happy with the results however there was room for improvement: The design could be a bit more attractive, the website could be a lot faster, it didn't use SSL with my domain and I could organize things a bit better fitting more content. You can still check it out by clicking <a href=\"http://old.nunogois.com\" target=\"_blank\">here</a>."
                },
                {
                    id: 2,
                    image: '/img/nunogois.png',
                    title: 'Nuno Góis',
                    color: '#5ed56e',
                    content: "I'm very proud of my new website. It uses Nuxt.js (powered by Vue.js) as a generator of static files, replacing Bootstrap with the lighter Bulma, instead of jQuery it uses Vue.js and native JavaScript, providing a blazing fast SPA experience for its front-end. For the back-end, I've used Node.js as an extremely simple API. I think its design is a step-up from the previous version and I was able to fit in a bit more content in an organized way."
                }
            ]
    }
}
</script>