<template>
  <button type="button" class="secondary-button body">
    <slot/>
  </button>
</template>
<style lang="scss">
.secondary-button {
  padding: 18px 32px 16px;
  color: rgba ($GREEN, .75);
  border-width: 1.5px;
  border-style: solid;
  border-color: rgba ($GREEN, .75);
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
    color: $GREEN;
    border-color: $GREEN;
  }

  &:disabled {
    cursor: default;
    color: rgba ($GREEN, .30);
    border-color: rgba ($GREEN, .30);
  }

  &.alternative {
    color: rgba($IVORY, .60);
    border-color: rgba($IVORY, .80);

    &:not(:disabled):hover {
      color: $IVORY;
      border-color: $IVORY;
    }

    &:disabled {
      color: rgba($IVORY, .60);
      border-color: rgba($IVORY, .60);
    }
  }
}

</style>
