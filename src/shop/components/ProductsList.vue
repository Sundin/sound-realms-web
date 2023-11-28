<template>
  <main-layout>
    <div class="content">
      <div class="grid-container">
        <div v-for="(product) in products" :key="product.title" class="productCard">
          <img :src="getImageUrl(product)" :alt="product.title" />
          <p class="cardHeader">{{product.title}}</p>
          <p class="cardText"> (Pre-Order)</p>
          <p class="cardText"> {{product.description}}</p>
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
          price: 215,
          description: 'An audio adventure for mobile devices, set in Joe Dever\'s world of Lone Wolf for the Sound Realms system.',
          id: 'fod-pre-order',
        },
        {
          image: '/images/fist-square.jpg',
          title: 'Steve Jackson\'s F.I.S.T.',
          price: 215,
          description: 'The original F.I.S.T. adventure, created by the fertile mind of Steve Jackson, now returns as it was released in 1988.',
          id: 'fist-pre-order',
        },
        {
          image: '/images/bundle-shop.png',
          title: 'The Fortress of Death + F.I.S.T. Bundle',
          price: 500,
          description: 'Includes access to all Fortress of Death expansions for 12 months starting from the game\'s release date.',
          id: 'bundle-pre-order',
        },
        {
          image: '/images/fod-funded.jpg',
          title: 'The Fortress of Death Expansions (12 months)',
          price: 110,
          description: 'Access to all expansions for 12 months following the game\'s release.',
          id: 'fod-expansions',
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
@media screen and (max-width:980px){
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width:680px){
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
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
  margin-bottom: 30px;
  border-radius: 15px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.productCard .cardText {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 10px;
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
