<template>
  <main-layout>
    <div class="content">
      <div class="row">
        <div v-for="(product) in products" :key="product.title">
          <a href="/maceandmagic" class="product_image">
            <img :src="product.image" :alt="product.title" />
          </a>
          <h3>{{product.title}}</h3>
          <p>PRE-ORDER</p>
          <MyButton :click="() => addToCart(product)">Add To Cart</MyButton>
        </div>
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

.row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 960px;
}
.text {
  align-items: flex-start;
}
.product_image {
  max-width: 40%;
  padding-bottom: 30px;
  padding-right: 30px;
}
</style>
