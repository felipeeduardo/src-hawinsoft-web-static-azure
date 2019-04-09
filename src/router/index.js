import Vue from 'vue'
import Router from 'vue-router'
import PageLogin from '@/components/Page/Login'
import PageHome from '@/components/Page/Home'
import PageProcess from '@/components/Page/Process'
import NotFound from '@/components/Page/NotFound'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: 'Login',
            component: PageLogin
        },
        {
            path: '/home',
            name: 'Home',
            component: PageHome
        },
        {
            path: '/process',
            name: 'Process',
            component: PageProcess
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})