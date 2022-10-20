<template>
  <div class="theme-slider-screen">
    <div class="theme-slider-screen__row theme-slider-screen__info-row">
      <h2 class="theme-slider-screen__title heading_3">
        что хотите прокачать?
      </h2>
      <p class="theme-slider-screen__text lead_1">
        Здесь вы видите набор направлений, по которым можно развивать креативное мышление. Эти решения можно применять
        точечно, а можно комбинировать друг с другом в любом порядке.
      </p>
    </div>
    <div class="theme-slider-screen__swiper__wrapper">
      <swiper class="theme-slider-screen__swiper" :speed="300" :freemode="true"
              :modules="[FreeMode]"
              slides-per-view="auto" direction='vertical'>
        <swiper-slide @swiper="swiperInitHandler" @slideChange="slideChangeHandler"
                      class="theme-slider-screen__swiper__item"
                      v-for="({id,title,content},slide_index) in [...slides, ...slides, ...slides, ...slides]">
          <div class="theme-slider-screen__swiper__item__main">
            <p class="theme-slider-screen__swiper__item__title subheader_1">
              {{ title }} {{ slide_index }}
            </p>
            <button @click.prevent='toggleSlide(slide_index+1)' class="theme-slider-screen__swiper__item__show-button">
              <svg class="theme-slider-screen__swiper__item__show-button__icon"
                   width="10"
                   height="10">
                <use xlink:href="@/assets/sprites.svg#plus-small"></use>
              </svg>
            </button>
            <button class="theme-slider-screen__swiper__item__add-toggle-button">Добавить</button>
          </div>
          <div class="theme-slider-screen__swiper__item__content body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam architecto consectetur cum dignissimos
            dolor dolore dolores ducimus eligendi eos laudantium
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode} from 'swiper';
import {reactive, ref} from 'vue';
import {gsap} from 'gsap';
import 'swiper/css';
import 'swiper/css/free-mode';

const slides = reactive([
  {
    id: 1,
    title: 'Личный креативный потенциал',
    content: 'Для прокачки индивидуальной креативности мы обращаемся  к 4 ключевым компонентам. Эти характеристики индивидуальной креативности выделил в своих работах психолог Пол Гилфорд.\n' +
        '\n' +
        'Развивая личную креативность, участники прокачивают:\n' +
        'Продуктивность\n' +
        'Гибкость\n' +
        'Оригинальность\n' +
        'Уровень сложности создаваемых идей'
  },
  {
    id: 2,
    title: 'Личный креативный потенциал',
    content: 'Для прокачки индивидуальной креативности мы обращаемся  к 4 ключевым компонентам. Эти характеристики индивидуальной креативности выделил в своих работах психолог Пол Гилфорд.\n' +
        '\n' +
        'Развивая личную креативность, участники прокачивают:\n' +
        'Продуктивность\n' +
        'Гибкость\n' +
        'Оригинальность\n' +
        'Уровень сложности создаваемых идей'
  },
  {
    id: 3,
    title: 'Личный креативный потенциал',
    content: 'Для прокачки индивидуальной креативности мы обращаемся  к 4 ключевым компонентам. Эти характеристики индивидуальной креативности выделил в своих работах психолог Пол Гилфорд.\n' +
        '\n' +
        'Развивая личную креативность, участники прокачивают:\n' +
        'Продуктивность\n' +
        'Гибкость\n' +
        'Оригинальность\n' +
        'Уровень сложности создаваемых идей'
  },
])
const SWIPER_INSTANCE = ref(null);
const active_index = ref(0);

const swiperInitHandler = swiper => SWIPER_INSTANCE.value = swiper
const slideChangeHandler = swiper => {
  active_index.value = swiper.activeIndex;
}

const toggleSlide = (index) => {
  document.querySelector(`.theme-slider-screen__swiper__item:nth-of-type(${index})`).classList.toggle('open');
  if (!document.querySelector(`.theme-slider-screen__swiper__item:nth-of-type(${index})`).classList.contains('open')) return closeSlide(index);
  openSlide(index);
}

const openSlide = (index) => {
  console.log("open");
  gsap.to(`.theme-slider-screen__swiper__item:nth-of-type(${index}) .theme-slider-screen__swiper__item__show-button`, {
    transform: 'rotate(135deg)', ease: 'bounce',
    duration: 1
  });
  gsap.to(`.theme-slider-screen__swiper__item:nth-of-type(${index}) .theme-slider-screen__swiper__item__content`, {
    height: 'auto', marginTop: 24, ease: 'power3',
  });
}
const closeSlide = (index) => {
  console.log("close");
  gsap.to(`.theme-slider-screen__swiper__item:nth-of-type(${index}) .theme-slider-screen__swiper__item__show-button`, {
    transform: 'rotate(0deg)', ease: 'bounce',
    duration: 1
  });
  gsap.to(`.theme-slider-screen__swiper__item:nth-of-type(${index}) .theme-slider-screen__swiper__item__content`, {
    height: '0', marginTop: 0, ease: 'power3',
  });
}
</script>

<style lang='scss'>
@import '@/assets/scss/adaptive_fonts.scss';

.theme-slider-screen {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: $IVORY;
  background-color: $GREEN;

  * {
    //border: 1px solid black;
  }

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__info-row {
    grid-gap: 21px;
    @media screen and (max-width: $tablet_start) {
      flex-direction: column;
    }
  }

  &__text {
    line-height: 135%;
    @media screen and (max-width: $notebook_start - 50px) {
      line-height: 115%;

    }
  }

  &__swiper {
    height: 313px;
    padding-top: 31px;

    &__wrapper {
      position: relative;
      margin-top: 56px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 31px;
        background: linear-gradient(0deg, rgba($GREEN, 0) 0%, $GREEN 100%);
        z-index: 5;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 31px;
        background: linear-gradient(180deg, rgba($GREEN, 0) 0%, $GREEN 100%);
        z-index: 5;
      }
    }

    &__item {
      padding: 24px 0;
      border-top: 2px solid $IVORY;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;

      &:last-child {
        border-bottom: 2px solid $IVORY;
      }

      &__main {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        grid-gap: 18px;
      }

      &__content {
        width: 500px;
        margin-top: 0;
        height: 0;
        overflow: hidden;
      }

      &__title {
        text-align: left;
        width: calc(505 / 1240 * 100%);
      }

      &__show-button {
        border-radius: 50%;
        border: 2px solid $IVORY;
        background-color: transparent;
        stroke: $IVORY;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__add-toggle-button {
        margin-left: auto;
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-family: 'Stratos LC Regular', sans-serif;
        font-style: normal;
        color: inherit;
        border-bottom: 2px solid $IVORY;
        padding: 0;
        @extend .adaptive_20px;
      }
    }
  }
}
</style>