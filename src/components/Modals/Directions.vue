<template>
  <div class="direction-modal modal__content">
    <div class="direction-modal__row">
      <p class="direction-modal__count body"><span class="direction-modal__count__pre">Выбрано:</span> 2 направления</p>
      <CloseButton @click="$emit('close')" class="direction-modal__close green"/>
    </div>
  </div>
</template>

<script setup>
import CloseButton from '@/components/Buttons/Close.vue';
</script>

<style lang='scss'>
.direction-modal {
  margin: auto 0;
  padding: 40px 40px 60px;
  background-color: $IVORY;
  border-radius: 2px;
  color: $GREEN;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__count{
    &__pre{
      color: rgba($GREEN, 0.6);
    }
  }
}
</style>