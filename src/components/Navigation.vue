<template>
  <header class="navigation__wrapper">
    <div class="navigation">
      <div class="navigation__menu">
        <button class='navigation__menu__button link' @click="toggleMenu">Меню</button>
        <nav class="navigation__menu__links">
          <router-link class="navigation__menu__link link" to="/">Главная</router-link>
          <router-link class="navigation__menu__link link" to="/trainings">Программы</router-link>
          <router-link class="navigation__menu__link link" to="#">Клиенты</router-link>
          <router-link class="navigation__menu__link link" to="/themes">Тематики</router-link>
          <router-link class="navigation__menu__link link" to="#">Мероприятия</router-link>
          <router-link class="navigation__menu__link link" to="/blog">Блог</router-link>
          <router-link class="navigation__menu__link link" to="#">Команда</router-link>
          <router-link class="navigation__menu__link link" to="/consult">Консультация</router-link>
          <router-link class="navigation__menu__link link" to="/formats">Форматы</router-link>
          <router-link class="navigation__menu__link link" to="/swiper">Тестовая</router-link>
        </nav>
      </div>
      <button class="navigation__button caption_1 uppercase">Связяться с нами</button>
    </div>
  </header>
</template>
<script setup>
import {ref, watch} from 'vue';
import gsap from 'gsap';

const TRANSITION_TIME = 1.3;
import COLORS from '@/assets/scss/variables_export.js';
import {useRoute} from 'vue-router';

const CURRENT_ROUTE = useRoute();

const show_menu = ref(false);
const toggleMenu = () => show_menu.value = !show_menu.value;

import {useGeneralStore} from '@/stores/general.js';

const $general_store = useGeneralStore();

watch(show_menu, is_open_now => {
  if (is_open_now) {
    openMenuAnimation();
    openButtonAnimation();
    $general_store.$patch({is_menu_open: true})
  } else {
    closeMenuAnimation();
    closeButtonAnimation();
    $general_store.$patch({is_menu_open: false})
  }
});

watch(() => CURRENT_ROUTE.path, () => show_menu.value = false);


///////////////////////////////////////
const openMenuAnimation = () => {
  gsap.to('.navigation__menu', {
    width: '100%',
    paddingTop: 30,
    marginTop: 0,
    background: '#2DAB49',
    duration: TRANSITION_TIME,
    ease: 'power3',
  })
  gsap.to('.navigation__menu__button', {
    color: COLORS.IVORY_60,
    ease: 'power3',
    textDecorationColor: `${COLORS.BRIGHT_GREEN_100}00`,
    duration: TRANSITION_TIME,
  })
  gsap.to('.navigation__menu__links', {
    height: 'auto', opacity: 1, paddingBottom: 32, duration: TRANSITION_TIME, ease: 'power3',
  });

}
const closeMenuAnimation = () => {
  gsap.to('.navigation__menu', {
    width: 'auto',
    paddingTop: 0,
    marginTop: 30,
    background: `${COLORS.BRIGHT_GREEN_100}00`,
    duration: TRANSITION_TIME,
    ease: 'power3',
  })
  gsap.to('.navigation__menu__button', {
    color: COLORS.BRIGHT_GREEN_100,
    ease: 'power3',
    textDecorationColor: COLORS.BRIGHT_GREEN_100,
    duration: TRANSITION_TIME,
  })
  gsap.to('.navigation__menu__links', {
    height: 0,
    opacity: 0,
    textDecorationColor: 'rgba(0,0,0,0)',
    paddingBottom: 0,
    duration: TRANSITION_TIME,
    ease: 'power3',
  });
}
///////////////////////////////////////
const openButtonAnimation = () => {
  gsap.to('.navigation__button', {
    backgroundColor: COLORS.IVORY_100,
    color: COLORS.BRIGHT_GREEN_100,
    duration: TRANSITION_TIME,
    ease: 'power3',
  });
}
const closeButtonAnimation = () => {
  gsap.to('.navigation__button', {
    backgroundColor: COLORS.BRIGHT_GREEN_100,
    color: COLORS.IVORY_100,
    duration: TRANSITION_TIME,
    ease: 'power3',
  });
}
///////////////////////////////////////
</script>
<style lang="scss">
@import "@/assets/scss/links.scss";

.navigation {

  &__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 19px 0 0;
    z-index: $navigation_z;
  }

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;

  &__menu {
    width: max-content;
    height: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    box-sizing: content-box;
    margin-top: 30px;
    overflow: hidden;
    border-radius: 2px;

    &__button {
      color: $BRIGHT_GREEN_100;
    }

    &__link {
      color: $IVORY_60;
      transition: $TRANSITION;

      &:hover {
        color: $IVORY_100;
      }
    }


    &__links {
      margin-top: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      grid-gap: 16px;
      height: 0;
      box-sizing: content-box;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $IVORY_100;
    background-color: $BRIGHT_GREEN_100;
    border: none;
    padding: 0 20px;
    height: 48px;
    gap: 10px;
    letter-spacing: 0.1em;
    border-radius: 2px;
    position: absolute;
    right: 20px;
    top: 21px;
  }
}
</style>
