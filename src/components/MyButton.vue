
<template>
  <button
    :class="{ invertedButton: inverted, disabledButton: disabled }"
    @click="buttonPressed"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      required: false,
    },
    click: {
      type: Function,
      required: false,
    },
    href: {
      type: String,
      required: false,
    },
    external: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    buttonPressed(event) {
      event.preventDefault();

      if (this.disabled) {
        return;
      }

      if (this.click) {
        this.click();
        return;
      }

      if (this.external) {
        window.open(this.href, '_blank');
        return;
      }

      this.$router.push(this.href);
    },
  },
};
</script>

<style scoped>
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.invertedButton {
  background-color: white;
  color: black;
}

.disabledButton {
  background-color: white;
  color: gray;
  cursor: auto;
}
.disabledButton:hover {
  opacity: 0.8;
  background-color: white;
  color: gray;
}

button:hover {
  opacity: 1;
  background-color: #6a0000;
  color: #a166a0;
}
</style>
