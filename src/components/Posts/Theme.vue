<template>
  <article class="post theme-post" :class="{'theme-post_green': $props.is_green}">
    <p class="theme-post__pre">тема</p>
    <div class="theme-post__content">
      <h2 class="theme-post__title">
        Навыки
        ведения
        переговоров
      </h2>
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
}
</style>
