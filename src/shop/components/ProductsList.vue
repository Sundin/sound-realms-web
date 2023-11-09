<template>
  <main-layout>
    <div class="content">
      <div class="row">
        <div v-for="(product) in products" :key="product.title">
          <a href="/maceandmagic" class="dreadhorn_image">
            <img :src="getImageUrl(product.image)" :alt="product.title" />
          </a>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>


export default {
  name: 'ProductsList',
  components: {},
  data() {
    return {
      products: [
        {
          image: 'home/fod-round-funded.png',
          title: 'Lone Wolf: The Fortress of Death',
          price: 100,
          description: 'Pre-Order',
        },
      ],
    };
  },
  methods: {
    getImageUrl(path) {
      return new URL(`../assets/${path}`, import.meta.url).href;
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

button {
  background-color: #a166a0;
  color: white;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: 2px;
  padding: 10px 25px;
  margin: 0px 15px;
  font-family: HamletOrNot, Verdana, Georgia, serif;
  cursor: pointer;
  outline: none;
  opacity: 0.8;
  transition: 0.3s;
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
.dreadhorn_image {
  max-width: 40%;
  padding-bottom: 30px;
  padding-right: 30px;
}
</style>
