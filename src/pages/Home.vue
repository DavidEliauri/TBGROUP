<template>
  <main class="page home-page">
    <div class="home-page__row">
      <h1>
        TRAINING
      </h1>
      <use class="cross" width="140" height="139"
           xlink:href="@/assets/sprites.svg#cross"></use>
    </div>

    <h1>DEVELOPMENT</h1>
    <h1>GROUP</h1>
    <Card/>
  </main>
</template>
<script setup>
import Card from '@/components/Card.vue';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to('.home-page', {transform: 'translateY(0px)', duration: 2,ease: 'back'})
  gsap.to('.home-page', {duration: 0.3, opacity: 1, ease: 'power3'})
});
</script>
<style lang="scss">
h1 {
  letter-spacing: -7px;
  color: $BRIGHT_GREEN_100;

}

.home-page {
  transform: translateY(50px);
  opacity:0;
  &__row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
