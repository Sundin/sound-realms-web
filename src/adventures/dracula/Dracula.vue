<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <MyBreadcrumbs
        :breadcrumbs="[
          {
            title: 'Sound Realms',
            link: '/',
          },
          {
            title: 'Dracula: Curse of the Vampire',
          },
        ]"
      />
      <div class="section-content">
        <img
          src="../../assets/dracula/dracula-hero-image.png"
          alt="Dracula: Curse of the Vampire"
          class="image"
        />

        <p>
          Sound Realms are very proud and excited to announce a collaboration with ACE Gamebooks and
          author Jonathan Green to create an audio adventure version of
          <i>Dracula, Curse of the Vampire</i> (2021) for the Sound Realms platform.
        </p>
        <p>
          Oscar Carlquist: "We are very pleased to present the next upcoming addition to Sound
          Realms and I can't wait to start creating some truly haunting and immersive soundscapes
          for <i>Dracula: Curse of the Vampire</i>. The interactive gamebook version of Bram
          Stoker's classic is masterfully written by Jon Green and taking this into the audio realm
          will be as much of an honour as a challenge that we here at Sound Realms are ready to
          embrace with enthusiasm and dedication!"
        </p>
        <p>
          Jonathan Green: "I am thrilled that Sound Realms are turning
          <i>Dracula: Curse of the Vampire</i> into the first audio ACE Gamebook and can't wait to
          hear how they bring the horror to life through the use of soundscapes and top-notch voice
          talent. It's going to be bloodcurdlingly brilliant!"
        </p>

        <MyButton
          external="true"
          class="button"
          href="https://www.kickstarter.com/projects/varghand/sound-realms-dracula-curse-of-the-vampire"
        >
          Join us on Kickstarter!
        </MyButton>
      </div>

      <YouTubeEmbed video="https://www.youtube.com/embed/Jrq3Hp6GXxY?si=P3WYmKPRIqgxzoGa" />

      <div class="strip">
        <h2>Sign up for the Newsletter</h2>
        <div class="section-content">
          <p class="inverted">
            Sign up for our newsletter if you want to stay up to date when we release new
            adventures. Occassionally you will also receive free in-game bonus items and other
            goodies.
          </p>
          <NewsletterSignupForm />
        </div>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../../layouts/Main.vue";
import MainFooter from "../../components/MainFooter.vue";
import TopMenu from "../../components/TopMenu.vue";
import NewsletterSignupForm from "../../components/NewsletterSignupForm.vue";
import YouTubeEmbed from "../../components/YoutubeEmbed.vue";
import MyBreadcrumbs from "../../components/MyBreadcrumbs.vue";
import MyButton from '@/components/MyButton.vue';

export default {
  name: "DraculaPage",
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    NewsletterSignupForm,
    YouTubeEmbed,
    MyBreadcrumbs,
    MyButton,
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
.text {
  align-items: flex-start;
}
.logo {
  padding: 12px;
  max-width: 60%;
  height: auto;
  object-fit: scale-down;
}
.image {
  max-height: 800px;
  padding: 20px;
}

h1 {
  color: black;
}

.strip {
  background-color: #672a66;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
}

.kickstarter-strip {
  background-color: #4a443c;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
}

.strip > h1,
h2 {
  color: white;
}
</style>
