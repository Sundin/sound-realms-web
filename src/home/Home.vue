<template>
  <main-layout>
    <div class="content">
      <div class="topSection">
      <!-- <img alt="Sound Realms logo" class="topImage" src="../assets/home/sr-cover-image.jpg" /> -->
      <a href="https://www.kickstarter.com/projects/varghand/fortress-of-death/" target="_blank">
        <img alt="Sound Realms Kickstarter" class="topImage" src="../assets/home/fod-kickstarter-live-banner.jpg" />
      </a>
      </div>
      <section>
        <div class="section-content">
          <h1>The First Ever REAL Audio Solo Roleplaying Game</h1>
          <div class="text">
            <p>
              <strong>Sound Realms</strong> is an interactive audio adventure app. Featuring great
              adventures, presented with top class voice-over performances, original orchestral
              music, cinematic sound effects, digital RPG dice rolls, digital character sheets,
              skills, spells, swords and monsters!
            </p>
            <p>
              Download Sound Realms for free through Google Play or App Store and begin your
              adventure now.
            </p>
          </div>

          <div class="columns">
            <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
              <img src="../assets/gametest/google-play-badge.png" class="small-image"/>
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
              <img src="../assets/gametest/android_qr.png" class="qr" />
            </a>

            <a href="https://apps.apple.com/se/app/sound-realms/id1587860372">
              <img src="../assets/gametest/app-store-badge.png" class="small-image"/>
            </a>

            <a href="https://apps.apple.com/se/app/sound-realms/id1587860372">
              <img src="../assets/gametest/ios_qr.png" class="qr" />
            </a>
          </div>

          <img src="../assets/pile_of_bones.png" class="small-image" />
        </div>
      </section>

      <div class="strip">
        <h2>Sign up for the Newsletter</h2>
        <div class="section-content">
          <p class="inverted">
            Sign up for our newsletter if you want to stay up to date when we release new
            adventures. Occassionally you will also receive free in-game bonus items and other
            goodies.
          </p>
          <NewsletterSignupForm/>
        </div>
      </div>

      <section>
        <div class="section-content">
          <h1>Our Games</h1>
          <p>
            Sound Realms is a platform where you will find a wide range of RPG audio solo
            adventures. In the future we will expand this range to include many different genres and
            styles &mdash; fantasy, horror, sci-fi and so on &mdash; but currently you will find two
            separate Realms in the app. One is <i><a href="/maceandmagic">Mace & Magic</a></i>, our own post-apocalyptic fantasy
            world, and the other is <i><a href="/fortressofdeath">Lone Wolf: The Fortress of Death</a></i>, a direct continuation
            of Joe Dever's classic Lone Wolf saga.
          </p>
        </div>

        <div class="section-content">
          <div class="row">
            <div class="game_image_wrapper">
            <a href="/maceandmagic" class="dreadhorn_image">
              <img src="../assets/home/dreadhorn.png" alt="Mace & Magic" />
            </a>
          </div>
          <div class="game_image_wrapper">
            <a href="/fortressofdeath" class="dreadhorn_image">
              <img src="../assets/home/fod-round-live.png" alt="Lone Wolf: The Fortress of Death" />
            </a>
          </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainFooter from '../components/MainFooter.vue';
import MainLayout from '../layouts/Main.vue';
import NewsletterSignupForm from '../components/NewsletterSignupForm.vue';

export default {
  name: 'HomePage',
  components: {
    MainFooter,
    MainLayout,
    NewsletterSignupForm,
  },
};
</script>

<style scoped>
.topSection {
  background-color: #672a66;
  width: 100%;
}

h1,h2 {
  font-family: Arial, Helvetica, sans-serif;
}

.columns {
  column-count: 2;
  column-gap: 40px;
  max-width: 500px;
}
.qr {
  padding-top: 15px;
  padding-bottom: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 960px;
}
.text {
  align-items: flex-start;
}
.dreadhorn_image {
  max-width: 40%;
  padding-bottom: 30px;
  padding-right: 30px;
}

.gallery {
  padding-top: 30px;
  padding-bottom: 60px;
  max-width: 80%;
}
.logo {
  padding: 12px;
  max-width: 90%;
  height: auto;
  object-fit: scale-down;
}
.topImage {
  width: 100%;
}
.small-image {
  padding-top: 15px;
  padding-bottom: 15px;
}

img {
  max-width: 100%;
}

.hero {
  width: 100%;
  position: relative;
}
.hero-image {
  width: 100%;
  min-height: 400px;
  height: 100%;
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.hero-text > p,
h2 {
  max-width: 960px;
  padding-left: 30px;
  padding-right: 30px;
}

.video-wrap {
  width: 80%;
  max-width: 960px;
  padding-top: 30px;
  padding-bottom: 90px;
}

.video-container {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 56.25%; /* creates a 16:9 aspect ratio */
}

.video-container iframe,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.section-content {
  padding-bottom: 30px;
}

@media screen and (max-width: 980px) {
  .row {
    flex-direction: column;
  }
  .dreadhorn_image {
    max-width: 80%;
  }

  .gallery {
    max-width: 95%;
  }
}
@media screen and (max-width: 680px) {
  .hero-text {
    font-size: 0.8rem;
  }
  .qr {
    display: none;
  }
}
@media screen and (max-width: 540px) {
  .hero-text {
    font-size: 0.7rem;
  }
}

.strip {
  background-color: #672a66;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
}

.strip > h1,h2 {
  color: white;
}
</style>
