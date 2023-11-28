<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <h1>Order Completed</h1>
        <p>Congratulations on securing your pre-order! We appreciate your enthusiasm and look forward to delivering an unforgettable experience when the game is released. Stay tuned for updates, and thank you for being a part of this adventure!</p>
        <MyButton href="/">Return Home</MyButton>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import TopMenu from "../components/TopMenu.vue";
import MyButton from "../components/MyButton.vue";

export default {
  name: "WebShopSuccessPage",
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    MyButton,
  },
  mounted() {
    this.$store.commit("clearCart");
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
    gameTitles() {
      const shoppingCart = this.$store.state.shoppingCart;
      if (shoppingCart.length === 0) {
        return "";
      } else if (shoppingCart.length === 1) {
        return this.$store.state.shoppingCart[0].title;
      } else {
        return " for " + shoppingCart.map(u => u.title).join(' and ');
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

button {
  margin-top: 20px;
  margin-bottom: 50px;
}

</style>
