<template>
  <Navigation class="navigation"/>
  <Filters class="filters"/>
  <RouterView/>
</template>
<script setup>
import Navigation from '@/components/Navigation.vue'
import Filters from "@/components/Filters.vue";
</script>

