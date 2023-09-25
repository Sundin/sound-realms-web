<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <section>
        <div class="section-content">
          <MyBreadcrumbs
            :breadcrumbs="[
              {
                title: 'Sound Realms',
                link: '/'
              },
              {
                title: 'Press',
                link: '/press'
              },
              {
                title: 'September 23, 2023'
              }
            ]"
          />
          <h1>The Fortress of Death Kickstarter Fully Funded in Under 5 Hours!</h1>
          <p><i>(September 23, 2023)</i></p>

          <img src="../assets/fod/fod-funded.jpg" class="image" />

          <MyButton
            external="true"
            class="button"
            href="https://drive.google.com/drive/folders/1hTI_ZZoC9riZ7roYfONe-3Gz6_-xbBPg?usp=sharing"
          >
            Download Full Press Kit
          </MyButton>

          <p>
            The Swedish game publisher Varghand Publishing recently launched a Kickstarter campaign
            for "The Fortress of Death", an audio adventure for mobile devices set in Joe Dever's
            world of Lone Wolf, a classic series of gamebooks. The initial monetary goal of the
            Kickstarter was raised in just 5 hours, and a week into the campaign this target has
            been surpassed with more than 300%.
          </p>
          <p>This is what the team behind Sound Realms has to say about the success:</p>
          <p>
            “Wow! We are totally blown away by the awesome response we have received &ndash; thanks so
            much everyone! Now we set our aim at unlocking as many stretch goals as possible, which
            will enable us to make the best audio adaptation of Lone Wolf ever made.”
          </p>
          <p>
            The Fortress of Death is part of the Sound Realms platform, an app for interactive audio
            adventures available on iOS and Android devices.
          </p>

          <h3>About Sound Realms</h3>
          <p>
            Sound Realms is a platform where you will find a range of RPG audio solo adventures, or
            interactive audio books. The adventures are presented by a narrator assuming the role of
            Game Master, backed by original orchestral music and cinematic sound effects.
          </p>
          <p>
            The first full length adventure for the Sound Realms platform will be The Fortress of
            Death, set in the world of Joe Dever's Lone Wolf. The game is inspired by PhoneQuest, a
            for its time groundbreaking type of game that was presented by Joe Dever in 1989. To
            play the game, you dialed a number on your landline telephone. A narrative voice
            presented a story with a selection of choices for you, accompanied by cinematic music
            and sound effects. One of these adventures was called Fortress of Doom. The Fortress of
            Death will be a reenvisioning of Joe Dever's original concept, modernised for
            smartphones and tablets &ndash; by incorporating 360 surround sound and the latest app
            technology &ndash; but still faithful to the original. This new interactive adventure returns
            to the glory days of Lone Wolf and fantasy roleplaying games, promising to be an
            immersive audio game experience. Enter, if you dare, The Fortress of Death!
          </p>
          <h3>About Lone Wolf</h3>
          <p>
            Lone Wolf is a series currently consisting of 31 gamebooks, created by Joe Dever who
            wrote the first 29 books of the series before his son Ben, with help from French author
            Vincent Lazzari, took over writing duty upon his father's death. The first book was
            published in July 1984 and the series has sold more than 12 million copies worldwide.
            The story focuses on the fictional world of Magnamund, where the forces of good and evil
            are fighting for control. The main protagonist is Lone Wolf, last of his caste of
            warrior monks known as the Kai Lords. The book series is written in the second person
            and recounts Lone Wolf's adventures as if the reader is the main character.
          </p>
          <h3>Links</h3>
          <p><a href="https://www.sound-realms.com">https://www.sound-realms.com</a></p>
          <p>
            <a
              href="https://www.kickstarter.com/projects/varghand/fortress-of-death"
              target="_blank"
              >https://www.kickstarter.com/projects/varghand/fortress-of-death</a
            >
          </p>
          <p>
            <a href="https://youtu.be/9waUrmOaVGM" target="_blank">https://youtu.be/9waUrmOaVGM</a>
          </p>

          <p>
            Download Sound Realms for free through Google Play or App Store and begin your adventure
            now:
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest"
              target="_blank"
              >https://play.google.com/store/apps/details?id=com.wolfhand.audioquest</a
            >
          </p>

          <p>
            <a href="https://apps.apple.com/se/app/sound-realms/id1587860372" target="_blank"
              >https://apps.apple.com/se/app/sound-realms/id1587860372</a
            >
          </p>
        </div>
      </section>
      <section>
        <div class="section-content">
          <img src="../assets/fod/stretch-goals.jpg" class="image" />
        </div>
      </section>

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import TopMenu from '../components/TopMenu.vue';
import MyButton from '../components/MyButton.vue';
import MyBreadcrumbs from '../components/MyBreadcrumbs.vue';

export default {
  name: 'PresskitPage',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    MyButton,
    MyBreadcrumbs,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 0px;
}

.image {
  max-width: 80%;
  margin: 10px;
}

.button {
  margin: 30px;
}

.section-content {
  word-wrap: break-word;
}
</style>
