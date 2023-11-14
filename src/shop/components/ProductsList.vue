<template>
  <main-layout>
    <div class="content">
      <div class="grid-container">
        <div v-for="(product) in products" :key="product.title">
          <img :src="product.image" :alt="product.title" />
          <p>{{product.title}} (Pre-Order)</p>
          <p class="center-me">{{product.price}} SEK</p>
          <MyButton :click="() => addToCart(product)">Add To Cart</MyButton>
        </div>
        <div></div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MyButton from '../../components/MyButton.vue';

export default {
  name: 'ProductsList',
  components: {
    MyButton,
  },
  data() {
    return {
      products: [
        {
          image: '/src/assets/fod/fod-funded.jpg',
          title: 'Lone Wolf: The Fortress of Death',
          price: 150,
          description: 'Pre-Order',
        },
        {
          image: '/src/assets/fod/fod-funded.jpg',
          title: 'Lone Wolf: The Fortress of Death',
          price: 100,
          description: 'Pre-Order',
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      console.log(product.title);
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

.grid-container {
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
}

.text {
  align-items: flex-start;
}
.center-me {
  margin: auto;
}
.product_image {
  max-width: 40%;
  padding-bottom: 30px;
  padding-right: 30px;
}
</style>
