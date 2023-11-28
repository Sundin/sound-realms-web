<template>
  <main-layout>
    <div class="content">
      <div class="section-content">
        <div class="header-row">
          <span></span>
          <h1>Web Shop</h1>
          <span class='clickableIcon' @click="()=>displayCart(product)">
            <font-awesome-icon icon="fa-solid fa-cart-shopping"/>
            <div v-if="productsInCart > 0" class="numberCircle">{{productsInCart}}</div>
          </span>
        </div>
        <ProductsList/>
        <div v-if="shoppingCart.length > 0">
          <MyButton href="/shop/checkout" class="checkout-button">Continue to Checkout</MyButton>
        </div>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import ProductsList from './components/ProductsList.vue';
import MyButton from '../components/MyButton.vue';

export default {
  name: 'WebShop',
  components: {
    MainLayout,
    MainFooter,
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
    productsInCart() {
      return this.$store.state.shoppingCart.length;
    },
  },
  methods: {
    displayCart() {
      window.location.href = '/shop/checkout';
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
  margin-top: 50px;
}

.section-content {
  margin-bottom: 50px;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.numberCircle {
    border-radius: 50%;
    width: 13px;
    height: 13px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;

    font: 12px Arial, sans-serif;
}

</style>
