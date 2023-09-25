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
                title: 'Press'
              }
            ]"
          />
          <h1>Press & News</h1>
          <p>
            On this page you will find all press resources for Sound Realms. You are very welcome to
            use any content (text, images, logos, sample sound files and links) from this page when
            featuring Sound Realms in any type of media.
          </p>
          <p>
            If there is anything more that you need, don't hestitate to contact us at
            <a href="mailto:dm@sound-realms.com">dm@sound-realms.com</a>.
          </p>
          <h2>Press Releases</h2>
          <ul>
            <li class="bold">
              September 23, 2023:
              <a href="/press/fod-funded" class="bold">Kickstarter Fully Funded in Under 5 Hours!</a>
            </li>
            <li class="bold">
              September 15, 2023:
              <a href="/press/fod-kickstarter" class="bold">The Fortress of Death Kickstarter</a>
            </li>
          </ul>

          <h2>About Sound Realms</h2>
          <p>
            <i
              >United by a passion for old school RPGs, we set out in 2020 to craft a new way of
              enjoying solo adventures. We have since developed a smartphone application for iOS and
              Android which enables you to play through captivating solo adventures. What makes
              Sound Realms stand out from other RPG apps on the market is the fact (as implied by
              the name Sound Realms) that all our games are audio-based. A professional voice-over
              actor acts as your Dungeon Master and takes you through dangerous dungeons and
              mysterious temples, backed by a cinematic musical score and top of the line sound
              effects.</i
            >
          </p>

          <img src="../assets/skull_and_scroll.png" class="image-small" />

          <h2>Resources</h2>
          <p><a href="https://drive.google.com/drive/folders/1hTI_ZZoC9riZ7roYfONe-3Gz6_-xbBPg?usp=sharing" target="_blank">The Fortress of Death Press Kit</a></p>
          <p><a href="/Sound_Realms_Press_Kit.zip" target="_blank">Mace & Magic Press Kit</a></p>
          <p><a href="/faq">FAQ</a>: Explanations on Sound Realms, Mace & Magic, and more.</p>
          <p><a href="/learn-more">About us</a>: On the team and company behind Sound Realms.</p>
        </div>
      </section>

      <section>
        <div class="section-content">
          <h2>Links</h2>

          <p>Web page: <a href="https://www.sound-realms.com/">www.sound-realms.com</a></p>
          <p>
            Kickstarter:
            <a
              href="https://www.kickstarter.com/projects/varghand/fortress-of-death"
              target="_blank"
              >www.kickstarter.com/projects/varghand/fortress-of-death</a
            >
          </p>
          <p>
            Download free demo:
            <a href="https://www.sound-realms.com/download" target="_blank"
              >www.sound-realms.com/download</a
            >
          </p>
          <p>
            Facebook:
            <a href="https://www.facebook.com/SoundRealms" target="_blank"
              >www.facebook.com/SoundRealms</a
            >
          </p>
          <p>
            Instagram:
            <a href="https://www.instagram.com/soundrealms" target="_blank"
              >www.instagram.com/soundrealms</a
            >
          </p>
          <p>
            Youtube Channel:
            <a href="https://www.youtube.com/channel/UCQAIAb4OXuLgjnzfsprtZLQ" target="_blank"
              >www.youtube.com/channel/UCQAIAb4OXuLgjnzfsprtZLQ</a
            >
          </p>
          <p>
            Commercial video clip for Mace & Magic:
            <a href="https://youtu.be/cgIQ1PiHwmo" target="_blank">https://youtu.be/cgIQ1PiHwmo</a>
          </p>
          <p>
            Introductionary video for The Fortress of Death:
            <a href="https://youtu.be/9waUrmOaVGM" target="_blank">https://youtu.be/9waUrmOaVGM</a>
          </p>


          <h2>Contact</h2>
          <p>
            Feel free to contact us at: <a href="mailto:dm@sound-realms.com">dm@sound-realms.com</a>
          </p>
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
import MyBreadcrumbs from '../components/MyBreadcrumbs.vue';

export default {
  name: 'PresskitPage',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
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

.section-content {
  word-wrap: break-word;
}

h1 {
  margin: 0px;
}

h2 {
  margin-bottom: 0px;
}
</style>
