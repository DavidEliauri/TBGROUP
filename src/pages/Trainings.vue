<template>
  <main class="page trainings-page">
    <section v-for="training_index in 2" :key="`training-${training_index}`"
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
import {ref} from 'vue';

const active_index = ref(1);
const selectTrainingIndex = training_index => active_index.value = training_index;
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
  min-width: 820px;
  width: 820px;
  max-width: 820px;
  height: 603px;
  border-right: 2px solid $BRIGHT_GREEN_100;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: 10s;

  * {
    transition: 10s;
  }

  &:not(.active) {
    min-width: 441px;
    width: 441px;
    max-width: 441px;
  }

  &:not(.active) & {
    &__header__title {
      width: 277px;
      font-size: 32px;
      line-height: 105%;
      letter-spacing: 0.03em;
    }

    &__content {
      &__main {
        display: none;
      }
    }
  }


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

    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-end;
    grid-gap: 44px;

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
