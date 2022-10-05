<template>
  <label :for="`checkbox-${ELEMENT_ID}`" class="checkbox unselectable" :class="{checked: modelValue, disabled: $attrs.hasOwnProperty('disabled')}">
    <input v-bind="$attrs" @input="changeFunction($event.target.checked)" :checked="modelValue" type="checkbox"
           :id="`checkbox-${ELEMENT_ID}`"
           :value="value"
           style="display:none">
    <svg class="checkbox__icon" width="12" height="9">
      <use xlink:href="@/assets/sprites.svg#checkbox-galka"></use>
    </svg>
  </label>
</template>
<script setup>
import {defineEmits} from "vue";

const ELEMENT_ID = Math.random();
const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    required: false
  },
  value: {
    required: false
  }
})
const changeFunction = value => emit('update:modelValue', value);

</script>


<style lang='scss'>
.checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 90px;
  background-color: $BLACK_30;
  cursor: pointer;
  flex-shrink: 0;

  &__icon {
    fill: $IVORY_100;
  }

  &.checked {
    background-color: $BLACK_75;
  }
  &.disabled{
    cursor:default;
  }



}
</style>