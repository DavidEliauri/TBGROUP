<template>
  <div class="workers-screen__wrapper">
    <div class="screen workers-screen">
      <swiper
          slidesPerView="1"
          @swiper="swiperInitHandler"
          @slideChange="slideChangeHandler"
          :mousewheel="true"
          :modules="[Mousewheel]"
          :breakpoints="SWIPER_BREAKPOINTS"
          class="workers-screen__slider"
          :allow-touch-move="true"
          v-if="show_swiper"
      >
        <swiper-slide v-for="(worker_item, worker_index) in 10" :key="`worker-item-${worker_index}`"
                      class="workers-screen__slider__item">
          <h3 class="workers-screen__slider__item__title" :class="active_index===worker_index?'heading_4':'heading_5'">
            Workers Slider</h3>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<!--   820, 402 -->

<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Mousewheel} from 'swiper'
import {nextTick, onMounted, ref} from "vue";
import "swiper/css";

const SWIPER_BREAKPOINTS = {
  768: {
    slidesPerView: 'auto',
  }
};

const SWIPER_INSTANCE = ref(null);
const active_index = ref(0);

const swiperInitHandler = swiper => SWIPER_INSTANCE.value = swiper
const slideChangeHandler = swiper => active_index.value = swiper.activeIndex;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let resize_handler_timer = null;
let show_swiper = ref(true);
onMounted(() => window.addEventListener('resize', resizeHandler, {passive: true}));
const resizeHandler = () => {
  clearTimeout(resize_handler_timer);
  resize_handler_timer = setTimeout(() => {
    show_swiper.value = false;
    nextTick(() => {
      show_swiper.value = true;
      nextTick(() => SWIPER_INSTANCE.value.slideTo(active_index.value));
    });
  }, 1000);
}
</script>

<style lang="scss">
.workers-screen {
  //background-color: red;
  &__wrapper {
    overflow: hidden;
    background-color: rgba(red, .3);
    width: 100vw;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  padding-left: 100px;
  max-width: 1440px;

  * {
    transition: .3s !important;
  }

  &__slider {
    background-color: rgba(blue, .3);
    height: 521px;
    padding-right: calc(100% - 402px);
    overflow: visible;
    @media screen and (max-width: $notebook) {
      padding-right: calc(100% - 350px);
    }
    @media screen and (max-width: $tablet) {
      padding-right: 0;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      height: 100%;
      border-right: 2px solid $GREEN;
      width: 402px;
      transition: 1s;

      &__title {
        transition: $TRANSITION;
      }

      &.swiper-slide-active {
        width: calc(402px * (820 / 402));
      }

      @media screen and (max-width: $notebook) {
        width: 350px;
        &.swiper-slide-active {
          width: calc(350px * (820 / 402));
        }
      }

      @media screen and (max-width: $tablet) {
        width: 100%;
        &.swiper-slide-active {
          width: calc(350px * (820 / 402));
        }
      }


      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }
    }
  }
}
</style>
