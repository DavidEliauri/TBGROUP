<template>
  <main class="page test-page">
    <button type="button" @click="show_theme_modal = true">Открыть модальное окно</button>
    {{ show_theme_modal }}
    <transition name="opacity-transition">
      <ModalWrapper v-if="show_theme_modal" class="test-page__modal">
        <ThemeModal @close="show_theme_modal = false"/>
      </ModalWrapper>
    </transition>
  </main>

</template>
<script setup>
import ModalWrapper from '@/components/Modals/Wrapper.vue';
import ThemeModal from '@/components/Modals/Theme.vue';
import {ref} from "vue";

const show_theme_modal = ref(false);
</script>
<style lang="scss">

</style>
