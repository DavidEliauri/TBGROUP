<template>
  <button type="button" class="secondary-button">
    <slot/>
  </button>
</template>
<style lang="scss">
.secondary-button {
  padding: 18px 32px 16px;
  color: $BRIGHT_GREEN_75;
  border-width: 1.5px;
  border-style: solid;
  border-color: $BRIGHT_GREEN_75;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  text-align: center;
  transition: $TRANSITION;

  &:not(:disabled):hover {
    color: $BRIGHT_GREEN_100;
    border-color: $BRIGHT_GREEN_100;
  }

  &:disabled {
    cursor: default;
    color: $BRIGHT_GREEN_30;
    border-color: $BRIGHT_GREEN_30;
  }

  &.alternative {
    color: $IVORY_60;
    border-color: $IVORY_80;

    &:not(:disabled):hover {
      color: $IVORY_100;
      border-color: $IVORY_100;
    }

    &:disabled {
      color: $IVORY_60;
      border-color: $IVORY_60;
    }
  }
}

</style>
