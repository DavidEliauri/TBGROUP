<template>
  <div class="filters__wrapper">
    <div class="filters">
      <div class="filters__main">
        <button class="filters__open-button" @click="toggle">Фильтры</button>

      </div>
      <div class="filters__content">
        <Tag disabled class="filters__content__tag">Креативность</Tag>
      </div>
      <div class="filters__accept">
        <SecondaryButton @click="accept" class="filters__accept__button">Применить</SecondaryButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import SecondaryButton from "@/components/Buttons/Secondary.vue";
import Tag from "@/components/Buttons/Tag.vue";
</script>
<style lang="scss">
.filters {
  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 0 100px;
  }

  width: 100%;
  height: auto;
  border: 1px solid black;

  &__main {
    width: 100%;
    height: 105px;
  }
}
</style>