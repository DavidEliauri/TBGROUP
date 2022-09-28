<template>
    <div ref="SECTIONS_ELEMENT" @scroll.prevent.stop="scrollHandler" class="sections">
        <div class="section">Section {{current_section}}</div>
        <div class="section">Section {{current_section}}</div>
        <div class="section">Section {{current_section}}</div>
    </div>
</template>
<script setup>
import { watch, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const SECTIONS_ELEMENT = ref(null);
const current_section = ref(1);
let old_scroll_top_position = 0;
let scroll_disabled = false;
const scrollHandler = () => {
    if (scroll_disabled) return;
    const new_scroll_top_position = SECTIONS_ELEMENT.value.scrollTop;
    const direction = new_scroll_top_position > old_scroll_top_position;
    // console.log(new_scroll_top_position, old_scroll_top_position)
    // console.log(direction ? 'Вниз' : 'Вверх')
    current_section.value = direction ? Math.min((+current_section.value + 1), 3) : Math.max((current_section.value - 1), 1);
    old_scroll_top_position = new_scroll_top_position;
}





watch(current_section, value => {
    scroll_disabled = true;

    gsap.to('.sections', {
        scrollTo: document.querySelector(`.section:nth-child(${value})`).offsetTop,
        duration: 1.5,
        onStart: () => scroll_disabled = true,
        onComplete: () => scroll_disabled = false,
        onUpdate: (event) => old_scroll_top_position = SECTIONS_ELEMENT.value.scrollTop
    })
    console.log("current section changed on:", value);
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