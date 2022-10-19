<template>
  <div class="screen theme-description-screen">
    <p class="theme-description-screen__text lead_1">
      В наших программах мы исходим из убеждения,
      что каждый взрослый человек, независимо от
      своего опыта, может прокачать креативное
      мышление. Прямых работающих алгоритмов развития
      креативного мышления не существует. Добиться
      этого можно только комплексным и планомерным
      подходом, развивая в себе целый набор качеств и
      навыков.
    </p>
    <PostsSlider class="theme-description-screen__posts-slider"/>
  </div>
</template>

<script setup>
import PostsSlider from '@/components/Posts/Slider.vue';
</script>

<style lang='scss'>
.theme-description-screen {
  color: $GREEN;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-gap: 94px;
  @media screen and (max-width: $notebook_start) {
    grid-gap: auto-calculate($notebook_start, $tablet, 94px, 47px);
  }
  @media screen and (max-width: $tablet) {
    grid-gap: 40px;
  }
}
</style>