<template>
  <main-layout>
    <div class="content">
      <p>Please log in with your Sound Realms account to continue.</p>
      <input v-model="username" placeholder="Username or email address" />
      <input v-model="password" placeholder="Password" type="password" />
      <MyButton :click="click">Sign In</MyButton>
    </div>
  </main-layout>
</template>

<script>
import profileController from '../profileController';
import MyButton from '../../components/MyButton.vue';

export default {
  name: 'LoginComponent',
  components: {
    MyButton,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async click() {
      const user = await profileController.signIn(this.username, this.password);
      this.$store.commit('setUser', user);
    },
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
