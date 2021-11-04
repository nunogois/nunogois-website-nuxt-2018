<template>
  <div>
    <section class="container-nuxt">
      <div>
        <h1 class="title-nuxt animated slideInDown">
          <nunogois />
        </h1>
        <div class="animated slideInUp">
          <h2 class="subtitle-nuxt">
            Full-Stack Developer
          </h2>
          <!-- <h3 class="subtitle-nuxt-smaller">
            Portuguese full-stack developer experienced in .NET, ASP.NET, .NET Core, C#, Java, SQL, JavaScript and many other interesting technologies and matters of software development.
          </h3> -->
          <h3 class="subtitle-nuxt-smaller">
            Experienced and driven {{ age }} years old Full-Stack Developer from
            Portugal. Passionate for the job, love putting skills to the test,
            facing challenges in a creative and perfectionist way. Experienced
            with every step of developing and delivering cross-platform, modern
            and responsive software. Worked with several different technologies
            across the stack, always willing to learn more and improve skills.
          </h3>
          <NuxtLink to="/about">READ MORE</NuxtLink>
          <h3 class="subtitle-nuxt-smaller">
            <a
              href="https://twitter.com/nunogois_dev/status/1456331425356161028"
              target="_blank"
              >Stay tuned: New website coming soon!</a
            >
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import nunogois from "~/components/nunogois.vue";

export default {
  components: {
    nunogois
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
    }
  }
};
</script>

<style>
.container-nuxt {
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 1px;
}

.title-nuxt {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  border-bottom: 1px solid #333;
}

.subtitle-nuxt {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
  padding-top: 25px;
}

.subtitle-nuxt-smaller {
  font-weight: 300;
  font-size: 16px;
  padding-bottom: 15px;
  padding-top: 25px;
  max-width: 900px;
}

.links-nuxt {
  padding-top: 15px;
}

.links-nuxt > a {
  margin: 10px;
}

/* MOBILE */
@media only screen and (max-width: 768px) {
  .title-nuxt {
    font-size: 47px;
  }

  .subtitle-nuxt {
    font-size: 16px;
    padding: 10px;
  }

  .subtitle-nuxt-smaller {
    font-size: 12px;
    padding: 10px;
  }
}
</style>
