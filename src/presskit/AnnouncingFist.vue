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
                link: '/',
              },
              {
                title: 'Press',
                link: '/press',
              },
              {
                title: 'December 2, 2023',
              },
            ]"
          />
          <h1>Sound Realms Announces The Return of Steve Jackson's F.I.S.T.</h1>
          <p><i>(December 2, 2023)</i></p>

          <img src="../assets/fist/fist-logo.png" alt="Steve Jackson's F.I.S.T." class="image" />

          <p>
            In 1988 you could pick up your telephone, dial the <strong>F.I.S.T.</strong> number and
            you were immediately connected to a medieval fantasy world of magic, monsters and great
            riches to be plundered. A world where <i>YOU</i> were a heroic adventurer embarking on a
            quest for fame and fortune. <strong>F.I.S.T.</strong> was the first interactive phone
            game ever.
          </p>
          <p>
            The creatures and deadly traps that awaited you in Castle Mammon were brought to life
            with dramatic sound effects and new gaming techniques. You could hear the roar of the
            Flesh Eater as your sword bites, the sizzle of the fireball bursting towards you, the
            chinking of the many gold pieces you could find in the Demon Prince's underground
            dungeon. <i>YOU</i> made the decisions simply by using your telephone.
          </p>
          <p>
            The first <strong>F.I.S.T.</strong> adventure featuring the world of
            <i>Castle Mammon &mdash; Lair of the Demon Prince</i>, created by the fertile mind of
            games master <strong>Steve Jackson</strong> (co-founder of Games Workshop and the
            Fighting Fantasy gamebook series), now returns as it was released in 1988, audio and
            gameplay intact, but adapted for iOS and Android using the
            <strong>Sound Realms</strong> system.
          </p>
          <p><strong>GET READY FOR F.I.S.T., THE RETURN!</strong></p>

          <h3>About Sound Realms</h3>
          <p>
            Sound Realms is a platform where you will find a range of RPG audio solo adventures, or
            interactive audio books. The adventures are presented by a narrator assuming the role of
            Game Master, backed by original orchestral music and cinematic sound effects.
          </p>
          <h3>Links</h3>
          <p><a href="https://www.sound-realms.com">www.sound-realms.com</a></p>

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

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import TopMenu from "../components/TopMenu.vue";
import MyButton from "../components/MyButton.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  name: "PresskitPage",
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
