import Vue from 'vue'
import Router from 'vue-router'
import PublicPageHome from '@/components/Page/Public/Home'

import PageLogin from '@/components/Page/Public/User/Login'
import PageCreateUser from '@/components/Page/Public/User/Create'
import PageHome from '@/components/Page/Private/Home'
import PageHandler from '@/components/Page/Private/Handler'
import PageApi from '@/components/Page/Private/Api'
import PageAdmin from '@/components/Page/Private/Admin'
import PageRpa from '@/components/Page/Private/Rpa'
import pageRpaCreate from '@/components/Page/Private/RpaCreate'
import PageRpaUnique from '@/components/Page/Private/RpaUnique'

import PageRpaResults from '@/components/Page/Private/RpaResults'
import PageRpaResultsSuccess from '@/components/Page/Private/RpaResults/Success'
import PageRpaResultsFail from '@/components/Page/Private/RpaResults/Fail'

import NotFound from '@/components/Page/Private/NotFound'
import PagePayment from '@/components/Page/Private/Payment'
import PageAccessDenied from '@/components/Page/Private/AccessDenied'
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
//ADMIN PROFILE 1
const ifAuthenticatedAuthorized = (to, from, next) => {
    const verify = sessionStorage.getItem("hawinsoft");
    const profile = sessionStorage.getItem("hawinsoft_profile");
    if (verify == 'true') {
        if (profile == 1) {
            next()
            return
        }
    }
    next('/accessdenied')
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
            path: '/error',
            name: 'ErrorHandler',
            component: PageHandler,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/mypanel',
            name: 'Rpa',
            component: PageRpa,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/newrpa',
            name: 'RpaCreate',
            component: pageRpaCreate,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rparesult/:Rid',
            name: 'RpaResults',
            component: PageRpaResults,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rpasuccess/:Rid',
            name: 'RpaResultsSuccess',
            component: PageRpaResultsSuccess,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rpafail/:Rid',
            name: 'RpaResultsFail',
            component: PageRpaResultsFail,
            beforeEnter: ifAuthenticated
        },
        {
            //Pid = id_user | Rid = id_Rpa
            path: '/rpa/:Rid',
            name: 'RpaUniue',
            component: PageRpaUnique,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/api',
            name: 'Api',
            component: PageApi,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/admin',
            name: 'Admin',
            component: PageAdmin,
            beforeEnter: ifAuthenticatedAuthorized
        },
        {
            path: '/payment',
            name: 'Payment',
            component: PagePayment,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/accessdenied',
            name: 'AccessDenied',
            component: PageAccessDenied,
            beforeEnter: ifAuthenticated
        }
    ]
})