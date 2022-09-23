import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useGeneralStore = defineStore('general', () => {
    const is_menu_open = ref(false)
    const action = callback => callback();

    return {is_menu_open, action}
})
