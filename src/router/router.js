import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home page',
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
        component: () => import("@/pages/Consult.vue")
    },
    {
        path: '/formats',
        name: 'Formats page',
        component: () => import("@/pages/Formats.vue")
    }, {
        path: '/themes',
        name: 'Themes page',
        component: () => import("@/pages/Themes.vue")
    },
    {
        path: '/cases-swiper',
        name: 'Cases swiper page',
        component: () => import("@/pages/CasesSwiper.vue")
    },
    {
        path: '/post',
        name: 'Post page',
        meta: {footer: true},
        component: () => import("@/pages/Post.vue")
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router
