<template>
  <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :speed="1600"
      :mousewheel="true"
      :modules="[Mousewheel]"
      class="mySwiper"
  >
    <swiper-slide class="section"></swiper-slide>
    <swiper-slide class="section">
      <Card class="card" :key="`card-${0}`" :card="cards[0]"/>
    </swiper-slide>
    <swiper-slide class="section">
      <Card class="card" :key="`card-${1}`" :card="cards[1]"/>
      <Card class="card" :key="`card-${2}`" :card="cards[2]"/>
    </swiper-slide>
    <swiper-slide class="section">
      <Card class="card" :key="`card-${3}`" :card="cards[3]"/>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import Card from '@/components/Card.vue';
import {Swiper, SwiperSlide} from "swiper/vue";
import {Mousewheel} from 'swiper'
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    image: null,
    text: 'Как использовать источники для генерации новых решений?',
    caption: 'Мероприятие'
  },
  {
    image: null,
    text: 'Коучинг как стиль управления',
    caption: 'Мероприятие',
    color: 'green'
  },
  {
    image: null,
    text: 'Как использовать источники для генерации новых решений?',
    caption: 'Бизнес-завтрак',
    color: 'black'
  },
  {
    image: true,
    text: 'Метод морфологического ящика',
    caption: 'Мероприятие'
  }
]
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
  z-index: 1;
  max-width: 1440px;
}

.section {
  width: 100%;
  height: 100vh;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;

  &:nth-child(2) {
    .card {
      position: absolute;
      left: 297px;
      top: 543px;
    }
  }

  &:nth-child(3) {
    .card:nth-child(1) {
      position: absolute;
      left: 56px;
      top: 490px;
    }

    .card:nth-child(2) {
      position: absolute;
      right: 100px;
      top: 208px;
    }
  }

  &:nth-child(4) {
    .card {
      position: absolute;
      right: 233px;
      top: 468px;
    }
  }
}
</style>