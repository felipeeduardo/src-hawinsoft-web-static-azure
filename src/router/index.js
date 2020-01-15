import Vue from 'vue'
import Router from 'vue-router'
import PublicPageHome from '@/components/Page/Public/Home'

import PageLogin from '@/components/Page/Public/User/Login'
import PageCreateUser from '@/components/Page/Public/User/Create'
import PageHome from '@/components/Page/Private/Home'
import PageMessage from '@/components/Page/Private/Message'
import PageHandler from '@/components/Page/Private/Handler'
import PageRpa from '@/components/Page/Private/Rpa'
import PageRpaUnique from '@/components/Page/Private/RpaUnique'
import PageRpaResults from '@/components/Page/Private/RpaResults'
import PageReport from '@/components/Page/Private/Report'
import PageUserRpa from '@/components/Page/Private/User/UserRpa'
import PageSuccess from '@/components/Page/Public/Success'
import NotFound from '@/components/Page/Private/NotFound'
//import UnderConstruction from '@/components/Page/Private/UnderConstruction'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
    const verify = sessionStorage.getItem("hawinsoft");
    if (verify == 'true') {
        next()
        return
    }
    next('/login')
}

const ifAuthenticatedBasic = (to, from, next) => {
    const verify = sessionStorage.getItem("hawinsoft");
    const profile = sessionStorage.getItem("hawinsoft_profile");
    if (verify == 'true' && profile != 3) {
        next()
        return
    }
    next('/error')
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
            path: '/message',
            name: 'Message',
            component: PageMessage,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/error',
            name: 'ErrorHandler',
            component: PageHandler,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rpa',
            name: 'Rpa',
            component: PageRpa,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rpauser/:Rid',
            name: 'RpaNewUser',
            component: PageUserRpa,
            beforeEnter: ifAuthenticatedBasic
        },
        {
            path: '/rparesult/:Rid',
            name: 'RpaResults',
            component: PageRpaResults,
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
            path: '/report/:Pid',
            name: 'Report',
            component: PageReport,
            beforeEnter: ifAuthenticated
        }
    ]
})