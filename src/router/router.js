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
    },
    {
        path: '/swiper',
        name: 'Swiper page',
        meta: {filters: false},
        component: () => import("@/pages/Swiper.vue")
    },
    {
        path: '/blog',
        name: 'Blog page',
        meta: {filters: true},
        component: () => import("@/pages/Blog.vue")
    },
    {
        path: '/consult',
        name: 'Consult page',
        meta: {filters: false},
        component: () => import("@/pages/Consult.vue")
    },
    {
        path: '/formats',
        name: 'Formats page',
        meta: {filters: false},
        component: () => import("@/pages/Formats.vue")
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router
