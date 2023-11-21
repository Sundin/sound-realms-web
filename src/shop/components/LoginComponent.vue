<template>
  <main-layout>
    <div class="content">
      <p>Please log in with your Sound Realms account to continue.</p>
      <p>This is the same account as you use in the Sound Realms app.</p>
      <input v-model="username" placeholder="Username or email address" @keyup.enter="login()" />
      <input v-model="password" placeholder="Password" type="password" @keyup.enter="login()"  />
      <div v-if="error">
        <p class="error-text">{{error}}</p>
      </div>
      <MyButton :click="login" :disabled="loading">Sign In</MyButton>
      <hr/>
      <MyButton href="/shop/forgot-password" :disabled="loading">Forgot Password</MyButton>
      <MyButton href="/shop/create-account" :disabled="loading">Create Account</MyButton>
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
      loading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null;
      this.loading = true;
      try {
        const user = await profileController.signIn(this.username, this.password);
        this.$store.commit('setUser', user);
        this.loading = false;
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    },
    async forgotPassword() {

    },
    async createAccount() {

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
  margin: 10px;
}
.error-text {
  color: #aa0000;
}
</style>
