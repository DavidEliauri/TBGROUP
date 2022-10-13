<template>
  <button class="primary-button caption_1 caption_1_adaptive uppercase">
    <slot></slot>
  </button>
</template>
<script setup>
</script>

<style lang='scss'>
.primary-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $IVORY_100;
  background-color: $BRIGHT_GREEN_100;
  border: none;
  padding: 0 20px;
  height: 48px;
  gap: 10px;
  letter-spacing: 0.1em;
  border-radius: 2px;
  @media screen and (max-width: $notebook_start) {
  }

  @media screen and (max-width: $notebook) {
    padding: 0 17px;
    height: 44px;
  }
  @media screen and (max-width: $tablet) {
    padding: 0 15px;
    height: 40px;
  }
}
</style>