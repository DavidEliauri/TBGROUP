<template>
  <span class="badge">
    <slot></slot>
  </span>
</template>
<style lang="scss">
.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Stratos LC Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  min-height: 44px;
  padding: 13px 24px;
  width: max-content;
  border-radius: 25px;
  background-color: $IVORY_95;
  color: $BLACK_60;

  &.alternative {
    background-color: $IVORY_80;
    color: $BRIGHT_GREEN_100;
  }
}
</style>