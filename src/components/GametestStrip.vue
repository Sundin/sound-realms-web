<template>
  <div class="strip-wrapper">
    <div class="gameTestStrip">
        <h2 class="inverted">Become part of the crew &mdash; Join us in game testing!</h2>
        <Button href="/game-testing" style="margin-bottom:30px;">Get Started</Button>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'GametestStrip',
  components: {
    Button,
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
.gameTestStrip > h2 {
  max-width: 60%;
}
</style>
