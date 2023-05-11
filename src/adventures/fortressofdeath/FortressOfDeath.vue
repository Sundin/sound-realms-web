<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <h1>The Fortress of Death</h1>

        <img src="../../assets/fortressofdeath_info_2.jpg" class="image" />
        <a href="https://www.kickstarter.com/projects/varghand/fortress-of-death" target="_blank">
          <img src="../../assets/fod_kickstarter.jpg" class="image" />
        </a>
      </div>
      <div class="strip">
        <h1>Sign up for the Newsletter</h1>
        <div class="section-content">
          <p class="inverted">
            Sign up for our newsletter if you want to stay up to date when we release new
            adventures. Occassionally you will also receive free in-game bonus items and other
            goodies.
          </p>
          <iframe
            src="https://cdn.forms-content.sg-form.com/ae43989a-a486-11ec-941c-ceafd6e237fb"
          />
        </div>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/Main.vue';
import MainFooter from '../../components/MainFooter.vue';
import TopMenu from '../../components/TopMenu.vue';

export default {
  name: 'FortressOfDeath',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../../assets/pergament_background.jpg");
  width: 100%;
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  padding: 12px;
  max-width: 60%;
  height: auto;
  object-fit: scale-down;
}
.image {
  max-height: 800px;
  padding-bottom: 100px;
}

h1 {
  color: black;
}

iframe {
  width: 1000px;
  height: 500px;
  border: none;
}

.strip {
  background-color: #672a66;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
}

.strip > h1 {
  color: white;
}
</style>
