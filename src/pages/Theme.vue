<template>
  <main class="theme-page page">
    <!--    <SupportScreen class='theme-page__support-screen screen'/>-->
    <!--    <ThemeDescriptionScreen class='theme-page__theme-description-screen wrapper-padding wrapper-maxwidth'/>-->
    <ThemeSliderScreen class="theme-page__theme-slider-screen wrapper-padding wrapper-maxwidth"/>
  </main>
</template>

<script setup>
// import SupportScreen from '@/components/Screens/Support.vue';
// import ThemeDescriptionScreen from '@/components/Screens/ThemeDescription.vue';
import ThemeSliderScreen from '@/components/Screens/ThemesSlider.vue'
</script>

<style lang='scss'>
.theme-page {
  width: 100%;
}
</style>