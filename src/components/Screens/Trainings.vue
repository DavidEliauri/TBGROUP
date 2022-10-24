<template>
  <div class="screen trainings-screen wrapper-padding wrapper-maxwidth">
    <swiper
        slidesPerView="1"
        :speed="1000"
        @swiper="swiperInitHandler"
        @slideChange="slideChangeHandler"
        :mousewheel="true"
        :modules="[Mousewheel]"
        :breakpoints="SWIPER_BREAKPOINTS"
        class="trainings-screen__swiper"
        v-if="show_swiper"
    >
      <swiper-slide class="trainings-screen__swiper__item" v-for="(training, training_index) in 10">
        <p class="trainings-screen__swiper__item__pre body">кейс</p>
        <div class="trainings-screen__swiper__item__content">
          <h2 class="trainings-screen__swiper__item__title heading_4">ИСПОЛЬЗОВАНИЕ МЕТОДА LEGO SERIOUS PLAY</h2>
          <div class="trainings-screen__swiper__item__main">
            <div class="trainings-screen__swiper__item__main__column">
              <p class="trainings-screen__swiper__item__text body">
                Ежегодно обучение в формате mini-MBA по теме “Управление сервисом” проходят 300 самых талантливых
                руководителей Сбербанка.
              </p>
              <div class="trainings-screen__swiper__item__badges">
                <Badge class="trainings-screen__swiper__item__badges__item" v-for="(bagde, badge_index) in 2">
                  Сбербанк
                </Badge>
              </div>
            </div>
            <img src="@/assets/images/TwoWomans.png" alt="Training image" class="trainings-screen__swiper__item__image">
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
import {Mousewheel} from 'swiper';
import {nextTick, onMounted, ref} from "vue";
import Badge from '@/components/Badge.vue';

const SWIPER_INSTANCE = ref(null);
const active_index = ref(0);

import {gsap} from 'gsap';

const SWIPER_BREAKPOINTS = {
  900: {
    slidesPerView: 'auto',
  }
};


const swiperInitHandler = swiper => SWIPER_INSTANCE.value = swiper;
const slideChangeHandler = swiper => active_index.value = swiper.activeIndex;


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
.trainings-screen {
  border: 2px solid red;

  &__swiper {
    overflow: visible;
    padding-right: calc(100% - 441px);
    @media screen and (max-width: 900px) {
      padding-right: 0;
    }
    height: 603px;
    width: 100%;

    &__item {
      height: 100%;
      border-right: 2px solid $GREEN;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      color: $GREEN;
      grid-gap: 68px;
      width: 441px;
      transition: 1s;
      @media screen and (max-width: 900px) {
        grid-gap: 20px;
        flex-direction: column;
      }
      * {
        transition: 1s;
      }

      &:first-of-type {
        padding-left: 0;
      }

      &__title {
        width: 277px;
        font-size: 32px;

      }

      &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
      }

      &__main {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        grid-gap: 0;
        width: 100%;

        &__column {
          width: 0;
          display: flex;
          flex-direction: column;
          grid-gap: 10px;
          opacity: 0;
          background-color: red !important;
          visibility: hidden;

        }
      }

      &__image {
        display: block;
        height: auto;
        object-fit: contain;
        width: 278px;
        max-height: 278px;
      }

      &__text {
        min-width: 271px;
        width: 271px;
      }

      &__badges {
        display: flex;
        flex-direction: row;
        grid-gap: 2px;
      }

      &.swiper-slide-active {
        background-color: red !important;
        width: 820px;
      }

      &.swiper-slide-active & {
        &__title {
          width: 500px;
          font-size: 48px;

        }

        &__main {
          grid-gap: 44px;
          @media screen and (max-width: 900px) {
            grid-gap: 20px;
          }

          &__column {
            visibility: visible;
            opacity: 1;
          }
        }

        &__image {
          width: 378px;
          max-height: 378px;
          @media screen and (max-width: $notebook) {
            width: 320px;
            height:320px;
          }
        }
      }

      @media screen and (max-width: 850px) {
        width: auto;
      }
    }
  }
}
</style>