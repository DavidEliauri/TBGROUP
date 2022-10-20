<template>
  <label :for="$props.id" class="secondary-checkbox checkbox unselectable"
         :class="{checked: modelValue, disabled: $attrs.hasOwnProperty('disabled')}">
    <input v-bind="$attrs" @input="changeFunction($event.target.checked)" :checked="modelValue" type="checkbox"
           :id="$props.id"
           :value="value"
           style="display:none">
    <svg class="secondary-checkbox__icon" width="9" height="7">
      <use xlink:href="@/assets/sprites.svg#checkbox-galka"></use>
    </svg>
  </label>
</template>
<script setup>
import {defineEmits} from "vue";

const emit = defineEmits(['update:modelValue']);
defineProps({
  id: {
    required: false,
    default: () => `checkbox-${Math.random()}`
  },
  modelValue: {
    required: false
  },
  value: {
    required: false
  }
});
const changeFunction = value => emit('update:modelValue', value);
</script>

<style lang='scss'>
.secondary-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1px solid $GREEN;
  border-radius: 90px;
  cursor: pointer;
  flex-shrink: 0;
  transition: .1s;

  &__icon {
    fill: $IVORY;
  }

  &.checked {
    background-color: $GREEN;
  }

  &.disabled {
    cursor: default;
  }


}
</style>