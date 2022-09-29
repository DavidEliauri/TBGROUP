<template>
  <div ref="SECTIONS_ELEMENT" @scroll.prevent="scrollHandler" class="sections">
    <div class="section">
      <Card class="card" :key="`card-${0}`" :card="cards[0]"/>
    </div>
    <div class="section">
      <Card class="card" :key="`card-${1}`" :card="cards[1]"/>
      <Card class="card" :key="`card-${2}`" :card="cards[2]"/>
    </div>
    <div class="section">
      <Card class="card" :key="`card-${3}`" :card="cards[3]"/>
    </div>
  </div>
</template>
<script setup>
import Card from '@/components/Card.vue';
import {watch, ref, onMounted} from 'vue';
import {gsap} from 'gsap';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import ScrollBooster from 'scrollbooster';

onMounted(() =>
    new ScrollBooster({
      viewport: document.querySelector('.sections'),
      scrollMode: 'native',
      direction: 'vertical'
    }));

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
let can_scroll = true;
const scrollHandler = async () => {
  if(!can_scroll) return;
  const new_scroll_top_position = SECTIONS_ELEMENT.value.scrollTop;
  const direction = new_scroll_top_position > old_scroll_top_position;
  console.log(direction ? 'bottom' : 'top');
  can_scroll = false;
  // if (scroll_permissions[direction ? 'bottom' : 'top']) return;
  //
  // await disable_scroll(direction);
  //
  // current_section.value = direction ? Math.min((+current_section.value + 1), 3) : Math.max((current_section.value - 1), 1);
  // old_scroll_top_position = new_scroll_top_position;

}

const disable_scroll = direction => {
  // if (direction) {
  //   scroll_permissions.top = false;
  //   scroll_permissions.bottom = true;
  // } else {
  //   scroll_permissions.bottom = false;
  //   scroll_permissions.top = true;
  // }
}

watch(current_section, async (value, prev_value) => {
  await disable_scroll(value > prev_value)
  gsap.to('.sections', {
    scrollTo: document.querySelector(`.section:nth-child(${value})`).offsetTop,
    ease: 'power4',
    duration: 10,
    onStart() {
      console.log("Scroll disabled");
      scroll_disabled = true;
    },
    onComplete() {
      console.log("Scroll enabled");
      scroll_disabled = false;
    },
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
  position: relative;

  &:nth-child(1) {
    background-color: lightcoral;

    .card {
      position: absolute;
      left: 297px;
      top: 543px;
    }
  }

  &:nth-child(2) {
    background-color: lightgray;

    .card:nth-child(1) {
      position: absolute;
      left: 3.88%;
      top: 490px;
    }

    .card:nth-child(2) {
      position: absolute;
      left: 61%;
      top: 208px;
    }
  }

  &:nth-child(3) {
    background-color: sandybrown;

    .card {
      position: absolute;
      left: 745px;
      top: 468px;
    }
  }
}
</style>