<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <h1>Web Shop</h1>
        <p>Please log in with your Sound Realms account to continue.</p>
        <input v-model="username" placeholder="Username or email address">
        <input v-model="password" placeholder="Password" type="password">
        <button @click="click" v-bind:class="{ invertedButton: inverted }">Sign in</button>

      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import TopMenu from '../components/TopMenu.vue';
import profileController from './profileController';

export default {
  name: 'WebShop',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    click(event) {
      event.preventDefault();

      profileController.signIn(this.username, this.password);
    },
  },
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
  background-color: #a166a0;
  color: white;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: 2px;
  padding: 10px 25px;
  margin: 0px 15px;
  font-family: HamletOrNot, Verdana, Georgia, serif;
  cursor: pointer;
  outline: none;
  opacity: 0.8;
  transition: 0.3s;
}

</style>
