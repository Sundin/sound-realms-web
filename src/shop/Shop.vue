<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <h1>Web Shop</h1>
        <ProductsList/>
        <div v-if="shoppingCart.length > 0">
          <MyButton href="/cart" class="checkout-button">Continue to Checkout</MyButton>
        </div>
        <!-- <div v-if="user===null">
          <LoginComponent/>
        </div>
        <div v-else>
          <p>Logged in as {{ user.username}}</p>
        </div> -->
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
import LoginComponent from './components/LoginComponent.vue';
import ProductsList from './components/ProductsList.vue';
import MyButton from '../components/MyButton.vue';

export default {
  name: 'WebShop',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    LoginComponent,
    ProductsList,
    MyButton,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    shoppingCart() {
      return this.$store.state.shoppingCart;
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
