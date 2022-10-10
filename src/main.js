import 'reset-css'
import {createPinia} from 'pinia'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router.js'
import "@/assets/scss/style.scss";

createApp(App)
    .use(createPinia())
    // .use(axios)
    .use(router)
    .mount('#app');

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