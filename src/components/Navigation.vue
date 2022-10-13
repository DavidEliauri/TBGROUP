<template>
  <header class="navigation__wrapper">
    <div class="navigation">
      <div class="navigation__menu">
        <button class='navigation__menu__button link' @click="toggleEmit">Меню</button>
        <nav class="navigation__menu__links">
          <router-link v-for="(route, index) in NAVIGATION_ROUTES" :key="`navigation-link-${index}`"
                       class="navigation__menu__link link" :to="route.path">
            {{ route.name }}
          </router-link>
        </nav>
      </div>
      <PrimaryButton class="navigation__button">Связаться с нами</PrimaryButton>
    </div>
  </header>
</template>
<script setup>
import {computed, ref, watch} from 'vue';
import gsap from 'gsap';

const TRANSITION_TIME = 1.3;
import COLORS from '@/assets/scss/variables_export.js';
import {useRoute} from 'vue-router';
import {routes} from '@/router/router.js';
import PrimaryButton from "@/components/Buttons/Primary.vue";

const is_navigation_menu_open = ref(false);
const open = () => is_navigation_menu_open.value = true
const close = () => is_navigation_menu_open.value = false;

const toggleEmit = () => {
  if (is_navigation_menu_open.value) close(); else open();
}
watch(is_navigation_menu_open,
    is_open_now => {
      if (is_open_now) {
        openMenuAnimation();
        openButtonAnimation();
      } else {
        closeMenuAnimation();
        closeButtonAnimation();
      }
    }
);
const CURRENT_ROUTE = useRoute();
watch(() => CURRENT_ROUTE.path, () => close());
const NAVIGATION_ROUTES = computed(() => routes.map(el => ({name: el.name, path: el.path})))

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
    position: absolute;
    right: 20px;
    top: 21px;
  }
}
</style>
