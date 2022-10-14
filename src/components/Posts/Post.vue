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
.post{
  padding: 20px;
  border-radius: 2px;
  &__wrapper{
    text-decoration: none;
  }
}
</style>