<template>
  <article class="post event-post">
    <p class="event-post__pre caption_1 uppercase">мероприятие</p>
    <div class="event-post__content">
      <h3 class="event-post__title subheader_1">
        Коучинг как стиль управления
      </h3>
      <img src="@/assets/images/EventPlaceholder.png" alt="Case post image" class="event-post__image">
    </div>
  </article>
</template>

<script setup>
defineProps({title: {required: true}});
</script>

<style lang='scss'>
.event-post {
  background-color: $IVORY;
  color: $BLACK;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 32px;
  &__pre{
    text-align: center;
    letter-spacing: 0.1em;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-gap: 42px;
  }
  &__image{
    width:100%;
    object-fit: contain;
    height: auto; max-height: 260px;
  }
}
</style>
