<template>
  <div class="strip-wrapper">
  </div>
</template>

<script>

export default {
  name: 'TopMenu',

};
</script>

<style scoped>
.strip-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  padding: 20px;
  max-width: 80%;
}
.logo-link {
  display: flex;
  justify-content: center;
}
@media screen and (max-width:980px){
  .logo {
    /* padding-left: 20px; */
    max-width: 80%;
  }
}
</style>
