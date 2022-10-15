<template>
  <div class="blog-screen">
    <div class="blog-screen__column">
      <Post class="blog-screen__column__item" v-for="(post,index) in posts" :key="`post-1-${index}`" v-bind="post"/>
    </div>
    <div class="blog-screen__column">
      <Post class="blog-screen__column__item" v-for="(post,index) in posts" :key="`post-2-${index}`" v-bind="post"/>
    </div>
    <div class="blog-screen__column">
      <Post class="blog-screen__column__item" v-for="(post,index) in posts" :key="`post-3-${index}`" v-bind="post"/>
    </div>
  </div>
</template>


<script setup>
import Post from '@/components/Posts/Post.vue';

const posts = [
  {
    title: 'Коучинг как стиль управления2',
    type: 'event',
    created_at: new Date(400),
  },
  {
    title: 'Метод морфологического ящика3',
    type: 'event',
    created_at: new Date(4050),
  },
  {
    title: 'Метод морфологического ящика',
    type: 'case',
    created_at: new Date(5200),
  },
  {
    title: 'Метод морфологического ящика',
    type: 'case',
    created_at: new Date(5200),
  },
  {
    title: 'Метод морфологического ящика',
    type: 'case',
    created_at: new Date(5200),
  },
  {
    title: 'Метод морфологического ящика',
    type: 'case',
    created_at: new Date(5200),
  },
  {
    title: 'Метод морфологического ящика',
    type: 'case',
    created_at: new Date(5200),
  },
  {
    title: 'Управление продажами и сервисом для Сбербанк',
    type: 'theme',
    created_at: new Date(2700),
  },
  {
    title: `Навыки ведения переговоров1`,
    type: 'theme',
    created_at: new Date(2500),
  },
  {
    title: 'Метод морфологического ящика',
    type: 'theme',
    created_at: new Date(1500),
  }
].sort((a, b) => b.created_at - a.created_at);
</script>

<style lang="scss">
.blog-screen-gap {
  grid-gap: 20px;
  @media screen and (max-width: $notebook_start) {
    grid-gap: auto-calculate($notebook_start, $notebook, 20px, 10px);
  }
  @media screen and (max-width: $notebook) {
    grid-gap: 10px;
  }
}

.blog-screen {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  background-color: rgba($IVORY, .95);
  max-width: 100%;
  @extend .blog-screen-gap;

  &__column {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 400px;
    @extend .blog-screen-gap;

    flex-shrink: 0;
    flex-grow: 0;
    &__item{
      flex-grow: 0;
      max-width:100%;
    }
  }
}

</style>
