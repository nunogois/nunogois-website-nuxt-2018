<template>
  <div>
    <h1 class="page_title">// ABOUT ME</h1>
    <div class="container">
      <div class="columns is-multiline">
        <item
          v-for="item in items"
          :key="item.id"
          :icon="item.icon"
          :title="item.title"
          :color="item.color"
          :content="item.content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import item from "~/components/item.vue";

export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    item
  },
  computed: {
    age() {
      var birthDate = new Date("1989-12-27");
      var today = new Date();

      var years = today.getFullYear() - birthDate.getFullYear();

      if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
          today.getDate() < birthDate.getDate())
      ) {
        years--;
      }

      return years;
    },
    experience() {
      var startDate = new Date("2011-03-01");
      var today = new Date();

      var years = today.getFullYear() - startDate.getFullYear();

      if (
        today.getMonth() < startDate.getMonth() ||
        (today.getMonth() == startDate.getMonth() &&
          today.getDate() < startDate.getDate())
      ) {
        years--;
      }

      return years;
    }
  },
  mounted: function() {
    this.items = [
      {
        id: 0,
        icon: "id-card",
        title: "Bio",
        color: "#5ca9d6",
        content:
          "I am a " +
          this.age +
          " years old full-stack developer from Portugal. I love my job and have over " +
          this.experience +
          ' years of professional experience. I\'m very happy to be currently working for <a href="https://www.en.zoi.de/" target="_blank">Zoi</a> as a Specialist Full-Stack Developer assigned to Digital Innovations.'
      },
      {
        id: 1,
        icon: "lightbulb",
        title: "Mindset",
        color: "#ced65c",
        content:
          "I absolutely love putting my skills to the test. I'm a bit of a creative and perfectionist individual who is addicted to new challenges, the feeling of evolution and self-improvement. There is always something new to learn and ways to improve."
      },
      {
        id: 2,
        icon: "user",
        title: "Personality",
        color: "#d6935c",
        content:
          "Besides creating stuff, I love music, movies, TV series, videogames, reading and writing. If you wish to know more about my personality and you're interested in personality tests, I'm considered an INTJ according to MBTI."
      }
    ];
  }
};
</script>
