<template>
  <div @click.self="closeAnyModal" class="modal">
    <slot class="modal__content"></slot>
  </div>
</template>

<script setup>
import {closeAnyModal} from "@/logics/modals.js";
</script>

<style lang='scss'>

.modal {
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, .3);
  z-index: $modal_z;
  overflow-y: scroll;
}
</style>