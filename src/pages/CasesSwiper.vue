<template>
  <!--  <button type="button" @click="update">Update</button>-->
  <swiper
      :slidesPerView="'auto'"
      @swiper="swiperInitHandler"
      @slideChange="slideChangeHandler"
      :mousewheel="true"
      :modules="[Mousewheel]"
      class="mySwiper"
  >
    <swiper-slide v-for="(training_item, index) in 10" :key="`training-item-${index}`">
      Training {{ index + 1 }}
    </swiper-slide>
  </swiper>
</template>
<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Mousewheel} from 'swiper'
import {onMounted, ref} from "vue";
import "swiper/css";

const SWIPER_INSTANCE = ref(null);
const active_index = ref(0);
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
];
const swiperInitHandler = swiper => {
  SWIPER_INSTANCE.value = swiper;
}

const slideChangeHandler = swiper => active_index.value = swiper.activeIndex;
// const update = () => SWIPER_INSTANCE.value.update();
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 400px;
  transition: 1s !important;
  padding-left: 100px;
  padding-right: calc(100% - (441px + 818px) / 2 + 100px);
  @media screen and (max-width: $tablet_start) {
    padding-left: 5vw;
    padding-right: calc(100% - (20vw + 50vw) / 2 + 5vw);
  }

  * {
    transition: 1s;
  }
}

.swiper-slide {
  width: 441px;
  @media screen and (max-width: $tablet_start) {
    width: 60vw;
  }
  border: 1px solid black;
  height: 100%;
  transition: 0.6s;

  &-active {
    @media screen and (max-width: $tablet_start) {
      width: 85vw;
    }
    transition: 1s;
    background-color: red;
  }
}
</style>
