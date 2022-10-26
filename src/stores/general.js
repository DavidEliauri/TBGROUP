import {defineStore} from 'pinia'

export const useGeneralStore = defineStore('general', {
    state: () => ({
        is_navigation_open: false
    })
});
