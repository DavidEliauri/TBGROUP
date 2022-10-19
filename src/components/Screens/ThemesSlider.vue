<template>
  <div class="theme-slider-screen">
    <div class="theme-slider-screen__row theme-slider-screen__info-row">
      <h2 class="theme-slider-screen__title heading_3">
        что хотите прокачать?
      </h2>
      <p class="theme-slider-screen__text lead_1">
        Здесь вы видите набор направлений, по которым можно развивать креативное мышление. Эти решения можно применять
        точечно, а можно комбинировать друг с другом в любом порядке.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang='scss'>
.theme-slider-screen {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: $IVORY;
  background-color: $GREEN;
  * {
    border: 1px solid black;
  }

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__info-row {
    grid-gap: 21px;
    @media screen and (max-width: $tablet_start) {
      flex-direction: column;
    }
  }

  &__text {
    line-height: 135%;
    @media screen and (max-width: $notebook_start - 50px) {
      line-height: 115%;

    }
  }
}
</style>