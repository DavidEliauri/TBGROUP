<template>
  <Navigation class="navigation"/>
  <transition @before-enter="beforeEnter" @before-leave="beforeLeave" @after-leave="leave" @after-enter="afterEnter">
    <Filters ref="filters_component" class="filters" v-if="is_filters_showed"/>
  </transition>
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
import {computed, onMounted, ref} from "vue";

const filters_component = ref(null);

onMounted(() => console.log(Filters));

const route = useRoute();
const is_filters_showed = computed(() => route.meta?.filters)

const beforeEnter = () => console.log("before enter", new Date());
const beforeLeave = () => console.log("before leave", new Date());
const afterEnter = () => console.log("enter", new Date());
const afterLeave = () => console.log("leave", new Date());

</script>
<style lang="scss">
.opacity, .filters-transition {
  &-enter-from, &-leave-to {
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: .3s;
  }
}
</style>

