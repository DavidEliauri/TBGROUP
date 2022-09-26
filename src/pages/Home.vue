<template>
  <main class="page home-page">
    <div class="home-page__logo">
      <div class="home-page__row">
        <h1>
          TRAINING
        </h1>

        <svg class="cross" width="140" height="139">
          <use
              xlink:href="@/assets/sprites.svg#cross"></use>
        </svg>
      </div>
      <h1 class="home-page__row">DEVELOPMENT</h1>
      <div class="home-page__row">
        <h1 class="home-page__row">GROUP</h1>
        <p class="home-page__additional-text body_1">Корпоративные <br>
          образовательные
          <br>
          программы</p>
      </div>
    </div>

    <!--    <Card class="home-page__card"/>-->
  </main>

</template>
<script setup>
import Card from '@/components/Card.vue';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";

gsap.registerPlugin(ScrollTrigger);
document.addEventListener('scroll', () => console.log('scroll event'));
onMounted(() => {
  gsap.to('h1', {delay: 0.3, transform: 'translateY(0px)', duration: 2, opacity: 1, ease: 'power3', stagger: 0.3})
  gsap.to('.cross', {delay: 0.3, transform: 'translateY(0px)', duration: 4, opacity: 1, ease: 'power4'})
  gsap.to('.home-page__additional-text', {
    delay: 1.4,
    transform: 'translateX(0)',
    duration: 2,
    opacity: 1,
    ease: 'power3'
  })
});
</script>
<style lang="scss">


h1 {
  letter-spacing: -7px;
  color: $BRIGHT_GREEN_100;
  opacity: 0;
  transform: translateY(50px);
}

.cross {
  margin-left: 40px;
  opacity: 0;
  transform: translateY(-70px);
}

.home-page {
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
    color: $BRIGHT_GREEN_100;
    margin-top: 21.5px;
    align-self: baseline;
  }
}
</style>
