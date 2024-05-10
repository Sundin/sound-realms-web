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
                title: 'Job Openings',
              },
            ]"
          />
          <h1>Job Openings</h1>
          <p>We are hiring!</p>
          <p>
            Wouldn't it be great to join the Sound Realms team and help us make Sound Realms into
            the number one platform for all fantasy, sci-fi and horror audio content? To apply for
            any job opening, just send us an email at
            <a href="mailto:dm@sound-realms.com">dm@sound-realms.com</a>!
          </p>
          <h2>Head of Sales</h2>
          <p>
            We seek an ambitious and driven person to fill the role as our Head of Sales. In this
            role, you will lead our sales and marketing team with the goal of driving revenue growth
            and bringing Sound Realms to the masses. As Head of Sales, you are expected to be in
            charge of all marketing activities, including campaigns and product launches, as well as
            cultivating the relationship between Sound Realms and our customers. This is a unique
            opportunity to shape brand and voice of Sound Realms in a very exciting stage of our
            growth journey. Sounds interesting? Apply now by sending an email to
            <a href="mailto:dm@sound-realms.com">dm@sound-realms.com</a>!
          </p>
          <h2>Content Creator</h2>
          <p>
            As a Content Creator at Sound Realms, you will play a pivotal role in crafting engaging
            and valuable content that resonates with our target audience. From brainstorming fresh
            ideas to executing marketing strategies, you'll have the opportunity to showcase your
            creativity and contribute to our Sound Realms's growth and success. The main
            responsibility of the job is to produce content for publication on social media, our
            newsletter email, the web site, and more. This primarily involves writing texts and
            producing content plans (so a good fluency with the English language is a must), but
            basic graphical skills for producing graphical (and/or video) content is a plus. No
            other previous experience is required as we value ambition and passion over past
            results. Sounds interesting? Apply now by sending an email to
            <a href="mailto:dm@sound-realms.com">dm@sound-realms.com</a>!
          </p>
          <br>
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
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  name: "JobsPage",
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
