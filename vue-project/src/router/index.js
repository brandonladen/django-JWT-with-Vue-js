import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'

const guard = function (to, from, next){
    if(localStorage.getItem('token')){
        next()
    }else {
        next('/login')
    }
}
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: (to, from, next) => {
            guard(to, from, next)
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        beforeEnter: (to, from, next) => {
            guard(to, from, next)
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

export default router