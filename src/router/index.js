import Vue from 'vue'
import Router from 'vue-router'
import PageLogin from '@/components/Page/User/Login'
import PageCreateUser from '@/components/Page/User/Create'
import PageHome from '@/components/Page/Home'
import PageClient from '@/components/Page/Client'
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
            path: '/process/:Pid',
            name: 'Process',
            component: PageProcess
        },
        {
            path: '/client',
            name: 'Client',
            component: PageClient
        },
        {
            path: '/newuser',
            name: 'Create',
            component: PageCreateUser
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})