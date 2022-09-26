import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home page',
            component: ()=>import("@/pages/Home.vue")
        },
        {
            path: '/trainings',
            name: 'Trainings page',
            component: ()=>import("@/pages/Trainings.vue")
        }
    ]
})

export default router
