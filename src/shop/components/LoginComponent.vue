<template>
  <main-layout>
    <div class="content">
      <p>Please log in with your Sound Realms account to continue.</p>
      <p>This is the same account as you use in the Sound Realms app.</p>
      <input v-model="username" placeholder="Username or email address" />
      <input v-model="password" placeholder="Password" type="password" @keyup.enter="login()"  />
      <MyButton :click="login">Sign In</MyButton>
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
    async login() {
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
input {
  min-width: 300px;
  min-height: 25px;
  margin: 10px;
}
button {
  margin: 30px;
}
</style>
