import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useModalsStore = defineStore('general', () => {
    const current_modal_object = ref(null);
    const action = callback => callback();
    const openModal = (name, params = null) => current_modal_object.value = {name, params};
    const closeAnyModal = () => current_modal_object.value = null;
    return {current_modal_object, action, closeAnyModal}
});
