import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useGeneralStore = defineStore('general', () => {
    const action = callback => callback();

    return {action}
})
