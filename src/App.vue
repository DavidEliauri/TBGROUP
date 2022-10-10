<template>
  <Navigation class="navigation"/>
  <Filters ref="filters_component" class="filters" v-if="is_filters_showed"/>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'opacity-transition'" mode="out-in">
      <component class="page" :is="Component"/>
    </transition>
  </router-view>
  <transition name="opacity-transition">
    <Footer v-if="route.meta.footer" class="footer"/>
  </transition>
</template>
<script setup>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue';
import Filters from "@/components/Filters.vue";
import {useRoute} from "vue-router";
import {computed, ref} from "vue";

const filters_component = ref(null);
const route = useRoute();
const is_filters_showed = computed(() => route.meta?.filters)
</script>
<style lang="scss">
</style>

