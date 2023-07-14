<template>
  <div>
    <widget-container-modal />
    <router-view />
  </div>
</template>
<script>
import { container } from 'jenesius-vue-modal';

export default {
  components: { WidgetContainerModal: container },
  name: 'App',
};
</script>
