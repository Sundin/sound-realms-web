<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <div v-if="user === null">
          <h1>Account</h1>
          <LoginComponent />
        </div>
        <div v-else>
          <h1>My Account</h1>
          <p>Logged in as {{ user.username }}</p>
          <MyButton :click="logout" :disabled="loading">Sign Out</MyButton>
        </div>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/Main.vue";
import MainFooter from "@/components/MainFooter.vue";
import TopMenu from "@/components/TopMenu.vue";
import profileController from "@/profileController";
import LoginComponent from "@/components/LoginComponent.vue";
import MyButton from "@/components/MyButton.vue";

export default {
  name: "AccountPage",
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    LoginComponent,
    MyButton,
  },
  mounted() {
    profileController.getCurrentUser().then((user) => this.$store.commit("setUser", user));
  },
  data() {
    return {
      username: "",
      password: "",
      loading: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async logout() {
      this.$store.commit("setUser", null);
      await profileController.handleSignOut();
    }
  }
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/pergament_background.jpg");
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
h1 {
  color: black;
  max-width: 100%;
}
button {
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
