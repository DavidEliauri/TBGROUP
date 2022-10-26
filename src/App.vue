<template>
  <Navigation class="navigation__wrapper"/>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'opacity-transition'" mode="out-in">
      <component class="page" :is="Component"/>
    </transition>
  </router-view>
  <Footer class="footer__wrapper"/>
  <transition name="modals-transition">
    <ModalWrapper class="modal__wrapper" v-if="CURRENT_MODAL" @close="closeAnyModal">
      <component @close="closeAnyModal" class="modal__content" :is="CURRENT_MODAL"/>
    </ModalWrapper>
  </transition>
</template>
<script setup>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue';
import ModalWrapper from '@/components/Modals/Wrapper.vue';
import {useModalsStore} from "@/stores/modals.js";
import {computed, provide, watch, defineAsyncComponent, shallowRef, onMounted} from "vue";
import {uppercaseFirstSymbol} from "@/logics/files.js";
import {closeAnyModal} from '@/logics/modals.js'
import {gsap} from "gsap";

const $MODALS_STORE = useModalsStore();
const CURRENT_MODAL_NAME = computed(() => $MODALS_STORE.current_modal_object?.name || null);
const CURRENT_MODAL = shallowRef(null);
watch(CURRENT_MODAL_NAME, (value) => {
  if (!value) return CURRENT_MODAL.value = null;
  CURRENT_MODAL.value = defineAsyncComponent(() => import(`@/components/Modals/${uppercaseFirstSymbol(CURRENT_MODAL_NAME.value)}.vue`));
});


onMounted(() => gsap.to(['.navigation__wrapper', '.footer__wrapper'], {
  stagger: .3,
  opacity: 1,
  transform: 'translateY(0px)',
  ease: 'power3',
  duration: 2,
}));
</script>

<style lang="scss">
.navigation__wrapper {
  position: sticky;
  top: 0;
  left: 0;
}

.navigation__wrapper, .footer__wrapper {
  opacity: 0;
}

.navigation__wrapper {
  transform: translateY(-100%);
}

.footer__wrapper {
  transform: translateY(100%);
}
</style>