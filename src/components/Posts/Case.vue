<template>
  <article class="post case-post">
    <p class="case-post__pre body">кейс</p>
    <div class="case-post__content">
      <h3 class="case-post__title heading_6 line-clamp">
        Навыки
        ведения
        переговоров
      </h3>
      <img src="@/assets/images/TwoWomans.png" alt="Case post image" class="case-post__image">
    </div>
  </article>
</template>

<script setup>
defineProps({title: {required: true}});
</script>

<style lang='scss'>
.case-post {
  background-color: $IVORY;
  color: $BLACK;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 46px;
  @media screen and (max-width: $notebook) {
    grid-gap: 25px;
  }

  &__title {
    -webkit-line-clamp: 3;
    line-clamp: 3;
    line-height: initial;

  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    grid-gap: 64px;

  }

  &__image {
    width: 100%;
    object-fit: contain;
    height: auto;
    max-height: 275px;
  }
}
</style>
