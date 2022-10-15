<template>
  <button @click="reinit">Update</button>
  <swiper
      slidesPerView="auto"
      @swiper="swiperInitHandler"
      @slideChange="slideChangeHandler"
      :mousewheel="true"
      :modules="[Mousewheel]"
      class="workers-slider"
  >
    <!--   802, 420 -->
    <swiper-slide v-for="(worker_item, worker_index) in 10" :key="`worker-item-${worker_index}`"
                  class="workers-slider__item">
      Slide {{ worker_index }}
    </swiper-slide>
  </swiper>
</template>
<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Mousewheel} from 'swiper'
import {onMounted, ref} from "vue";
import Badge from '@/components/Badge.vue';
import "swiper/css";

const SWIPER_INSTANCE = ref(null);
const active_index = ref(0);
const swiperInitHandler = swiper => SWIPER_INSTANCE.value = swiper
const slideChangeHandler = swiper => active_index.value = swiper.activeIndex;

onMounted(() => {
  window.addEventListener('resize', () => {
    console.log("resized");
    // SWIPER_INSTANCE.value.destroy(true, true);
    // console.log(SWIPER_INSTANCE.value);
    // SWIPER_INSTANCE.value.init(document.querySelector('.workers-slider'));
  });
});
const reinit = () => {
  console.log('reinit func');
}
</script>

<style lang="scss">
.workers-slider {
  width: 100%;
  height: 521px;

  &__item {
    padding: 0 20px;
    height: 100%;
    border-right: 2px solid $GREEN;
    width: 420px;
    transition: 1s;

    &.swiper-slide-active {
      width: 820px;
    }

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      border: none;
      padding-right: 0;
    }
  }
}
</style>
