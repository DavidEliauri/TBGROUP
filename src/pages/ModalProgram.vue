<template>
  <main class="modal-program-page page">
  <button type="button" @click="show_program_modal = true">Открыть модалку программы</button>
  <ModalWrapper v-if="show_program_modal">
    <ProgramModal class="modal__content"/>
  </ModalWrapper>
  </main>
</template>

<script setup>
import {ref} from 'vue';
import ModalWrapper from '@/components/Modals/Wrapper.vue';
import ProgramModal from '@/components/Modals/Program.vue';

const show_program_modal = ref(true);
</script>

<style lang='scss'>

</style>