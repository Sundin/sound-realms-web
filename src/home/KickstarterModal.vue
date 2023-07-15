<template>
  <div>
    <div class="modal">
      <p>Hello</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import style from './style';

export default defineComponent({
  setup() {
    return {
      style,
    };
  },
});
</script>
