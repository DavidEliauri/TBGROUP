<template>
  <button type="button" class="close-button">
    <svg
        class="close-button__icon"
        width="26" height="26">
      <use xlink:href="@/assets/sprites.svg#close-modal"></use>
    </svg>
  </button>
</template>

<style lang='scss'>
.close-button {
  width: max-content;
  height: max-content;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  opacity: .6;
  transition: $TRANSITION;
  stroke: $BLACK;

  &.green {
    stroke: $GREEN;
  }

  &.white {
    stroke: $IVORY;
  }

  &:not(:disabled):hover, &:not(:disabled):active {
    opacity: 1;
  }

  &:disabled {
    cursor: default;
    opacity: .3;
  }

  &__icon {
    @media screen and (max-width: $notebook) {
      width: 23px;
      height: 23px;
    }
    @media screen and (max-width: $tablet) {
      width: 20px;
      height: 20px;
    }
    @media screen and (max-width: $phone) {
      width: 17.5px;
      height: 17.5px;
    }
  }
}
</style>