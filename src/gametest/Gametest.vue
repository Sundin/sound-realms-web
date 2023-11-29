<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <MyBreadcrumbs
        :breadcrumbs="[
          {
            title: 'Sound Realms',
            link: '/'
          },
          {
            title: 'Download'
          }
        ]"
      />
      <div class="section-content">
        <h1>Take heed adventurer!</h1>
        <p>
          <strong>Sound Realms</strong> is an interactive audio adventure app. Featuring great
          adventures, presented with top class voice-over performances, original orchestral music,
          cinematic sound effects, digital RPG dice rolls, digital character sheets, skills, spells,
          swords and monsters!
        </p>
        <p>
          Download Sound Realms for free through Google Play or App Store and begin your adventure
          now.
        </p>
        <div class="columns">
          <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
            <img src="../assets/gametest/google-play-badge.png" class="qr" />
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
            <img src="../assets/gametest/android_qr.png" class="qr" />
          </a>

          <a href="https://apps.apple.com/se/app/sound-realms/id1587860372">
            <img src="../assets/gametest/app-store-badge.png" class="qr" />
          </a>

          <a href="https://apps.apple.com/se/app/sound-realms/id1587860372">
            <img src="../assets/gametest/ios_qr.png" class="qr" />
          </a>
        </div>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import TopMenu from '../components/TopMenu.vue';
import MyBreadcrumbs from '../components/MyBreadcrumbs.vue';

export default {
  name: 'GameTest',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    MyBreadcrumbs,
  },
};
</script>

<style scoped>
.columns {
  column-count: 2;
  column-gap: 40px;
  max-width: 500px;
}
.bg {
  background-image: url("../assets/pergament_background.jpg");
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
.qr {
  padding-top: 15px;
  padding-bottom: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.image {
  max-height: 200px;
}

h1 {
  color: black;
  max-width: 100%;
}

.button {
  margin: 30px;
}
</style>
