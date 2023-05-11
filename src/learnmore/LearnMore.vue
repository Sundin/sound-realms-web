<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <section>
        <div class="section-content">
          <h1>The story so far</h1>
          <p>
            The idea to create a game like Sound Realms was formed in Oscar Carlquist's head a long,
            long time ago. Back in the mid-nineties Oscar played and cherished solo adventure books
            and solo RPG quests. Since he is a vocalist and worked in music studios and took the
            occasional voice-over assignments, he came to realise the great potential in making real
            audio productions of the adventure books and quests. Adding music and sound effects to a
            capturing voice-over performance he believed would really enhance the adventures that he
            had played over and over again since childhood. Back then the limitations were obvious
            since an adventure would span over more than several audio CDs and the rules and dice
            rolls etc would still have to be done separately with pen and paper. This idea however
            refused to leave Oscar’s head and quite soon came the introduction of MP3 files and the
            internet and the possibilities became slightly more favourable. The dream lived on and
            as smart phones revolutionised our lives Oscar began the quest of fulfilling his old
            dream.
          </p>
          <p>
            In 2013 Oscar acquired his own professional recording studio and began working as a
            sound engineer. One of the bands he came to produce in his studio happened to feature
            Gustav Sundin, a role-playing game obsessed software programmer who Oscar pitched his
            vision for. Gustav really liked the idea. Time passed, children were born, bands went on
            tours and career opportunities were seized but the idea lived in both Oscar's and
            Gustav's heads and in early 2020 in the mist of a world crippling pandemic that killed
            live music Oscar and Gustav found the break they needed to really dive into the plan and
            process of bringing this vision to life.
          </p>
          <p>
            And so the time has come! Oscar's lifelong experience as vocal performer and his sound
            engineering skills combined with Gustav's programming expertise, and the creation of a
            team of illustrators and a composer have incarnated the vison and a demo adventure is
            ready for download!
          </p>

          <img src="../assets/vemhir.png" class="image-large" />
        </div>
      </section>
      <GametestStrip />
      <section>
        <div class="section-content">
          <h1>A platform of audio based games and other audio content</h1>
          <p>
            Our vision is for Sound Realms to in time feature not only Varghand Publishing AB’s
            games, but also other RPG publishers works &mdash; digitalised and audio based in the
            Sound Realms format. We would also love to publish Fantasy and Sci-fi audio books and
            other Fantasy, Sci-Fi or RPG based audio content, making Sound Realms the natural place
            to turn to if you wish to listen to anything related to these topics. We have a grand
            vision and we hope you will see it incarnate together with us and help us develop it and
            see it progress with the help of your feedback.
          </p>

          <img src="../assets/skelett_sam.png" class="image-large" />
        </div>
      </section>
      <KickstarterStrip />
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import GametestStrip from '../components/GametestStrip.vue';
import TopMenu from '../components/TopMenu.vue';
import KickstarterStrip from '../components/KickstarterStrip.vue';

export default {
  name: 'LearnMorePage',
  components: {
    MainLayout,
    MainFooter,
    GametestStrip,
    TopMenu,
    KickstarterStrip,
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
</style>
