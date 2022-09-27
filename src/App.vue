<template>
  <Navigation class="navigation"/>
  <Filters class="filters" v-if="is_filters_showed"/>
  {{ route.meta }}
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'opacity'" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>
<script setup>
import Navigation from '@/components/Navigation.vue'
import Filters from "@/components/Filters.vue";
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute();
const is_filters_showed = computed(() => route.meta?.filters);
</script>
<style lang="scss">
.opacity {
  &-enter-from, &-leave-to {
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: .3s;
  }
}
</style>

