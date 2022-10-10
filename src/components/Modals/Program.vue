<template>
  <div class="modal__content program-modal">
    <Navigation main="false"/>
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
</script>

<style lang='scss'>
.program-modal {
  width: 100%;
  height: 100%;
  margin: 28px !important;
  max-width: calc(100% - 28px * 2);
  background-color: $IVORY_100;
}
</style>