<template>
  <swiper
      slidesPerView="1"
      :speed="1000"
      @swiper="swiperInitHandler"
      @slideChange="slideChangeHandler"
      :mousewheel="true"
      :modules="[Mousewheel]"
      :breakpoints="SWIPER_BREAKPOINTS"
      class="posts-slider"
      v-if="show_swiper"
  >
    <swiper-slide v-for="(post_item, post_index) in 10" :key="`post-item-${post_index}`"
                  class="posts-slider__item">
      <router-link to="#" class="posts-slider__item__container">
        <ArrowButton class="posts-slider__item__arrow-button right green"></ArrowButton>
        <div class="posts-slider__item__content">

          <h3 class="posts-slider__item__title line-clamp">НЕЙРОФИЗИОЛОГИЯ КРЕАТИВНОСТИ </h3>
          <img src="@/assets/images/TwoWomans.png" alt="Posts slider post image" class="posts-slider__item__image">
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import ArrowButton from '@/components/Buttons/Arrow.vue';
import {Swiper, SwiperSlide} from "swiper/vue";
import {Mousewheel} from 'swiper'
import {nextTick, onMounted, ref} from "vue";
import "swiper/css";

const SWIPER_BREAKPOINTS = {
  620: {
    slidesPerView: 'auto'
  }
};

const SWIPER_INSTANCE = ref(null);
const active_index = ref(0);

const swiperInitHandler = swiper => SWIPER_INSTANCE.value = swiper
const slideChangeHandler = swiper => {
  oldAnimation(active_index.value + 1);
  active_index.value = swiper.activeIndex;
  newAnimation(active_index.value + 1);
}



/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
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
@import '@/assets/scss/headings.scss';

.reinit-button {
  margin: 50px 0;
}

.posts-slider {
  width: 100%;
  height: 259px;
  overflow: visible;
  padding-right: calc(100% - 582px);

  &__item {
    height: auto;
    width: 582px;
    border-right: 2px solid $GREEN;

    &__container {
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: $GREEN;
      padding: 0 20px;
      display: flex;
      flex-direction: row;
      grid-gap: 48px;
      @media screen and (max-width: $tablet) {
        grid-gap: 20px;
      }
    }

    &__arrow-button {
      flex-shrink: 0;
      @media screen and (max-width: $tablet) {
        display: none;
      }
    }

    &__content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      grid-gap: 12px;
      overflow: hidden;
    }

    &__title {
      @extend .heading_4;
      word-wrap: break-word;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      line-height: 125%;
    }

    &__image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      @media screen and (max-width: $notebook_start) {
        width: auto-calculate($notebook_start, $tablet, 150px, 75px);
        height: auto-calculate($notebook_start, $tablet, 150px, 75px);
      }
      @media screen and (max-width: $tablet) {
        width: 75px;
        height: 75px;
      }
    }
  }
}
</style>
