<template>
  <div class="overlay-sections">
    <Card class="overlay-sections__card" :key="`card-${0}`" :card="cards[0]"/>
    <Card class="overlay-sections__card" :key="`card-${1}`" :card="cards[1]"/>
    <Card class="overlay-sections__card" :key="`card-${2}`" :card="cards[2]"/>
    <Card class="overlay-sections__card" :key="`card-${3}`" :card="cards[3]"/>
  </div>
</template>
<script setup>
import Card from '@/components/Card.vue';

const cards = [
  {
    image: null,
    text: 'Как использовать источники для генерации новых решений?',
    caption: 'Мероприятие'
  },
  {
    image: null,
    text: 'Как использовать источники для генерации новых решений?',
    caption: 'Бизнес-завтрак',
    color: 'black'
  },
  {
    image: null,
    text: 'Коучинг как стиль управления',
    caption: 'Мероприятие',
    color: 'green'
  },
  {
    image: true,
    text: 'Метод морфологического ящика',
    caption: 'Мероприятие'
  }
]
</script>

<style lang="scss">
.overlay-sections {
  height: 195vh;
  width: 100%;

  &__card {
    position: absolute;

    &:nth-of-type(1) {
      top: 0;
      left: 5%;
    }

    &:nth-of-type(2) {
      top: calc(80vh);
      right: 0;
    }

    &:nth-of-type(3) {
      top: calc(105vh);
      left: 0;
    }

    &:nth-of-type(4) {
      top: calc(171vh);
      right: 133px;
    }

    @media screen and (max-width: $tablet_end) {
      left: 50%;
      transform: translateX(-50%);
      right: auto;
    }
  }
}
</style>