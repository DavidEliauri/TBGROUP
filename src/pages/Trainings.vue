<template>
  <main ref='TRAININGS_PAGE' class="page trainings-page">
    <div class="trainings-page__trainings" @wheel.prevent="wheelHandler">
      <section v-for="training_index in 10" :key="`training-${training_index}`"
               :class="{active: training_index===active_index}" class="training">
        <div class="training__header">
          <p class="training__header__pre body">кейс</p>
          <h4 class="training__header__title line-clamp">ИСПОЛЬЗОВАНИЕ МЕТОДА LEGO SERIOUS PLAY</h4>
        </div>

        <div class="training__content">
          <div class="training__content__main">
            <p class="training__content__main__text body">Ежегодно обучение в формате mini-MBA по теме “Управление
              сервисом”
              проходят 300 самых талантливых руководителей Сбербанка.</p>
            <div class="training__content__main__badges">
              <Badge class="training__content__main__badges__badge">Сбербанк</Badge>
              <Badge class="training__content__main__badges__badge">Сбербанк</Badge>
            </div>
          </div>
          <div @mouseup="selectTrainingIndex(training_index)" class="training__content__image__wrapper">
            <img src="@/assets/images/TwoWomans.png" alt="Training main image" class="training__content__image">
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
import Badge from '@/components/Badge.vue';
import {ref, nextTick, onMounted} from 'vue';
import {gsap} from 'gsap';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import ScrollBooster from 'scrollbooster';


gsap.registerPlugin(ScrollToPlugin);

const TRAININGS_PAGE = ref(null);
const active_index = ref(1);
const EASE_NAME = 'power4';
const DURATION_TIME = 1;
let scroll_disabled = false;
const wheelHandler = (event) => {
  if (scroll_disabled) return;
  let x = (event.deltaY || event.deltaX) > 0 ? 150 : -150
  gsap.to('.trainings-page', {scrollTo: {x: TRAININGS_PAGE.value.scrollLeft + x}, ease: 'power2'});
  // const middle_of_page = TRAININGS_PAGE.value.getBoundingClientRect().width / 2;
  // const array_of_elements = Array.from(document.querySelectorAll('.training')).map(el => el.getBoundingClientRect()).map(el => Math.abs(el.x - middle_of_page));
  // selectTrainingIndex(array_of_elements.indexOf(Math.min(...array_of_elements)));
  // TODO: Сделать выбор активного слайда при колесике в зависимости от направления. Типа в зависимости от направления область выбора расширяется и перемещается в нужную сторону.
}
onMounted(() => {
  animateOldTraining('.training:not(.active)', 0);
  animateNewTraining('.training.active', 0);

  new ScrollBooster({
    viewport: document.querySelector('.trainings-page'),
    content: document.querySelector('.trainings-page__trainings'),
    scrollMode: 'native',
  shouldScroll: ()=>true,
    direction:'horizontal'
  })
});
const selectTrainingIndex = training_index => {
  if (active_index.value === training_index) return;
  animateOldTraining();
  active_index.value = training_index;
  nextTick(() => animateNewTraining());
}

function animateOldTraining(training_selector = '.training.active', local_duration_time = DURATION_TIME) {
  gsap.to(training_selector, {
    width: 441,
    ease: EASE_NAME,
    duration: local_duration_time
  })
  gsap.to(`${training_selector} .training__content__image__wrapper`, {
    width: 295,
    maxHeight: 295,
    ease: EASE_NAME,
    duration: local_duration_time
  });
  const title_old_timeline = gsap.timeline();
  title_old_timeline.to(`${training_selector} .training__header__title`, {
    opacity: 0,
    duration: local_duration_time / 2,
  });
  title_old_timeline.to(`${training_selector} .training__header__title`, {
    width: 277,
    maxWidth: 277,
    fontSize: 32,
    lineHeight: '105%',
    letterSpacing: '0.03em',
    duration: 0.0
  });
  title_old_timeline.to(`${training_selector} .training__header__title`, {
    opacity: 1,
    duration: local_duration_time / 2,
  });
  gsap.to(`${training_selector} .training__content__main`, {
    display: 'none',
    width: 0, ease: EASE_NAME, opacity: 0, duration: local_duration_time
  });
}

function animateNewTraining(training_selector = '.training.active', local_duration_time = DURATION_TIME) {
  const training = document.querySelector(training_selector);
  const coordinates_of_scroll = +training.offsetLeft - (TRAININGS_PAGE.value.getBoundingClientRect().width / 2)
  gsap.to(".trainings-page__trainings", {
    scrollTo: {x: coordinates_of_scroll},
    onStart: () => scroll_disabled = true,
    onComplete: () => scroll_disabled = false
  })


  gsap.to(training_selector, {
    width: 820,
    ease: EASE_NAME,
    duration: local_duration_time
  })

  const title_new_timeline = gsap.timeline();
  title_new_timeline.to(`${training_selector} .training__header__title`, {
    opacity: 0,
    duration: local_duration_time / 2,
  });
  title_new_timeline.to(`${training_selector} .training__header__title`, {
    width: 498,
    maxWidth: 498,
    fontSize: 48,
    lineHeight: '100%',
    duration: 0
  });
  title_new_timeline.to(`${training_selector} .training__header__title`, {
    opacity: 1,
    duration: local_duration_time / 2,
  });

  gsap.to(`${training_selector} .training__content__image__wrapper`, {
    width: 378,
    maxHeight: 378,
    ease: EASE_NAME,
    duration: local_duration_time
  });
  gsap.to(`${training_selector} .training__content__main`, {
    display: 'flex',
    width: 'auto',
    ease: EASE_NAME,
    opacity: 1,
    duration: local_duration_time
  })
}
</script>
<style lang="scss">
.trainings-page {

  overflow-x: auto;
  height: 100%;
  width: 100%;
  max-width: 100%;

  &__trainings {
    scroll-behavior: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
}

.training {
  color: $BRIGHT_GREEN_100;
  width: 442px;
  height: 603px;
  border-right: 2px solid $BRIGHT_GREEN_100;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  flex-grow: 0;


  &:first-of-type {
    padding-left: 0;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    &__pre {
      margin-right: 68px;
    }

    &__title {
      line-clamp: 4;
      -webkit-line-clamp: 4;
      width: 498px;
      max-width: 498px;
      font-size: 48px;
      line-height: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-end;
    grid-gap: 40px;

    &__main {
      display: flex;
      flex-direction: column;
      grid-gap: 10px;

      &__text {
        width: 271px;
        max-width: 271px;
      }

      &__badges {
        display: flex;
        grid-gap: 2px;
      }
    }

    &__image {
      &__wrapper {
        width: 378px;
        height: auto;
        max-height: 378px;
        cursor: pointer;
      }

      display: block;
      width: 100%;
      height: auto;
      max-height: 100%;
      object-fit: contain;
    }
  }
}
</style>
