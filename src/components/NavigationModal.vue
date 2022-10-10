<template>
  <header class="modal-navigation">
    <SmallLogo :class="`modal-navigation__logo ${logo_color}`"/>
    <CloseButton :class="`modal-navigation__close-button ${close_color}`" @click="close"/>
  </header>
</template>

<script setup>
import CloseButton from '@/components/Buttons/Close.vue';
import SmallLogo from "@/components/SmallLogo.vue";

defineProps({
  logo_color: {
    required: false,
    default: null
  },
  close_color: {
    required: false,
    default: null
  }
})
defineEmits(['close'])
</script>

<style lang='scss'>
.modal-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>