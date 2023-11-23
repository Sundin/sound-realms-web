<template>
  <main-layout>
    <div class="content">
      <div class="grid-container">
        <div v-for="(product) in products" :key="product.title" class="productCard">
          <img :src="getImageUrl(product)" :alt="product.title" />
          <p class="cardHeader">{{product.title}}</p>
          <p class="cardText"> (Pre-Order)</p>
          <p class="center-me cardPrice">{{product.price}} SEK</p>
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
          image: '/images/fod-funded.jpg',
          title: 'Lone Wolf: The Fortress of Death',
          price: 150,
          description: 'Pre-Order',
          id: 'fod-pre-order',
        },
        {
          image: '/images/fist-square.jpg',
          title: 'Steve Jackson\'s F.I.S.T.',
          price: 150,
          description: 'Pre-Order',
          id: 'fist-pre-order',
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    getImageUrl(product) {
      return new URL(product['image'], import.meta.url);
    }
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
.productCard {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 15px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.productCard .cardText {
  text-align: center;
}
.productCard .cardHeader {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
  font-weight: bold;
}
.productCard .cardPrice {
  text-align: center;
  font-size: 70%;
}
.productCard:hover{
  background: #eeeeee;
}

.productCard img {
  border-radius: 10px;
}
</style>
