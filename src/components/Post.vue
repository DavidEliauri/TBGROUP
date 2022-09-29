<template>
  <router-link to="#" class="post__wrapper" :class="$props.color?`post__wrapper_${$props.color}`:''">
    <article class="post" :class="{'post_with-image': $props.image, 'post_long': $props.long}">
      <span v-if="!$props.long" class="post__pre body">{{ $props.caption }}</span>
      <div class="post__content">
        <span v-if="$props.long" class="post__pre_long caption_1">{{ $props.caption }}</span>
        <h5 class="post__title" :class="{heading_6:$props.image&&!$props.long, subheader_1: $props.long}">{{ $props.title }}</h5>
        <div v-if="$props.image" class="post__image__wrapper">
          <img src="@/assets/images/TwoWomans.png" alt="Post image" class="post__image"/>
        </div>
        <ArrowButton v-else class="post__arrow-button" :class="{white: ['black','green'].includes($props.color)}"/>
      </div>
    </article>
  </router-link>
</template>
<script setup>
import ArrowButton from "@/components/Buttons/Arrow.vue";

defineProps({
  image: {required: false},
  title: {required: true},
  long: {required: false, default: false},
  caption: {required: true},
  color: {required: false, default: null}
})
</script>
<style lang="scss">
.post {
  &__wrapper {
    display: block;
    padding: 20px;
    text-decoration: none;
    color: $BLACK_100;
    background-color: $IVORY_100;
    border-radius: 2px;

    &_black {
      color: $IVORY_100;
      background-color: $BLACK_100;
    }

    &_green {
      color: $IVORY_100;
      background-color: $BRIGHT_GREEN_100;
    }
  }


  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;


  &_with-image & {
    &__content {
      grid-gap: 64px;
    }
    &__image__wrapper{
      width:max-content;
      height: auto;
    }
  }

  &_long & {
    &__content {
      align-items: center;
      grid-gap: 15px;
    }

    &__title {
      text-align: center;
    }
  }

  &__pre {
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 48px;
    width: 37px;
    text-transform: lowercase;

    &_long {
      text-transform: uppercase;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    grid-gap: 10px;

  }

  &__image {
    &__wrapper {
      width: 275px;
      height: auto;
    }

    width: 100%;
    max-width: 100%;
    object-fit: contain;
    display: block;
  }


}
</style>