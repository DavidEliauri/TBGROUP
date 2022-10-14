<template>
  <main class="page test-page">
    <button type="button" @click="openModal('theme')">Открыть модальное окно</button>
    <TrainingsScreen/>
  </main>
</template>
<script setup>
import {openModal} from "@/logics/modals.js";
import TrainingsScreen from '@/components/Screens/Trainings.vue';
</script>
