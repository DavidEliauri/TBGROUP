<template>
  <article class="post-article__wrapper">
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
  display: flex !important;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  color: $IVORY;
  border-radius: 4px;
  padding: 18px 20px 14px 30px;
  grid-gap: 7px;
  @media screen and (max-width: $notebook_start) {
    padding: auto-calculate($notebook_start, $notebook, 18px, 10px) auto-calculate($notebook_start, $notebook, 20px, 10px) auto-calculate($notebook_start, $notebook, 14px, 10px) auto-calculate($notebook_start, $notebook, 30px, 10px);
    grid-gap: auto-calculate($notebook_start, $notebook, 7px, 5px);
  }
  @media screen and (max-width: $notebook) {
    padding: 10px;
  }

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
    @media screen and (max-width: $notebook_start) {
      margin-top: auto-calculate($notebook_start, $phone_start, 21px, 9px);
    }
    @media screen and (max-width: $phone_start) {
      margin-top: 9px;
    }
    color: $GREEN;
  }
}

</style>