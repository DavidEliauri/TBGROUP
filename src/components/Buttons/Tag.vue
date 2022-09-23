<template>
  <button type="button" class="tag-button">
    <slot></slot>
  </button>
</template>
<style lang="scss">
.tag-button {
  padding: 14px 24px 12px;
  border-radius: 2px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  transition: $TRANSITION;

  background-color: $IVORY_95;
  color: $BLACK_60;

  &:not(&:disabled):hover {
    background-color: $IVORY_80;
  }

  &:disabled {
    cursor:default;
    background-color: $BLACK_30;
    color: $IVORY_100;
  }

  &.alternative{
    background-color: $IVORY_30;
    color: $IVORY_100;

    &:not(&:disabled):hover {
      background-color: $IVORY_50;
      color: $IVORY_100;
    }



    &:not(&:disabled):active {
      background-color: $BLACK_30;
      color: $IVORY_100;
    }
  }

}
</style>