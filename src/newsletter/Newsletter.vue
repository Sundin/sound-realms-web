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
              title: 'Newsletter',
            },
          ]"
        />
        <div class="section-content">
          <h1>Sign up for the Newsletter</h1>
          <!-- <p>Sign up for our newsletter and receive a new playable character for the demo adventure as a free bonus.</p> -->
          <NewsletterSignupForm />
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
import NewsletterSignupForm from "../components/NewsletterSignupForm.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  name: "NewsletterPage",
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    NewsletterSignupForm,
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
</style>
