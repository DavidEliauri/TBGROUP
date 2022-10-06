<template>
  <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :slideChange="slideChange"
      :freeMode="true"
      :pagination="{
      clickable: true,
    }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide>Slide {{active_index}} 1</swiper-slide>
    <swiper-slide>Slide {{active_index}} 2
    </swiper-slide
    >
    <swiper-slide>Slide {{active_index}} 3</swiper-slide>
    <swiper-slide>Slide {{active_index}} 4
    </swiper-slide
    >
    <swiper-slide>Slide {{active_index}} 5</swiper-slide>
    <swiper-slide>Slide {{active_index}} 6
    </swiper-slide
    >
    <swiper-slide>Slide {{active_index}} 7</swiper-slide>
    <swiper-slide>Slide {{active_index}} 8
    </swiper-slide
    >
    <swiper-slide>Slide {{active_index}} 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import {FreeMode, Pagination} from "swiper";
import {ref, watch} from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const active_index = ref(0);
    const slideChange = (swiper) => active_index.value = swiper.activeIndex;

    watch(active_index, () => {
      console.log("Slide changed");
    })
    return {
      slideChange, active_index,
      modules: [FreeMode, Pagination],
    };
  },
};
</script>
<style lang="scss">

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 100px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
