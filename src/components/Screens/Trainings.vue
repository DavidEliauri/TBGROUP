<template>
  <swiper
      :slidesPerView="'auto'"
      @swiper="swiperInitHandler"
      @slideChange="slideChangeHandler"
      :mousewheel="true"
      :modules="[Mousewheel]"
      class="mySwiper"
  >
    <swiper-slide v-for="(training_item, training_index) in 10" :key="`training-item-${training_index}`" class="card">
      <p class="card__type body">кейс</p>
      <div class="card__content">
        <h2 class="card__content__title" :class="active_index===training_index?'heading_4':'heading_5'">ИСПОЛЬЗОВАНИЕ
          МЕТОДА LEGO
          SERIOUS
          PLAY</h2>
        <div class="card__content__info">
          <div class="card__content__info__nutshell">
            <p class="card__content__info__nutshell__text body">
              Ежегодно обучение в формате mini-MBA по теме “Управление сервисом” проходят 300 самых талантливых
              руководителей Сбербанка.
            </p>
            <div class="card__content__info__nutshell__badges">
              <Badge class="card__content__info__nutshell__badges__item" v-for="(badge, badge_index) in 2">Сбербанк
              </Badge>
            </div>
          </div>
          <img src="@/assets/images/TwoWomans.png" alt="Training image" class="card__content__info__image"/>
        </div>
      </div>
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
    SWIPER_INSTANCE.value.update();
    // SWIPER_INSTANCE.value.destroy(true, true);
    // console.log(SWIPER_INSTANCE.value);
    // SWIPER_INSTANCE.value.init(document.querySelector('.mySwiper'));
  });
});

</script>

<style lang="scss">
.swiper {
  position: relative;
  width: 100%;
  height: 603px;
  transition: 1s !important;
  overflow: visible;
  padding-right: calc(100% - (441px + 820px) / 2 + 100px);
  @media screen and (max-width: $tablet_start) {
    padding-right: calc(100% - (20vw + 50vw) / 2 + 5vw);
  }

  * {
    transition: 1s;
  }
}

.card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  grid-gap: 53px;
  color: $BRIGHT_GREEN_100;
  border: none;
  border-right: 2px solid $BRIGHT_GREEN_100;
  height: 100%;
  padding: 0 20px;
  width: 441px;

  background-color: transparent;

  @media screen and (max-width: $tablet_start) {
    width: 60vw;
  }

  &:first-of-type {
    padding-left: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;

    &__title {
      width: 277px;
      color: inherit;
      margin-top: 5px;
    }

    &__info {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      grid-gap: 0;

      &__image {
        width: 295px;
        height: auto;
        max-height: 310px;
        object-fit: contain;
      }

      &__nutshell {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        grid-gap: 10px;
        width: 0;
        opacity: 0;

        &__text {
          min-width: 262px;
          width: 262px;
        }

        &__badges {
          grid-gap: 2px;
          display: flex;
        }
      }
    }
  }

  &.swiper-slide-active {
    width: 820px;
    transition: 1s;
    @media screen and (max-width: $tablet_start) {
      width: 85vw;
    }
  }

  &.swiper-slide-active & {
    &__content {
      &__title {
        width: 400px;
      }

      &__info {
        grid-gap: 44px;

        &__image {
          display: block;
          width: 378px;
          max-width: 378px;
          height: auto;
          max-height: 390px
        }

        &__nutshell {
          width: 262px;
          opacity: 1;
        }
      }
    }
  }
}
</style>
