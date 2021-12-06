<template>
  <div class="footer-wrapper">
    <div class="soundRealmsStrip">
      <a href="/" class="logo-link">
      <img
        src="../assets/sound_realms_white_logo.png"
        style="padding: 30px; max-width: 80%"
      />
      </a>
      <div class="links">
        <a href="/game-testing">GAME TESTING</a>
        <a href="/learn-more">LEARN MORE</a>
        <a href="/contact">CONTACT</a>
      </div>
    </div>
    <div class="footer">
      <a href="https://www.varghand.com/" class="logo-link">
        <img src="../assets/varghand_logo.png" style="padding: 30px" />
      </a>
      <p>Copyright © 2020-{{this.getCurrentYear()}} Varghand Publishing AB. All rights reserved.</p>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer-wrapper {
  width: 100%;
}
.soundRealmsStrip {
  background-color: #333333;
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer {
  background-color: #2c2c2c;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo-link {
  display: flex;
  justify-content: center;
}
.footer > p {
  color: #4f4e4f;
  max-width: 80%;
}
.footer > a > img {
  max-width: 200px;
}
.links {
  display: flex;
  justify-content: space-evenly;
}
.links > a {
  padding: 30px;
  width: 110px;
  text-align:center;display:block;
}
@media screen and (max-width:540px){
  .links > a  {width: unset;}
}
</style>
