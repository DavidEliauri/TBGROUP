<template>
  <button type="button" class="arrow-button">
    <svg class="arrow-button__icon"
         width="16"
         height="16">
      <use xlink:href="@/assets/sprites.svg#arrow-for-button"></use>
    </svg>
  </button>
</template>

<style lang="scss">
.arrow-button {
  border-radius: 90px;
  height: 34px;
  width: 34px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: $TRANSITION;
  border-width: 2px;
  border-style: solid;

  border-color: $BLACK_100;
  fill: $BLACK_100;

  opacity: .75;

  &.left &__icon {
    transform: rotate(180deg);
  }

  &:disabled {
    opacity: .3;
  }

  &:hover:not(&:disabled) {
    opacity: 1;
  }

  &.green {
    border-color: $BRIGHT_GREEN_100;
    fill: $BRIGHT_GREEN_100;
  }

  &.white {
    border-color: $IVORY_100;
    fill: $IVORY_100;
  }
}
</style>
