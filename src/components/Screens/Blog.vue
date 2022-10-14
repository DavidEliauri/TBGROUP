<template>
  <div class="blog-screen">
    <Post v-for="(post,index) in posts" :key="`post-1-${index}`" v-bind="post"/>
<!--    <Post v-for="(post,index) in final_posts.map(el=>el[1])" :key="`post-2-${index}`" v-bind="post"/>-->
<!--    <Post v-for="(post,index) in final_posts.map(el=>el[2])" :key="`post-3-${index}`" v-bind="post"/>-->
    <!--    <div class="blog-page__column">-->
    <!--    </div>-->
    <!--    <div class="blog-page__column">-->
    <!--    </div>-->
    <!--    <div class="blog-page__column">-->
    <!--    </div>-->
  </div>
</template>


<script setup>
import Post from '@/components/Posts/Post.vue';
import {onBeforeUnmount, onMounted} from "vue";

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

const resizeHandler = () => {
// Место для обработки адаптивной версии, т.е., когда ширина становится меньше пересчитывать кол-во столбцов
}
onMounted(() => window.addEventListener('resize', resizeHandler));
onBeforeUnmount(() => window.removeEventListener('resize', resizeHandler));

const events = posts.filter(({type}) => type === 'event');
const themes = posts.filter(({type}) => type === 'theme');
const cases = posts.filter(({type}) => type === 'case');

let final_posts = [];
console.log('min, ', Math.min(events.length, themes.length, cases.length));
for (let i = 0; i <= Math.min(events.length, themes.length, cases.length); i++) {
  final_posts.push(([cases[i], themes[i], events[i]]).sort(() => Math.random() - .5))
  cases.splice(i, 1);
  themes.splice(i, 1);
  events.splice(i, 1);
}

const index_of_first = final_posts[0].findIndex(({type}) => type === 'theme');
[final_posts[0][0], final_posts[0][index_of_first]] = [final_posts[0][index_of_first], final_posts[0][0]];
final_posts[0][0].color = 'black';


console.table("the array is: ", final_posts);

// final_posts[0] = [final_posts[0].indexOf(el => el.type === 'theme'), final_posts[0]];

</script>

<style lang="scss">
.blog-screen {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 20px;
  background-color: $IVORY_95;
  max-width: 100%;

  &__column {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 400px;
    grid-gap: 20px;
    min-height: 100px;
    flex-shrink: 0;
    flex-grow: 0;
  }
}

.post__wrapper {
  width: 100%;
  max-width: 400px;
}
</style>
