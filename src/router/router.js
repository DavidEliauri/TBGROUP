import {createRouter, createWebHistory} from 'vue-router'

export const routes = [
    {
        path: '/',
        name: 'Главная',
        meta: {filters: false},
        component: () => import("@/pages/Home.vue")
    },
    {
        path: '/trainings',
        name: 'Тренинги',
        meta: {filters: true},
        component: () => import("@/components/Screens/Trainings.vue")
    },
    {
        path: '/swiper',
        name: 'Свайпер',
        component: () => import("@/pages/Swiper.vue")
    },
    {
        path: '/blog',
        name: 'Блог',
        meta: {filters: true},
        component: () => import("@/components/Screens/Blog.vue")
    },
    {
        path: '/consult',
        name: 'Консультация',
        component: () => import("@/pages/Consult.vue")
    },
    {
        path: '/formats',
        name: 'Форматы',
        component: () => import("@/pages/Formats.vue")
    },
    {
        path: '/themes',
        name: 'Темы',
        component: () => import("@/pages/Themes.vue")
    },

    {
        path: '/post',
        name: 'Пост',
        meta: {footer: true},
        component: () => import("@/pages/Post.vue")
    },
    {
        path: '/worker',
        name: 'Сотрудник',
        meta: {footer: true},
        component: () => import("@/pages/Worker.vue")
    },
    {
        path: '/modal-program',
        name: 'Модалка програмы',
        meta: {footer: false},
        component: () => import("@/pages/ModalProgram.vue")
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
