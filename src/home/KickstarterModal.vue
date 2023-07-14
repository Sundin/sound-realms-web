<template>
  <div class="strip-wrapper">
    <div class="gameTestStrip">
        <h2 class="inverted">Download the free demo adventure now!</h2>
      </div>
  </div>
</template>

<script>

export default {
  name: 'KickstarterModal',
  components: {
  },
};
</script>

<style scoped>
.strip-wrapper {
  width: 100%;
}
.gameTestStrip {
  background-color: #672a66;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gameTestStrip > p,h2 {
  max-width: 960px;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
