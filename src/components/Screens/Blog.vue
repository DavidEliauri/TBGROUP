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
    grid-gap: auto-calculate($notebook_start, $notebook, 10px, 5px);
  }
}


.blog-screen {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  background-color: rgba($BLACK, .3);
  max-width: 100%;
  width: 100%;

  padding: 0 100px;
  @media screen and (max-width: $notebook_start) {
    padding: 0 auto-calculate($notebook_start, $notebook, 100px, 50px)
  }
  @media screen and (max-width: $notebook) {
    padding: 0 auto-calculate($notebook, $tablet, 50px, 20px);
  }
  @media screen and (max-width: $tablet) {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-gap: 10px;
  }
  @extend .blog-screen-gap;

  &__column {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 400px;
    @extend .blog-screen-gap;
    @media screen and (max-width: $tablet_start) {
      max-width: 100%;
    }
    flex-shrink: 0;
    flex-grow: 0;

    &__item {
      flex-grow: 0;
      max-width: 100%;
    }
  }
}

</style>
