<template>
  <main-layout>
    <div class="content">
      <Menu/>
      <div class="section-content">
        <h1>Take heed adventurer!</h1>
        <p>
          Do you have the courage to explore the perilous halls of Vemhir the
          Soulbinder’s ancient castle? Find out in this very first demo adventure
          for Sound Realms &mdash; Mace & Magic.
        </p>
        <img src="../assets/4skeletons.png" class="image"/>
        <p>
          Please use quality headphones for a full, immersive 360 surround sound
          experience!
        </p>
        <p>Click or scan one of the QR codes below:</p>
        <div>
          <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
          <img src="../assets/gametest/android_qr.png" class="qr"/>
          </a>
          <a href="https://testflight.apple.com/join/ARR4pDmY">
          <img src="../assets/gametest/ios_qr.png"  class="qr"/>
          </a>
        </div>
        <p>
          Keep in mind that this is not the final product. Stay alert for regular
          updates and please report any bugs immediately to: <a href="mailto:app@sound-realms.com">app@sound-realms.com</a>.
        </p>
        <p>
          We will be super grateful if you take some time to answer the included
          <a href="https://forms.gle/JNuwPujg5J3Kb4kp7">feedback survey</a>. Feel free to contact us with any questions at <a href="mailto:dm@varghand.com">dm@varghand.com</a>.
        </p>
      </div>
      <Footer/>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Footer from '../components/Footer.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
    Footer,
    Menu,
  },
};
</script>

<style scoped>
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
  padding: 30px;
  max-width: 80%;
}
.image {
  max-height: 500px;
}
</style>
