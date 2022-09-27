<template>
  <main class="page trainings-page">
    <section v-for="training_index in 5" :key="`training-${training_index}`"
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
        <div @click="selectTrainingIndex(training_index)" class="training__content__image__wrapper">
          <img src="@/assets/images/TwoWomans.png" alt="Training main image" class="training__content__image">
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import Badge from '@/components/Badge.vue';
import {ref, nextTick, onMounted, watch} from 'vue';
import {gsap} from 'gsap';

const active_index = ref(1);

onMounted(()=>console.log("mounted"));
// watch(()=>)



const selectTrainingIndex = training_index => {
  if (active_index.value === training_index) return;
  animateOldTraining();
  active_index.value = training_index;
  nextTick(() => animateNewTraining());
}

const EASE_NAME = 'power4';
const DURATION_TIME = 1;

function animateOldTraining() {
  gsap.to('.training.active', {
    width: 441,
    ease: EASE_NAME,
    duration: DURATION_TIME
  })
  gsap.to('.training.active .training__content__image__wrapper', {
    width: 295,
    maxHeight: 295,
    ease: EASE_NAME,
    duration: DURATION_TIME
  });
  const title_old_timeline = gsap.timeline();
  title_old_timeline.to('.training.active .training__header__title', {
    opacity: 0,
    duration: DURATION_TIME / 2,
  });
  title_old_timeline.to('.training.active .training__header__title', {
    width: 277,
    maxWidth: 277,
    fontSize: 32,
    lineHeight: '105%',
    letterSpacing: '0.03em',
    duration: 0.0
  });
  title_old_timeline.to('.training.active .training__header__title', {
    opacity: 1,
    duration: DURATION_TIME / 2,
  });
  gsap.to('.training.active .training__content__main', {
    display: 'none',
    width: 0, ease: EASE_NAME, opacity: 0, duration: DURATION_TIME
  });
}

function animateNewTraining() {
  gsap.to('.training.active', {
    width: 820,
    ease: EASE_NAME,
    duration: DURATION_TIME
  })

  const title_new_timeline = gsap.timeline();
  title_new_timeline.to('.training.active .training__header__title', {
    opacity: 0,
    duration: DURATION_TIME / 2,
  });
  title_new_timeline.to('.training.active .training__header__title', {
    width: 498,
    maxWidth: 498,
    fontSize: 48,
    lineHeight: '100%',
    duration: 0
  });
  title_new_timeline.to('.training.active .training__header__title', {
    opacity: 1,
    duration: DURATION_TIME / 2,
  });


  gsap.to('.training.active .training__content__image__wrapper', {
    width: 378,
    maxHeight: 378,
    ease: EASE_NAME,
    duration: DURATION_TIME
  });
  gsap.to('.training.active .training__content__main', {
    display: 'flex',
    width: 'auto',
    ease: EASE_NAME,
    opacity: 1,
    duration: DURATION_TIME
  });
}


</script>
<style lang="scss">
.trainings-page {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  height: 100%;
  width: 100%;
  max-width: 100%;
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
