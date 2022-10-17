<template>
  <article class="post-article__wrapper" v-for="item in 3">
    <router-link to="#" class="post-article">
      <p class="post-article__title">Источник: источник</p>
      <img src="@/assets/images/sidebar-image.png" alt="Theme modal sidebar image"
           class="post-article__image">
    </router-link>
    <p class="post-article__image-name body">Иллюстрация 1</p>
  </article>
</template>

<script setup>
</script>

<style lang='scss'>
@import "@/assets/scss/adaptive_fonts.scss";
.post-article {
  width: 100%;
  max-width: 100%;
  background-color: $BLACK;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  color: $IVORY;
  border-radius: 4px;
  padding: 18px 20px 14px 30px;
  grid-gap: 7px;

  &__title {
    width: 100%;
    font-family: 'Stratos LC Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    @extend .adaptive_14px;

    line-height: 110%;
  }

  &__image-name {
    margin-top: 21px;
    color: $GREEN;
  }
}

</style>