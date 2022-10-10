<template>
  <div class="modal">
    <slot class="modal__content"></slot>
  </div>
</template>

<script setup>
import {gsap} from 'gsap';
import {onBeforeUnmount, onMounted} from "vue";

onMounted(() => gsap.fromTo('.modal__content', {transform: 'scale(0.8)', opacity: 0}, {
  transform: 'scale(1)',
  ease: 'power4',
  opacity: 1,
  duration: 1,
}))
onBeforeUnmount(() => gsap.fromTo('.modal__content', {transform: 'scale(1)', opacity: 1}, {
  transform: 'scale(0.8)',
  ease: 'power4',
  opacity: 0,
  duration: .5,
}))
</script>

<style lang='scss'>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: $modal_z;
}
</style>