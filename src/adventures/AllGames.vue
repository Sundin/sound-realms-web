<template>
  <main-layout>
    <div class="content">
      <section>
        <div class="section-content">
          <MyBreadcrumbs
            :breadcrumbs="[
              {
                title: 'Sound Realms',
                link: '/',
              },
              {
                title: 'Games',
              },
            ]"
          />
          <h1>Our Games</h1>
          <p>
            Sound Realms is a platform where you will find a wide range of RPG audio solo
            adventures. In the future we will expand this range to include many different genres and
            styles &mdash; fantasy, horror, sci-fi and so on &mdash; but currently you will find two
            separate Realms in the app. One is <i><a href="/maceandmagic">Mace & Magic</a></i
            >, our own post-apocalyptic fantasy world, and the other is
            <i><a href="/fortressofdeath">Lone Wolf: The Fortress of Death</a></i
            >, a direct continuation of Joe Dever's classic Lone Wolf saga.
          </p>
        </div>

        <div class="section-content">
          <div class="row">
            <div>
              <a href="/maceandmagic" class="dreadhorn_image">
                <img src="../assets/home/dreadhorn.png" alt="Mace & Magic" />
              </a>
            </div>
            <div>
              <a href="/fortressofdeath" class="dreadhorn_image">
                <img
                  src="../assets/home/fod-round-funded.png"
                  alt="Lone Wolf: The Fortress of Death"
                />
              </a>
            </div>
            <div>
              <a href="/dracula" class="dreadhorn_image">
                <img src="../assets/home/dracula.png" alt="Dracula: Curse of the Vampire" />
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
import MainFooter from "../components/MainFooter.vue";
import MainLayout from "../layouts/Main.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  name: "HomePage",
  components: {
    MainFooter,
    MainLayout,
    MyBreadcrumbs,
  },
};
</script>

<style scoped>
.topSection {
  background-color: #672a66;
  width: 100%;
}

h1,
h2 {
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

.row {
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 960px;
}
@media screen and (max-width: 980px) {
  .row {
    grid-template-columns: repeat(2, 1fr);
  }
  .dreadhorn_image {
    max-width: 80%;
  }

  .gallery {
    max-width: 95%;
  }
}
@media screen and (max-width: 680px) {
  .row {
    grid-template-columns: repeat(1, 1fr);
  }
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

.strip > h1,
h2 {
  color: white;
}
</style>
