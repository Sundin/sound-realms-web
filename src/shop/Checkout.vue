<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <h1>Shopping Cart</h1>
        <div v-if="user === null">
          <LoginComponent />
        </div>
        <div v-else>
          <div v-for="product in shoppingCart" :key="product.title">
            <p>{{ product.title }}, {{ product.price }} SEK</p>
          </div>
          <p>Total Price: {{ totalPrice }} SEK</p>
          <p>(Logged in as {{ user.username }})</p>
          <MyButton :click="checkout" class="checkout-button">Checkout</MyButton>
        </div>
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
      password: "",
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
    async checkout() {
      const response = await fetch("https://6j2f2a91be.execute-api.eu-north-1.amazonaws.com/api/create-checkout-session", {
        method: "POST",
      });
      const jsonBody = await response.json();
      const redirectUri = jsonBody.redirect_url;
      console.log(redirectUri);
      window.location.href = redirectUri;
      //router.push({ path: redirectUri })
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

.checkout-button {
  margin: 50px;
}
</style>
