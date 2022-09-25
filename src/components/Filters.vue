<template>
  <div class="filters__wrapper">
    <div class="filters">
      <div class="filters__main">
        <button class="filters__toggle-button caption_1" @click="toggle">Фильтры
          <CheckArrowButton class="filters__toggle-button__icon" :class="{rotate: !is_filters_open}"/>
        </button>
      </div>
      <div class="filters__content">
        <div class="filters__content__section">
          <p class="filters__content__section__name body">Тематики:</p>
          <div class="filters__content__section__tags">
            <Tag :key="`tag-${index}`" v-for="(item, index) in 6" class="filters__content__tag">Креативность</Tag>
          </div>
        </div>
        <div class="filters__content__section">
          <p class="filters__content__section__name body">Категории:</p>
          <div class="filters__content__section__tags">
            <Tag :key="`tag-${index}`" v-for="(item, index) in 6" class="filters__content__tag">Креативность</Tag>
          </div>
        </div>
      </div>
      <div class="filters__accept">
        <SecondaryButton @click="accept" class="filters__accept__button">Применить</SecondaryButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import SecondaryButton from "@/components/Buttons/Secondary.vue";
import CheckArrowButton from "@/components/Buttons/CheckArrow.vue";
import Tag from "@/components/Buttons/Tag.vue";
import {ref, watch} from 'vue';
import {gsap} from 'gsap';
import COLORS from '@/assets/scss/variables_export.js';

const is_filters_open = ref(false);

const toggle = () => is_filters_open.value = !is_filters_open.value;
const accept = () => is_filters_open.value = false;

watch(is_filters_open, value => {
  if (value) openFiltersAnimation();
  else closeFiltersAnimation();
});

const openFiltersAnimation = () => {
  gsap.to('.filters__content', {
    paddingTop: '40px',
    paddingBottom: '40px',
    height: 'auto',
    duration: 1,
    borderWidth: 1.5,
    ease: 'power3'
  })
  gsap.to('.filters__accept', {
    paddingTop: 40,
    paddingBottom: 48,
    height: 'auto',
    duration: 1,
    borderWidth: 1.5,
    ease: 'power3',
  })
}
const closeFiltersAnimation = () => {
  gsap.to('.filters__content', {padding: '0', height: 0, duration: 1, borderTopWidth: 0, ease: 'power3'})
  gsap.to('.filters__accept', {padding: '0', height: 0, duration: 1, borderTopWidth: 0, ease: 'power3'})
}
</script>
<style lang="scss">
.filters {
  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  width: 100%;
  height: auto;

  > * {
    border-top-style: solid;
    border-top-color: $IVORY_80;
    border-width: 0;
  }

  &__main {
    width: 100%;
    height: 105px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: none;
  }

  &__toggle-button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;

    &__icon {
      margin-left: 13px;
      transition: $TRANSITION * 2;


    }
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    grid-gap: 48px;
    box-sizing: content-box;
    overflow: hidden;
    height: 0;

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      grid-gap: 16px;

      &__tags {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        grid-gap: 8px;
      }
    }
  }

  &__accept {
    height: 0;
    overflow: hidden;
    box-sizing: content-box;
  }
}
</style>
