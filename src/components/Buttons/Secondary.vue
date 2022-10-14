<template>
  <button type="button" class="secondary-button body">
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
  transition: $TRANSITION;
  @media screen and (max-width: $notebook){
    padding: 15px 27px 15px;

  }
  @media screen and (max-width: $tablet_start){
    padding: 15px 25px 15px;
  }
  @media screen and (max-width: $tablet){
    padding: 14px 22px 14px;

  }
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
