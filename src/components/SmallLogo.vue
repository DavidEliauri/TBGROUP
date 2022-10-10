<template>
  <div class="small-logo">
    <svg
        class="small-logo__icon"
        width="53" height="19">
      <use xlink:href="@/assets/sprites.svg#logo"></use>
    </svg>
  </div>
</template>

<script setup>
</script>

<style lang='scss'>
.small-logo {
  fill: $BLACK_100;

  &.green {
    fill: $BRIGHT_GREEN_100;
  }

  &.white {
    fill: $IVORY_100;
  }
}
</style>