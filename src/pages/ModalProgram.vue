<template>
  <main class="modal-program-page page">
    <button type="button" @click="openModal('program')">Открыть модалку программы</button>
  </main>
</template>

<script setup>
import {useModalsStore} from "@/stores/modals.js";

const $MODALS_STORE = useModalsStore();

const openModal = modal_name => $MODALS_STORE.$patch({current_modal_object: {name: modal_name}})
</script>

<style lang='scss'>

</style>