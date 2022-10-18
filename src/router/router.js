import {createRouter, createWebHistory} from 'vue-router'

export const routes = [
    {
        path: '/', name: 'Главная',
        component: () => import("@/pages/Home.vue")
    },
    {
        path: '/theme', name: 'Тема',
        component: () => import("@/pages/Theme.vue")
    },
    {
        path: '/trainings', name: 'Тренинги',
        component: () => import("@/components/Screens/Trainings.vue")
    },
    {
        path: '/swiper', name: 'Свайпер',
        component: () => import("@/pages/Swiper.vue")
    },
    {
        path: '/blog', name: 'Блог',
        component: () => import("@/components/Screens/Blog.vue")
    },
    {
        path: '/formats', name: 'Форматы',
        component: () => import("@/pages/Formats.vue")
    },
    {
        path: '/themes', name: 'Темы',
        component: () => import("@/pages/Themes.vue")
    },
    {
        path: '/post', name: 'Пост',
        component: () => import("@/pages/Post.vue")
    },
    {
        path: '/worker', name: 'Сотрудник',
        component: () => import("@/pages/Worker.vue")
    },
    {
        path: '/modal-program', name: 'Модалка програмы',
        component: () => import("@/pages/ModalProgram.vue")
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
