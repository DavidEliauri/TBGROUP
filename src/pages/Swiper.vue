<template>
  <main class="page test-page">
    <button type="button" @click="openModal('theme')">Открыть модальное окно</button>
  </main>
</template>
<script setup>
import {openModal} from "@/logics/modals.js";
</script>
