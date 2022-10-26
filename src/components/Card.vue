<template>
  <article class="card" :class="[{'card_with-image':card.image}, 'card_'+card.color||'ivory']">
    <div v-if="card.image" class="card__image__wrapper card__side">
      <img src="@/assets/images/dog.png" alt="Card image" class="card__image" v-if="card.image">
    </div>
    <div class="card__content card__side">
      <p class="card__content__caption caption_1">{{ card.caption }}</p>
      <p class="card__content__text" :class="card.image?'subheader_2':'subheader_1'">{{ card.text }}</p>
      <ArrowButton class="card__content__arrow-button"
                   :class="{white: card.color==='black'||card.color==='green'}"/>
    </div>
  </article>
</template>
<script setup>
import ArrowButton from '@/components/Buttons/Arrow.vue';

const props = defineProps({
  card: {
    required: true
  }
});


</script>
<style lang="scss">
.card {
  width: 462px;
  padding: 32px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  grid-gap: 10px;
  border-radius: 2px;
  background-color: $IVORY;
  max-width: 80%;

  @media screen and (max-width: $notebook_start) {
    padding: auto-calculate($notebook_start, $notebook, 32px, 16px) auto-calculate($notebook_start, $notebook, 24px, 12px);
  }
  @media screen and (max-width: $notebook) {
    padding: 16px 12px;
  }

  &_with-image {
    padding: 24px;
  }

  &_green, &_black {
    color: $IVORY;
  }

  &_green {
    background-color: $GREEN;
  }

  &_black {
    background-color: $BLACK;
  }

  &_with-image & {
    &__side {
      max-width: calc(50% - 5px);
    }

    &__content__text {
      margin: 50px 0 46px;

    }
  }

  &__side {
    flex-grow: 1;
    flex-shrink: 0;
    height: 100%;
    max-width: 100%;
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
      margin: 32px 0 12px;
      @media screen and (max-width: $notebook_start) {
        margin: auto-calculate($notebook_start, $notebook, 32px, 16px) 0 12px;
      }
      @media screen and (max-width: $notebook) {
        margin: 16px 0 10px;
      }
      flex-grow: 1;
      text-align: center;
      word-break: break-word;


    }
  }
}
</style>
