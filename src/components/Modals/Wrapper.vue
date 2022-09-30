<template>
  <div class="modal">
    <slot class="modal__content"></slot>
  </div>
</template>

<script setup>
import {gsap} from 'gsap';
import {onBeforeUnmount, onMounted} from "vue";

onMounted(() => gsap.fromTo('.modal__content', {transform: 'translateY(100px)', opacity: 0}, {
  transform: 'translateY(0px)',
  ease: 'power4',
  opacity: 1
}))
onBeforeUnmount(() => gsap.fromTo('.modal__content', {transform: 'translateY(0px)', opacity: 1}, {
  transform: 'translateY(-100px)',
  ease: 'power4',
  opacity: 0
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
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>