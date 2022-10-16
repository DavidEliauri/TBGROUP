<template>
  <div class="buttons" style="display:flex;">
    <button @click="update" class="update-button">Update</button>
    <button @click="updateSize" class="update-button">Update Size</button>
    <button @click="updateSlides" class="update-button">Update Slides</button>
  </div>
  <swiper
      slidesPerView="1"
      :speed="1000"
      @beforeInit="beforeInitHandler"
      @swiper="swiperInitHandler"
      @slideChange="slideChangeHandler"
      :mousewheel="true"
      :modules="[Mousewheel]"
      :breakpoints="SWIPER_BREAKPOINTS"
      class="workers-slider"
      v-if="show_swiper"
  >
    <!--   802, 420 -->
    <swiper-slide v-for="(worker_item, worker_index) in 10" :key="`worker-item-${worker_index}`"
                  class="workers-slider__item">
      Slide {{ worker_index + 1 }}
    </swiper-slide>
  </swiper>
</template>
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

// const beforeInitHandler = swiper => {
//   const first_slide = document.querySelector('.workers-slider__item:first-child');
//   first_slide.classList.add('.swiper-slide-active')
// }

const swiperInitHandler = swiper => SWIPER_INSTANCE.value = swiper
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
.reinit-button {
  margin: 50px 0;
}

.workers-slider {
  width: 100%;
  height: 521px;
  padding-right: calc(100% - 420px);
  overflow: visible;
  background-color: rgba($RED, .1);
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
    background-color: rgba($BLACK, .1);
    padding: 0 20px;
    height: 100%;
    border-right: 2px solid $GREEN;
    width: 420px;
    transition: 1s;

    &.swiper-slide-active {
      width: calc(420px * (802 / 420));
    }

    @media screen and (max-width: $notebook) {
      width: 350px;
      &.swiper-slide-active {
        width: calc(350px * (802 / 420));
      }

    }
    @media screen and (max-width: $tablet) {
      width: 100%;
      &.swiper-slide-active {
        width: calc(350px * (802 / 420));
      }
    }
    @media screen and (max-width: $tablet_start) {
      background-color: red;
    }

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }
}
</style>
