<template>
  <router-link to="#" class="post__wrapper">
    <component :is="TYPED_POST" v-bind="$props"/>
  </router-link>
</template>
<script setup>
import {defineAsyncComponent, shallowRef} from "vue";
import {uppercaseFirstSymbol} from "@/logics/files.js";

const props = defineProps({
  title: {required: true},
  type: {required: true},
  color: {required: false, default: null}
});
const TYPED_POST = shallowRef(null);
TYPED_POST.value = defineAsyncComponent(() => import(`./${uppercaseFirstSymbol(props.type)}.vue`));
</script>

<style lang="scss">
.post {
  width: 100%;
  padding: 20px;
  border-radius: 2px;

  @media screen and (max-width: $notebook_start) {
    padding: auto-calculate($notebook_start, $notebook, 20px, 10px);
  }
  @media screen and (max-width: $notebook) {
    padding: auto-calculate($notebook_start, $phone_start, 10px, 5px);
  }
  @media screen and (max-width: $tablet) {
    padding: 15px;
  }

  &__wrapper {
    text-decoration: none;
  }
}
</style>