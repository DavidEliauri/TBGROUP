<template>
  <div ref="SECTIONS_ELEMENT" @scroll.prevent="scrollHandler" class="sections">
    <div class="section">
      <Card :key="`card-${0}`" :card="cards[0]"/>

    </div>
    <div class="section">
      <Card :key="`card-${1}`" :card="cards[1]"/>

      <Card :key="`card-${2}`" :card="cards[2]"/>

    </div>
    <div class="section">
      <Card :key="`card-${3}`" :card="cards[3]"/>
    </div>
  </div>
</template>
<script setup>
import Card from '@/components/Card.vue';
import {watch, ref, nextTick} from 'vue';
import {gsap} from 'gsap';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

const cards = [
  {
    image: null,
    text: 'Как использовать источники для генерации новых решений?',
    caption: 'Мероприятие'
  },
  {
    image: null,
    text: 'Коучинг как стиль управления',
    caption: 'Мероприятие',
    color: 'green'
  },
  {
    image: null,
    text: 'Как использовать источники для генерации новых решений?',
    caption: 'Бизнес-завтрак',
    color: 'black'
  },
  {
    image: true,
    text: 'Метод морфологического ящика',
    caption: 'Мероприятие'
  }
]


gsap.registerPlugin(ScrollToPlugin);
const SECTIONS_ELEMENT = ref(null);
const current_section = ref(1);
let old_scroll_top_position = 0;
let scroll_disabled = false;
const scrollHandler = () => {
  if (scroll_disabled) return;
  const new_scroll_top_position = SECTIONS_ELEMENT.value.scrollTop;
  const direction = new_scroll_top_position > old_scroll_top_position;
  current_section.value = direction ? Math.min((+current_section.value + 1), 3) : Math.max((current_section.value - 1), 1);
  old_scroll_top_position = new_scroll_top_position;
  scroll_disabled = true;
}


watch(current_section, value => {
  scroll_disabled = true;

  gsap.to('.sections', {
    scrollTo: document.querySelector(`.section:nth-child(${value})`).offsetTop,
    duration: 1.5,
    onStart: () => scroll_disabled = true,
    onComplete: () => setTimeout(() => scroll_disabled = false, 30),
    onUpdate: () => old_scroll_top_position = SECTIONS_ELEMENT.value.scrollTop
  })
})

</script>
<style lang="scss">
.sections {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(red, .9);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow-y: auto;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
}

.section {
  width: 100%;
  height: 100vh;
  flex-grow: 0;
  flex-shrink: 0;

  &:nth-child(1) {
    background-color: lightcoral;
  }

  &:nth-child(2) {
    background-color: lightgray;
  }

  &:nth-child(3) {
    background-color: sandybrown;
  }
}
</style>