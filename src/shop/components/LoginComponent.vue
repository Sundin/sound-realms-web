<template>
  <main-layout>
    <div class="content">
        <p>Please log in with your Sound Realms account to continue.</p>
        <input v-model="username" placeholder="Username or email address">
        <input v-model="password" placeholder="Password" type="password">
        <button @click="click" v-bind:class="{ invertedButton: inverted }">Sign in</button>
    </div>
  </main-layout>
</template>

<script>
import profileController from '../profileController';

export default {
  name: 'LoginComponent',
  components: {
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
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
