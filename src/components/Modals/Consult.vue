<template>
  <div class="consult modal__content">
        <span class="consult__icon__wrapper">
        <svg width="27" height="19" class="consult__icon">
          <use xlink:href="@/assets/sprites.svg#galka"></use>
        </svg>
        </span>
    <p class="consult__text body_1">!Спасибо! Мы получили ваше сообщение. В ближайшее время
      мы
      свяжемся с вами по указанным контактам!</p>
  </div>

</template>

<script setup>
</script>

<style lang='scss'>
.consult {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  grid-gap: 24px;
  background-color: white;
  width: 100%;
  max-width: 980px;
  padding: 58px 20px 64px;
  border-radius: 2px;
  color: $GREEN;
  &__icon {
    fill: $IVORY;

    &__wrapper {
      width: 64px;
      height: 64px;
      background-color: $GREEN;
      border-radius: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}


</style>