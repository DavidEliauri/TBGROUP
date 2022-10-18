<template>
  <div class="screen support-screen">
    <div class="support-screen__side">
      <h1 class="heading_3 support-screen__title">Поддержание
        <br>
        и создание
        <br>
        креативности
        <br>
        в командах</h1>
    </div>
    <img src="@/assets/images/DogsBigImage.png" alt="Support screen image"
         class="support-screen__image support-screen__image_without-margin">
    <img src="@/assets/images/DogsBigImageWithMargin.png" alt="Support screen image"
         class="support-screen__image_with-margin">
  </div>
</template>

<script setup>
</script>

<style lang='scss'>
.support-screen {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 850px;
  color: $IVORY;

  @media screen and (max-width: $notebook_start) {
    height: auto-calculate($notebook_start, $tablet, 850px, 425px);
  }
  @media screen and (max-width: $tablet) {
    height: auto;
  }

  &__side {
    min-width: 50%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $GREEN;
    z-index: 10;
    @media screen and (max-width: $tablet) {
      background-color: rgba($GREEN, 0.8);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    text-align: center;
    width: max-content;
    @media screen and (max-width: $notebook_start) {
      font-size: 5vw;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    object-fit: cover;
    display: block;

    &_with-margin {
      @media screen and (max-width: $tablet) {
        display: none;
      }
    }

    &_without-margin {
      display: none;
      position: relative;
      height: auto;
      width: 100%;
      @media screen and (max-width: $tablet) {
        display: block;
      }

    }
  }
}
</style>