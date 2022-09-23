import {createApp} from 'vue'
import 'reset-css'
import App from './App.vue'
import router from './router/router.js'
import {createPinia} from 'pinia'
import "@/assets/scss/style.scss";

// FONT-AWESOME //////////
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)
//////////////////////////

createApp(App)
    // .use(axios)
    .use(createPinia())
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


// AXIOS ////////////////////////////////////////////
// import axios from 'axios';
//
// import {useIndexStore} from '@/stores/general.js';
//
// const $INDEX_STORE = useIndexStore()
// console.log("Use index store is:");
// console.log($INDEX_STORE);


// axios.defaults.baseURL = 'https://admin.abedo.ru/api/';
// axios.defaults.headers.common['Authorization'] = `Bearer ${$INDEX_STORE.user_token}`