<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <h1>Web Shop</h1>

      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import TopMenu from '../components/TopMenu.vue';

export default {
  name: 'WebShop',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
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

</style>
