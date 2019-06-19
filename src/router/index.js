import Vue from 'vue'
import Router from 'vue-router'
import PublicPageHome from '@/components/Page/Public/Home'

import PageLogin from '@/components/Page/Private/User/Login'
import PageCreateUser from '@/components/Page/Private/User/Create'
import PageHome from '@/components/Page/Private/Home'
import PageRpa from '@/components/Page/Private/Rpa'
import PageTest from '@/components/Page/Private/Test'
import PageReport from '@/components/Page/Private/Report'
import PagePayment from '@/components/Page/Private/Payment'
import PageClient from '@/components/Page/Private/Client'
import PageProcess from '@/components/Page/Private/Process'
import PageRun from '@/components/Page/Private/Run'
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
            path: '/rpa/:Pid',
            name: 'Rpa',
            component: PageRpa
        },
        {
            path: '/test/:Pid',
            name: 'Test',
            component: PageTest
        },
        {
            path: '/report/:Pid',
            name: 'Report',
            component: PageReport
        },
        {
            path: '/payment/:Pid',
            name: 'Payment',
            component: PagePayment
        },
        {
            path: '/process/:Pid',
            name: 'Process',
            component: PageProcess
        },
        {
            path: '/run/:Pid',
            name: 'Run',
            component: PageRun
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