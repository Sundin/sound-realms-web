<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <img src="../../assets/fod/fod-logo.png" alt="Lone Wolf: Fortress of Death" class="image" />

        <div class="text">
          <p>
            In 1989 the creator of the Lone Wolf adventure book series, Joe Dever, presented a
            ground breaking new kind of interactive game called <i>PhoneQuest</i>. To play the game,
            you dialed a number on your landline telephone. A narrative voice presented a story with
            a selection of choices for you. All of this was accompanied by cinematic music and
            immersive sound effects. One of these adventures was called <i>Fortress of Doom</i>.
          </p>
          <p>
            Now in 2023 the time has come to reenvision Joe Dever's original concept and release a
            game for smartphones and tablets – a new game incorporating 360 surround sound and the
            latest app technology but still faithful to the original. This new interactive adventure
            returns to the glory days of Lone Wolf and fantasy roleplaying games, making it the most
            immersive audio game experience ever.
          </p>
          <p>
            Enter, if you dare, <i><span class="bold">The Fortress of Death!</span></i>
          </p>
        </div>
        <img src="../../assets/fod/death-or-glory.png" class="image" />
      </div>
      <div class="kickstarter-strip">
        <div class="section-content inverted">
        <p>
            Want to help us make <i>The Fortress of Death</i> into reality? Please sign up at our
            <a
              href="https://www.kickstarter.com/projects/varghand/fortress-of-death"
              target="_blank">
              <span class="bold">Kickstarter page</span>
            </a>
            and help us spread the word around. Thank you, it means a lot to us!
          </p>
            <MyButton external=true href="https://www.kickstarter.com/projects/varghand/fortress-of-death">Join us on Kickstarter!</MyButton>
        </div>
      <a href="https://www.kickstarter.com/projects/varghand/fortress-of-death" target="_blank">
        <img src="../../assets/fod/fod_kickstarter.jpg" class="image" />
      </a>
      </div>
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
import MainLayout from '../../layouts/Main.vue';
import MainFooter from '../../components/MainFooter.vue';
import TopMenu from '../../components/TopMenu.vue';
import NewsletterSignupForm from '../../components/NewsletterSignupForm.vue';
import MyButton from '../../components/MyButton.vue';

export default {
  name: 'FortressOfDeath',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    NewsletterSignupForm,
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
