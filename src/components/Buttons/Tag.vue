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

  background-color: rgba($IVORY, .95);
  color: rgba($BLACK, .60);

  @media screen and (max-width: $notebook) {
    padding: 12px 20px;
  }
  @media screen and (max-width: $tablet_start) {
    padding: 12px 18px;
  }
  @media screen and (max-width: $tablet) {
    padding: 12px 16px;
  }
  @media screen and (max-width: $tablet_end) {
    padding: 8px 13px;
  }

  &:disabled {
    opacity: 0.8;
  }

  &:not(&:disabled):hover {
    background-color: rgba($IVORY, .80);
    color: rgba($BLACK, .60);
  }

  &:not(&:disabled, &.active):active, &.active {
    background-color: rgba($BLACK, .30);
    color: $IVORY;
  }

  &.active:not(&:disabled):active {
    background-color: rgba($IVORY, .95);
    color: rgba($BLACK, .60);
  }

  &.alternative {
    background-color: rgba($IVORY, .30);
    color: $IVORY;

    &:not(&:disabled):hover {
      background-color: rgba($IVORY, .50);
      color: $IVORY;
    }

    &:not(&:disabled):active, &.active {
      background-color: rgba($BLACK, .30);
      color: $IVORY;
    }

    &.active:not(&:disabled):active {
      background-color: rgba($IVORY, .30);
      color: $IVORY;
    }
  }

}
</style>
