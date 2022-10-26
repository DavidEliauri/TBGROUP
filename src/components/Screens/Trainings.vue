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
        style="overflow:visible"
    >
      <swiper-slide class="trainings-screen__swiper__item" v-for="(training, training_index) in 10">
        <p class="trainings-screen__swiper__item__pre body">кейс</p>
        <div class="trainings-screen__swiper__item__content">
<!--          <h2 class="trainings-screen__swiper__item__title heading_4">1ИСПОЛЬЗОВАНИЕ МЕТОДА LEGO SERIOUS PLAY</h2>-->
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
import {nextTick, onMounted, ref, watch} from "vue";
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

//
// watch(active_index, async (value, previous_value) => {
//   console.log("the value", value);
//   console.log("the previous_value", previous_value);


  // gsap.to(`.trainings-screen__swiper__item:nth-of-type(${value + 1}) .trainings-screen__swiper__item__title`, {
  //   opacity: 0,
  //   duration: .1,
  //   onComplete: () => gsap.to(`.trainings-screen__swiper__item:nth-of-type(${value + 1}) .trainings-screen__swiper__item__title`, {
  //     width: 498,
  //     duration: .5,
  //     onStart: () => {
  //       document.querySelector(`.trainings-screen__swiper__item:nth-of-type(${value + 1}) .trainings-screen__swiper__item__title`).classList.add('heading_4');
  //       document.querySelector(`.trainings-screen__swiper__item:nth-of-type(${value + 1}) .trainings-screen__swiper__item__title`).classList.remove('heading_5');
  //     },
  //     onComplete: () => gsap.to(`.trainings-screen__swiper__item:nth-of-type(${value + 1}) .trainings-screen__swiper__item__title`, {
  //       opacity: 1,
  //       duration: .1
  //     })
  //   })
  // })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // gsap.to(`.trainings-screen__swiper__item:nth-of-type(${previous_value + 1}) .trainings-screen__swiper__item__title`, {
  //   opacity: 0,
  //   duration: .1,
  //   onComplete: () => gsap.to(`.trainings-screen__swiper__item:nth-of-type(${previous_value + 1}) .trainings-screen__swiper__item__title`, {
  //     width: 277,
  //     duration: .5,
  //     onStart: () => {
  //       document.querySelector(`.trainings-screen__swiper__item:nth-of-type(${previous_value + 1}) .trainings-screen__swiper__item__title`).classList.add('heading_5');
  //       document.querySelector(`.trainings-screen__swiper__item:nth-of-type(${previous_value + 1}) .trainings-screen__swiper__item__title`).classList.remove('heading_4');
  //     },
  //     onComplete: () => gsap.to(`.trainings-screen__swiper__item:nth-of-type(${previous_value + 1}) .trainings-screen__swiper__item__title`, {
  //       opacity: 1,
  //       duration: .1
  //     })
  //   })
  // })
// })


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
  *{
    transition: 20s;
  }
  &__swiper {
    padding-right: calc(100% - 441px);
    @media screen and (max-width: 900px) {
      padding-right: 0;
    }
    height: 603px;
    @media screen and (max-width: 900px) {
      height: 523px;
    }
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
      transition: 20s;
      @media screen and (max-width: 900px) {
        grid-gap: 20px;
        flex-direction: column;
      }
      @media screen and (max-width: 705px) {
        padding: 0 10px;
      }

      //*:not(&__title) {
      //  transition: 1s;
      //}

      &:first-of-type {
        padding-left: 0;
      }

      &__title {
        width: 277px;
        max-width: 100%;
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
          visibility: hidden;
          z-index: 5;
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
        @media screen and (max-width: 705px) {
          min-width: 220px;
          width: 220px;
        }
      }

      &__badges {
        display: flex;
        flex-direction: row;
        grid-gap: 2px;
      }

      &.swiper-slide-active {
        width: 820px;
      }

      &.swiper-slide-active & {


        &__main {
          grid-gap: 44px;
          @media screen and (max-width: 900px) {
            grid-gap: 20px;
          }
          @media screen and (max-width: 705px) {
            grid-gap: 5px;
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
            height: 320px;
          }
          @media screen and (max-width: 705px) {
            width: 278px;
            height: 278px;
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