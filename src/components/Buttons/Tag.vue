<template>
  <button type="button" class="tag-button adaptive_16px">
    <slot></slot>
  </button>
</template>
<style lang="scss">
.tag-button {
  padding: 14px 24px 12px;
  border-radius: 2px;
  border: none;
  font-family: 'Stratos LC Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;

  transition: $TRANSITION;

  background-color: $IVORY_95;
  color: $BLACK_60;

  @media screen and (max-width: $notebook) {
    padding: 12px 20px 12px;
  }
  @media screen and (max-width: $tablet_start) {
    padding: 12px 18px 12px;
  }
  @media screen and (max-width: $tablet) {
    padding: 12px 16px 12px;
  }

  &:disabled {
    opacity: 0.8;
  }

  &:not(&:disabled):hover {
    background-color: $IVORY_80;
    color: $BLACK_60;
  }

  &:not(&:disabled, &.active):active, &.active {
    background-color: $BLACK_30;
    color: $IVORY_100;
  }

  &.active:not(&:disabled):active {
    background-color: $IVORY_95;
    color: $BLACK_60;
  }

  &.alternative {
    background-color: $IVORY_30;
    color: $IVORY_100;

    &:not(&:disabled):hover {
      background-color: $IVORY_50;
      color: $IVORY_100;
    }

    &:not(&:disabled):active, &.active {
      background-color: $BLACK_30;
      color: $IVORY_100;
    }

    &.active:not(&:disabled):active {
      background-color: $IVORY_30;
      color: $IVORY_100;
    }
  }

}
</style>
