<template>
    <article class="card">
      <div class="card__image__wrapper card__side">
        <img src="@/assets/images/dog.png" alt="Card image" class="card__image">
      </div>
      <div class="card__content card__side">
        <p class="card__content__caption caption_1">Мероприятие</p>
        <p class="card__content__text subheader_2">Метод морфологического ящика</p>
        <ArrowButton/>
        <CheckArrow/>
      </div>
    </article>
</template>
<script setup>
import ArrowButton from '@/components/Buttons/Arrow.vue';
import CheckArrow from '@/components/CheckArrow.vue';
</script>
<style lang="scss">

.card {
  width: 462px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  grid-gap: 10px;
  border: 1px solid black;

  &__side {
    flex-grow: 1;
    flex-shrink: 0;
    height: 100%;
    border: 1px solid black;
    max-width: calc(50% - 5px);
    overflow: hidden;
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    height: 100%;

    &__caption {
      text-align: center;
    }

    &__text {
      margin: 50px 0 46px;
      flex-grow: 1;
      text-align: center;
    }
  }
}
</style>
