<template>
  <article class="post theme-post" :class="{'theme-post_green': $props.is_green}">
    <p class="theme-post__pre body">тема</p>
    <div class="theme-post__content">
      <h3 class="theme-post__title heading_5">
        Навыки
        ведения
        переговоров
      </h3>
      <ArrowButton class="theme-post__arrow-button white"/>
    </div>
  </article>
</template>

<script setup>
import ArrowButton from '@/components/Buttons/Arrow.vue';

defineProps({title: {required: true}, is_green: {required: false, default: false}});
</script>

<style lang='scss'>
.theme-post {
  background-color: $BLACK_100;
  color: $IVORY_100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 22px;
  &__content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    grid-gap: 8px;

  }
}
</style>
