<template>
  <header class="modal-navigation">
    <SmallLogo :class="`modal-navigation__logo ${logo_color}`"/>
    <CloseButton :class="`modal-navigation__close-button ${close_color}`" @click="closeAnyModal"/>
  </header>
</template>

<script setup>
import CloseButton from '@/components/Buttons/Close.vue';
import SmallLogo from "@/components/SmallLogo.vue";
import {closeAnyModal} from "@/logics/modals.js";

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