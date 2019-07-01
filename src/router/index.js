import Vue from 'vue'
import Router from 'vue-router'
import PublicPageHome from '@/components/Page/Public/Home'

import PageLogin from '@/components/Page/Public/User/Login'
import PageCreateUser from '@/components/Page/Public/User/Create'
import PageHome from '@/components/Page/Private/Home'
import PageRpa from '@/components/Page/Private/Rpa'
import PageRpaUnique from '@/components/Page/Private/RpaUnique'
import PageRpaDownload from '@/components/Page/Private/RpaDownload'
//import PageTest from '@/components/Page/Private/Test'
import PageReport from '@/components/Page/Private/Report'
//import PagePayment from '@/components/Page/Private/Payment'
import PageClient from '@/components/Page/Private/Client'
import PageProcess from '@/components/Page/Private/Process'
import PageRun from '@/components/Page/Private/Run'
import PageSuccess from '@/components/Page/Public/Success'
import NotFound from '@/components/Page/Private/NotFound'
import UnderConstruction from '@/components/Page/Private/UnderConstruction'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
    const verify = sessionStorage.getItem("hawinsoft");
    if (verify == 'true') {
        next()
        return
    }
    next('/login')
}

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
            path: '/newuser',
            name: 'Create',
            component: PageCreateUser,
        },
        {
            path: '/success',
            name: 'Success',
            component: PageSuccess,
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/home',
            name: 'Home',
            component: PageHome,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rpa',
            name: 'Rpa',
            component: PageRpa,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rpadownload/:Rid',
            name: 'RpaDownload',
            component: PageRpaDownload,
            beforeEnter: ifAuthenticated
        },
        {
            //Pid = id_user | Rid = id_Rpa
            path: '/rpa/:Pid/:Rid',
            name: 'RpaUniue',
            component: PageRpaUnique,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/test/:Pid',
            name: 'Test',
            component: UnderConstruction,
            //component: PageTest,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/report/:Pid',
            name: 'Report',
            component: PageReport,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/payment/:Pid',
            name: 'Payment',
            component: UnderConstruction,
            //component: PagePayment,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/process/:Pid',
            name: 'Process',
            component: PageProcess,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/run/:Pid',
            name: 'Run',
            component: PageRun,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/client',
            name: 'Client',
            component: PageClient,
            beforeEnter: ifAuthenticated
        }
    ]
})