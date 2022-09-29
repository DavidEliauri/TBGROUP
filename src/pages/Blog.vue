<template>
  <MasonryWall :items="[...posts]" :ssr-columns="1" :gap="16">
    <template #default="{ item, index }">
      <Post :key="`blog-${index}`" v-bind="item"/>
    </template>
  </MasonryWall>
</template>


<script setup>
import Post from '@/components/Post.vue';
import MasonryWall from '@yeger/vue-masonry-wall'

import {ref} from 'vue';

const posts = ref([
  {
    title: 'Метод морфологического ящика',
    image: false,
    long: false,
    caption: 'тема',
    color: 'black'
  },
  {
    title: 'Коучинг как стиль управления',
    image: true,
    long: true,
    caption: 'мероприятие',
  },
  {
    title: 'Метод морфологического ящика',
    image: true,
    long: false,
    caption: 'кейс',
  },
  {
    title: 'Управление продажами и сервисом для Сбербанк',
    image: true,
    long: true,
    caption: 'кейс',
  },
  {
    title: 'Метод морфологического ящика',
    image: false,
    long: false,
    caption: 'тема',
    color: 'green'
  },
  {
    title: 'Метод морфологического ящика',
    image: false,
    long: true,
    caption: 'мероприятие',
    color: 'black'
  },

]);
</script>

<style lang="scss">
.post__wrapper{
  width:100%;
  max-width: 400px;
}
</style>
