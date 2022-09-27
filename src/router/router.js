import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home page',
        meta: {filters: false},
        component: () => import("@/pages/Home.vue")
    },
    {
        path: '/trainings',
        name: 'Trainings page',
        meta: {filters: true},
        component: () => import("@/pages/Trainings.vue")
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router
