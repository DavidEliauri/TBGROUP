<template>
  {{$props}}
</template>

<script setup>
defineProps({
  title: {required: true},
  type: {required: true},
  color: {required: false, default: null}
})
</script>

<style lang='scss'>

</style>