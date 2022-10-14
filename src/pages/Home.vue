<template>
  <main class="page home-page wrapper-maxwidth wrapper-padding">
    <TrainingsScreen class="trainings-screen screen"/>
<!--    <MainScreen class="screen"/>-->
  </main>
</template>
<script setup>
import MainScreen from '@/components/Screens/Main.vue';
import TrainingsScreen from '@/components/Screens/Trainings.vue';
</script>

<style lang="scss">
.home-page{
  width:100%;
  margin: 0;
}
</style>