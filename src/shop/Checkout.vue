<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <h1>Shopping Cart</h1>
        <div v-if="user === null">
          <LoginComponent />
        </div>
        <div v-else-if="cartIsEmpty">
          <p>No products in shopping cart</p>
          <MyButton href="/shop" class="checkout-button" :disabled="loading"
            >Return to Shop</MyButton
          >
        </div>
        <div v-else>
          <div v-for="product in shoppingCart" :key="product.id">
            <p>{{ product.title }}, {{ product.price }} SEK <span class='clickableIcon' @click="()=>removeFromCart(product)"><font-awesome-icon icon="fa-solid fa-trash"/></span></p>
          </div>
          <p>Total Price: {{ totalPrice }} SEK</p>
          <p>(Logged in as {{ user.username }})</p>
          <MyButton :click="checkout" class="checkout-button" :disabled="loading || cartIsEmpty"
            >Checkout</MyButton
          >
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
  mounted() {
    console.log(`the component is now mounted.`);
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
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },
    cartIsEmpty() {
      return this.$store.state.shoppingCart.length === 0;
    },
    totalPrice() {
      return this.$store.state.shoppingCart.reduce((partialSum, a) => partialSum + a.price, 0);
    },
  },
  methods: {
    async checkout() {
      this.loading = true;
      const response = await fetch(
        "https://6j2f2a91be.execute-api.eu-north-1.amazonaws.com/api/create-checkout-session",
        {
          method: "POST",
        }
      );
      const jsonBody = await response.json();
      const redirectUri = jsonBody.redirect_url;
      console.log(redirectUri);
      window.location.href = redirectUri;
    },
    removeFromCart(product) {
      this.$store.commit('removeFromCart', product);
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

.checkout-button {
  margin: 50px;
}

.clickableIcon {
  cursor: pointer
}
</style>
