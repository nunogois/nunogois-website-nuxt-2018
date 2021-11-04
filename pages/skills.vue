<template>
  <div>
    <h1 class="page_title">// SKILLS</h1>
    <div class="container">
      <div style="padding-bottom:20px;">
        <input
          type="text"
          v-model="search"
          class="searchbox"
          :placeholder="search_placeholder"
        />
      </div>
      <div class="columns is-multiline">
        <item
          v-for="item in s_items"
          :key="item.id"
          :library="item.library"
          :text="item.text"
          :icon="item.icon"
          :title="item.title"
          :color="item.color"
          :content="item.content"
        />
      </div>
      <span v-show="s_items.length === 0"
        >It seems I may not be familiar with that. Please
        <NuxtLink to="/contact" id="tellmeaboutit">tell me about it</NuxtLink>
        so I can research it!</span
      >
    </div>
    <h1 class="animated slideInUp" style="text-align:center;margin-top:40px;">
      Check out my
      <a href="https://github.com/nunogois" target="_blank">GitHub</a> or
      <a href="https://cv.nunogois.com">CV</a> for up-to-date skills!
    </h1>
  </div>
</template>

<script>
import item from "~/components/item.vue";

export default {
  data() {
    return {
      search: "",
      search_placeholder:
        "Looking for something in particular? Try typing here!",
      items: [
        {
          id: 0,
          library: "fab",
          icon: "js-square",
          title: "JavaScript",
          color: "#f7df1e",
          content:
            "In my opinion, JavaScript is the language you <i>need</i> to know. Yes, it has its weird parts, but you can do pretty much everything you think of with it and a bit of front-end knowledge (HTML, CSS). I use JSON even for non-JavaScript related projects. My first experience using JavaScript was mostly with jQuery as a DOM manipulator and AJAX but now I'm using it for almost everything, depending on the project's requirements. I've extensively used Node.js (Express, Socket.io, etc), Vue.js (Nuxt, Quasar Framework, etc) and sometimes just plain JavaScript using some cool new ECMAScript features. TypeScript seems great from what I've seen and I intend to dive deeper into it at a later stage."
        },
        {
          id: 1,
          text: ".NET",
          title: ".NET",
          color: "rgb(186, 70, 216)",
          content:
            "I've always been a .NET developer, ever since I learned Visual Basic around 2005. C# has always been my favorite language but has taken a second place due to the relevance of JavaScript currently. There isn't much I haven't made in .NET: ASP.NET, WebForms, Web API, Web Services, SignalR, WinForms, Windows Services, Console Apps, Office Add-Ins, and so on. I'm currently developing in .NET Core and I've dabbled around with Xamarin but never used it for big projects. It seems like there are better alternatives for Xamarin if you have the know-how. I'm loving .NET Core!"
        },
        {
          id: 2,
          library: "fas",
          icon: "database",
          title: "Databases",
          color: "#f21614",
          content:
            "Due to my .NET oriented experience, the database engine I'm most familiar with is SQL Server. I'm experienced in creating complex SQL queries, scripts, indexes, designing schemas, managing databases and respective users/roles, and so on. I've also used MySQL and SQLite successfully in the past, using several available connectors or developing wrappers for different programming languages. Recently I've experimented with MongoDB and loved it! Even though I consider myself efficient in this space, there's still a lot I would like to learn."
        },
        {
          id: 3,
          text: "Java",
          title: "Java",
          color: "rgb(225, 31, 34)",
          content:
            "Even though I'm not experienced with the most popular Java frameworks I'm familiar enough with the language that I can learn them if needed. My experience with Java involved creating desktop applications and dabbling around with Android and frameworks like LibGDX."
        },
        {
          id: 4,
          text: "C/C++",
          title: "C and C++",
          color: "#72aeec",
          content:
            "I've grouped these 2 languages because my experience with both is very similar. I've used them both extensively but never for big projects, only for simple tools, plugins and applications."
        },
        {
          id: 5,
          icon: "image",
          title: "Design",
          color: "#32ffd1",
          content:
            "I'm mostly experienced with Adobe Photoshop. I'm able to accomplish simple tasks such as using custom fonts and brushes, using blending options, the Content Aware feature, creating simple renders, creating simple GIFs and so on. I'm looking into vectors and SVG animation at the moment."
        },
        {
          id: 6,
          library: "fab",
          icon: "css3-alt",
          title: "CSS",
          color: "#2399f7",
          content:
            "I'm experienced in creating intuitive, attractive and responsive designs. I'm familiar with CSS frameworks like Bootstrap and their grid systems that facilitate the process of creating a responsive layout. I'm recently leaning towards Bulma and other lightweight CSS frameworks."
        },
        {
          id: 7,
          library: "fas",
          icon: "code-branch",
          title: "Version Control",
          color: "white",
          content:
            "I have enough knowledge in this matter to accomplish the most common tasks. I've used git in services like GitHub, Bitbucket, Bonobo Git Server, Heroku, and so on. Besides git, I have experience in hosting and using Team Foundation Server. I like to use Trello for Project Management."
        },
        {
          id: 8,
          library: "fas",
          icon: "server",
          title: "Hosting",
          color: "#91ccfb",
          content:
            "I have experience with several hosting partners as well as self-hosting. My hosting experience is based on Windows but I'm looking into expanding it to other platforms. I'm familiar with hosting web applications in IIS, managing bindings, creating specific rules and installing SSL certificates."
        },
        {
          id: 9,
          library: "fas",
          icon: "mobile-alt",
          title: "Mobile Development",
          color: "#daeaa9",
          content:
            "I've explored several mobile frameworks including PhoneGap/Cordova, Xamarin and NativeScript. Lately, I prefer to build Progressive Web Apps with Quasar Framework. PWAs allow the user to install the app on any platform. It's also extremely easy to build for mobile using Quasar Framework!"
        },
        {
          id: 10,
          library: "fas",
          icon: "gamepad",
          title: "Game Development",
          color: "#1fff3c",
          content:
            "The game engine I'm most familiar with is Unity, that I use along with C# to create simple 2D games and prototypes that are cross-platform. Other than Unity I've experimented with Phaser, XNA, Unreal Engine, LibGDX and others."
        },
        {
          id: 11,
          library: "fas",
          icon: "flask",
          title: "Others / Researching...",
          color: "#2399f7",
          content:
            "Other than the skills listed here I'm always looking forward to add to my knowledge! Some of the things I'm interested in currently: GraphQL, AI, Machine Learning, Go, Python, WebAssembly, Blockchain, Phoenix (Elixir), and many others! Know of something that will interest me? <a href=\"javascript:;\" onclick=\"document.getElementById('tellmeaboutit').click();\">Tell me about it!</a>"
        }
      ]
    };
  },
  components: {
    item
  },
  computed: {
    s_items: function() {
      var vm = this;
      return this.items.filter(function(item) {
        return (
          item.title.toLowerCase().indexOf(vm.search.toLowerCase()) >= 0 ||
          item.content.toLowerCase().indexOf(vm.search.toLowerCase()) >= 0
        );
      });
    }
  },
  mounted: function() {
    if (window.innerWidth < 768)
      this.search_placeholder = "Type here to filter skills...";
  }
};
</script>

<style>
.searchbox {
  background-color: transparent;
  color: white;
  border: none;
  width: 100%;
  outline: none;
  font-size: 22px;
}
</style>
