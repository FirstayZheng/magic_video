import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/views/HomeView.vue'
import AboutView from '../components/views/AboutView.vue'

const routes = [{
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router