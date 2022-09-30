<template>
  <Navigation class="navigation" />
  <Filters ref="filters_component" class="filters" v-if="is_filters_showed" />
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'opacity'" mode="out-in">
      <component class="page" :is="Component" />
    </transition>
  </router-view>
</template>
<script setup>
import Navigation from '@/components/Navigation.vue'
import Filters from "@/components/Filters.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";

const filters_component = ref(null);


const route = useRoute();
const is_filters_showed = computed(() => route.meta?.filters)

</script>
<style lang="scss">
.opacity {
  &-enter-from, &-leave-to{
    opacity:0;
  }
  &-enter-active,
  &-leave-active {
    transition: .5s;
  }
}
</style>

