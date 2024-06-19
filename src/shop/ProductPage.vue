<template>
  <main-layout>
    <div class="content">
      <div class="section-content">
        <MyBreadcrumbs
            :breadcrumbs="[
              {
                title: 'Sound Realms',
                link: '/',
              },
              {
                title: 'Shop',
                link: '/shop',
              },
              {
                title: product.title
              },
            ]"
          />
        <div class="header-row">
          <span />
          <h1>{{ product.title }}</h1>
          <span class="clickableIcon" @click="() => displayCart(product)">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            <div v-if="productsInCart > 0" class="numberCircle">{{ productsInCart }}</div>
          </span>
        </div>
        <p>(Pre-Order)</p>
        <img :src="getImageUrl(product)" :alt="product.title" />
        <p class="bold">
          {{ product.description }}
        </p>
        <p style="white-space: pre-wrap;">
          {{ product.longDescription ? product.longDescription.trim() : "" }}
        </p>
        <p class="cardPrice">{{ product.price }} SEK</p>
        <MyButton :click="() => addToCart(product)"> Add To Cart </MyButton>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import MyButton from "../components/MyButton.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";
import products from "./products";

export default {
  name: "WebShop",
  components: {
    MainLayout,
    MainFooter,
    MyButton,
    MyBreadcrumbs,
  },
  data() {
    return {
      products: products,
    };
  },
  computed: {
    product() {
      return this.products.find((product) => product.id === this.$route.params.id);
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
      window.location.href = "/shop/checkout";
    },
    getImageUrl(product) {
      return new URL(product["image"], import.meta.url);
    },
    addToCart(product) {
      this.$store.commit("addToCart", product);
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
.cardPrice {
  text-align: center;
  font-size: 70%;
}
</style>
