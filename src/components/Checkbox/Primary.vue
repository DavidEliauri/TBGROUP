<template>
  <label :for="`checkbox-${$props.id}`" class="checkbox unselectable"
         :class="{checked: modelValue, disabled: $attrs.hasOwnProperty('disabled')}">
    <input v-bind="$attrs" @input="changeFunction($event.target.checked)" :checked="modelValue" type="checkbox"
           :id="`checkbox-${$props.id}`"
           :value="value"
           style="display:none">
    <svg class="checkbox__icon" width="12" height="9">
      <use xlink:href="@/assets/sprites.svg#checkbox-galka"></use>
    </svg>
  </label>
</template>
<script setup>
import {defineEmits} from "vue";

const emit = defineEmits(['update:modelValue'])
defineProps({
  id: {
    required: false,
    default: () => Math.random()
  },
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
  background-color: rgba($BLACK, .30);
  cursor: pointer;
  flex-shrink: 0;
  transition: .1s;

  &__icon {
    fill: $IVORY;
  }

  &.checked {
    background-color: rgba($BLACK, .75);
  }

  &.disabled {
    cursor: default;
  }


}
</style>