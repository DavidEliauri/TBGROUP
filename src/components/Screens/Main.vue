<template>
  <main class="screen main-screen ">
    <div class="main-screen__logo">
      <div class="main-screen__row">
        <h1 class="heading_1 main-screen__training-text">
          TRAINING
        </h1>
        <svg class="cross" width="140" height="139">
          <use xlink:href="@/assets/sprites.svg#cross"></use>
        </svg>
      </div>
      <h1 class="heading_1 main-screen__row main-screen__development-text">DEVELOPMENT</h1>
      <div class="main-screen__row">
        <h1 class="heading_1 main-screen__row main-screen__group-text">GROUP</h1>
        <p class="main-screen__additional-text body_1">Корпоративные <br>
          образовательные
          <br>
          программы
        </p>
      </div>
    </div>
    <!--    <OverlaySections class="overlay-sections"/>-->
  </main>
</template>
<script setup>
import OverlaySections from '@/components/OverlaySections.vue';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.to('h1', {delay: 0.3, transform: 'translateY(0px)', duration: 2, opacity: 1, ease: 'power3', stagger: 0.3})
  gsap.to('.cross', {delay: 0.3, transform: 'translateY(0px)', duration: 4, opacity: 1, ease: 'power4'})
  gsap.to('.main-screen__additional-text', {
    delay: 1.4,
    transform: 'translateX(0)',
    duration: 2,
    opacity: 1,
    ease: 'power3'
  });
});
</script>
<style lang="scss">
.cross {
  margin-left: 40px;
  opacity: 0;
  transform: translateY(50%);
  @media screen and (max-width: $notebook_start) {
    width: calc(100vw * (140 / 1440));
    height: calc(100vw * (140 / 1440));
    margin-left: calc(100vw * (40 / 1440));
  }
}

.main-screen {
  width: 100%;

  &__logo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }


  h1 {
    color: $GREEN;
    opacity: 0;

    @media screen and (max-width: $notebook_start) {
      font-size: calc(100vw * (210 / 1440));
    }
  }

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }


  &__card {
    position: fixed;
    top: 0;
    left: 0;
  }

  &__additional-text {
    transform: translateX(5vw);
    opacity: 0;
    margin-left: 30px;
    color: $GREEN;
    margin-top: 21.5px;
    align-self: baseline;
    line-height: 135%;
    @media screen and (max-width: $notebook_start) {
      font-size: calc(100vw * (13 / 1440));
      margin-left: calc(100vw * (30 / 1440));
      margin-top: calc(100vw * (21.5 / 1440));
    }
    @media screen and (max-width: $notebook) {
      font-size: 10px;
      line-height: 110%;

    }
  }


}

.overlay-sections {
  left: 50%;
  transform: translateX(-50%);
}

</style>