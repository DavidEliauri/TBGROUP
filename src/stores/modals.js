import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useModalsStore = defineStore('general', () => {
    const current_modal_object = ref(null);

    const action = callback => callback();

    return {current_modal_object, action}
})
