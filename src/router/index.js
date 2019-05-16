import Vue from 'vue'
import Router from 'vue-router'
import PublicPageHome from '@/components/Page/Public/Home'

import PageLogin from '@/components/Page/Private/User/Login'
import PageCreateUser from '@/components/Page/Private/User/Create'
import PageHome from '@/components/Page/Private/Home'
import PageClient from '@/components/Page/Private/Client'
import PageProcess from '@/components/Page/Private/Process'
import PageStep from '@/components/Page/Private/Steps'
import NotFound from '@/components/Page/Private/NotFound'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: 'Public',
            component: PublicPageHome
        },
        {
            path: '/login',
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
            path: '/step/:Pid',
            name: 'Steps',
            component: PageStep
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