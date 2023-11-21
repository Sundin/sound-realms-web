<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div v-if="step === 'CREATE'" class="section-content">
        <h1>Create Account</h1>
        <input v-model="username" placeholder="Username" @keyup.enter="createAccount()" />
        <input v-model="email" placeholder="Email address" @keyup.enter="createAccount()" />
        <input
          v-model="password"
          placeholder="Password"
          type="password"
          @keyup.enter="createAccount()"
        />
        <div v-if="error">
          <p class="error-text">{{ error }}</p>
        </div>
        <MyButton :click="createAccount" :disabled="loading">Create Account</MyButton>
      </div>
      <div v-if="step === 'CONFIRM'" class="section-content">
        <h1>Confirm Account</h1>
        <p>Almost done! Check your email for a confirmation code, then enter it here:</p>
        <input
          v-model="confirmationCode"
          placeholder="Confirmation Code"
          @keyup.enter="confirmSignup()"
        />
        <div v-if="error">
          <p class="error-text">{{ error }}</p>
        </div>
        <MyButton :click="confirmSignup" :disabled="loading">Create Account</MyButton>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import TopMenu from "../components/TopMenu.vue";
import profileController from "./profileController";
import LoginComponent from "./components/LoginComponent.vue";
import ProductsList from "./components/ProductsList.vue";
import MyButton from "../components/MyButton.vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  name: "WebShop",
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    LoginComponent,
    ProductsList,
    MyButton,
    StripeCheckout,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmationCode: "",
      loading: false,
      error: null,
      step: "CREATE",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },
    totalPrice() {
      return this.$store.state.shoppingCart.reduce((partialSum, a) => partialSum + a.price, 0);
    },
  },
  methods: {
    async createAccount() {
      this.error = null;
      this.loading = true;
      try {
        const user = await profileController.handleSignUp({
          username: this.username,
          password: this.password,
          email: this.email,
        });
        this.loading = false;
        this.error = null;
        if (user !== null) {
          this.step = "CONFIRM";
        }
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    },
    async confirmSignup() {
      this.error = null;
      this.loading = true;
      try {
        await profileController.confirmSignUp({
          username: this.username,
          confirmationCode: this.confirmationCode,
        });
        const user = await profileController.signIn(this.username, this.password);
        this.$store.commit('setUser', user);
        this.loading = false;
        this.error = null;
        this.$router.push('/shop/checkout');
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    }
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
