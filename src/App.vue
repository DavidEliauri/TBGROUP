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
  <transition name="modals-transition">
    <ModalWrapper class="modal__wrapper" v-if="CURRENT_MODAL">
      <component class="modal__content" :is="CURRENT_MODAL"/>
    </ModalWrapper>
  </transition>
</template>
<script setup>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue';
import Filters from '@/components/Filters.vue';
import ModalWrapper from '@/components/Modals/Wrapper.vue';
import {useModalsStore} from "@/stores/modals.js";
import {useRoute} from "vue-router";
import {computed, ref, watch, defineAsyncComponent, shallowRef} from "vue";

const $MODALS_STORE = useModalsStore();
const filters_component = ref(null);
const route = useRoute();
const is_filters_showed = computed(() => route.meta?.filters)
const CURRENT_MODAL_NAME = computed(() => $MODALS_STORE.current_modal_object?.name || null);
const CURRENT_MODAL = shallowRef(null);
watch(CURRENT_MODAL_NAME, (value) => {
  if (!value) return CURRENT_MODAL.value = null;
  CURRENT_MODAL.value = defineAsyncComponent(() => import(`@/components/Modals/${CURRENT_MODAL_NAME.value[0].toUpperCase() + CURRENT_MODAL_NAME.value.slice(1)}.vue`));
})
</script>

