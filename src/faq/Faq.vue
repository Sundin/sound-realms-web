<template>
  <main-layout>
    <div class="content">
      <TopMenu />

      <section>
        <MyBreadcrumbs
          :breadcrumbs="[
            {
              title: 'Sound Realms',
              link: '/',
            },
            {
              title: 'FAQ',
            },
          ]"
        />
        <div class="section-content">
          <h1>What is Sound Realms?</h1>

          <p>
            Sound Realms is a platform for interactive audio adventures from the Swedish game
            publisher Varghand Publishing AB. United by a passion for old school RPGs, we set out in
            2020 to craft a new way of enjoying solo adventures. We have since developed a
            smartphone application for iOS and Android which enables you to experience captivating
            solo adventures. What makes Sound Realms stand out from other RPG apps on the market is
            the fact (as implied by the name Sound Realms) that all our games are audio-based. A
            professional voice-over actor acts as your Dungeon Master and takes you through
            dangerous dungeons and mysterious temples, backed by a cinematic musical score and top
            of the line sound effects. All this is presented in a design that makes you instantly
            remember your old solo adventure books, complete with beautiful original illustrations
            and artwork. In time, Sound Realms will be expanded to include not only fantasy, but
            also scifi, horror, and post-apocalyptic games.
          </p>
          <img src="../assets/skull_and_scroll.png" class="image-small" />

          <h1>What is Mace & Magic?</h1>
          <p>
            Mace & Magic is one of Sound Realms’ own series of RPG audio solo adventures. The genre
            is dark fantasy and is set in the “Forsaken Lands of Mihr”, a medieval, more or less
            traditional fantasy world that has been struck by “the Magiklysm”. The Magiklysm was an
            apocalyptic event caused by a war between two guilds of rival sorcerers that has
            completely transformed the world of Mihr into a treacherous and chaotic realm. The
            Magiklysm opened gates to other planes and invoked outerworldly beings and monsters,
            that compete with dragons and more traditional fantasy adversaries. The surviving races
            and nations of Mihr built a fortified city called Decagonia, and this is the center of
            the current civilisation. Surrounding it is only peril and the opportunity for
            adventure! With the Forsaken Lands of Mihr we aim to create a world where more or less
            anything can happen, where the emphasis lies on mysteries and the unique rather than
            orthodox fantasy encounters and events.
          </p>

          <p>
            Curious to discover more about the world of Mihr? Download the demo adventure's free
            <a
              href="https://www.drivethrurpg.com/product/385247/Sound-Realms-Mace--Magic-Demo-Adventure-Companion-PDF"
              target="_blank"
              >companion pdf</a
            >
            from DriveThruRPG to learn about the history, peoples and creatures of Mihr.
          </p>

          <img src="../assets/chain_and_balls.png" class="image-small" />
        </div>
      </section>
      <GametestStrip />
      <section>
        <div class="section-content">
          <h1>Why a digital game?</h1>
          <p>
            To digitalise solo RPG rules comes with many advantages. A digital application offers
            far less limitations than a book. We aim to create the adventures so they offer a
            different experience in as many ways possible every time played so they can be replayed
            several times. In time the app will also contain numerous side quests, vast lists of
            treasure and equipment and enormous bestiaries ready to be randomised into the
            adventures using any number of modifications. The team puts a lot of focus into
            exploring in what ways we can develop the app and the take advantage of the fact that it
            is a digital product. The suspense of the voice-overs is unparalleled as they can be
            carefully planned and designed, we also have the option of retakes until we achieve
            perfection. The sound effects and music are also introduced with the exact right timing
            to create the most captivating and dramatic experience possible.
          </p>

          <img src="../assets/vemhir.png" class="image-large" />

          <h1>Who are you?</h1>

          <p>
            Sound Realms is crafted by the Swedish games publisher Varghand Publishing AB. The
            company is being led by Oscar Carlquist and Gustav Sundin, two heavy metal-loving, old
            school RPG fanatics. Learn more about us as well as Sound Realms' history and future to
            come
            <a href="/learn-more">here</a>.
          </p>

          <img src="../assets/skelett_sam.png" class="image-medium" />
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
          <NewsletterSignupForm />
        </div>
      </div>

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import GametestStrip from "../components/GametestStrip.vue";
import TopMenu from "../components/TopMenu.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";
import NewsletterSignupForm from "../components/NewsletterSignupForm.vue";

export default {
  name: "FaqPage",
  components: {
    MainLayout,
    MainFooter,
    GametestStrip,
    TopMenu,
    MyBreadcrumbs,
    NewsletterSignupForm,
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

.strip {
  background-color: #672a66;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.strip > h1,
h2 {
  color: white;
}
</style>
