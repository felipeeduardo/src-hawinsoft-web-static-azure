import Vue from 'vue'
import Router from 'vue-router'
//publics
import PublicHome from '@/components/pages/public/home'
import PublicAbout from '@/components/pages/public/about'
import Login from '@/components/pages/public/user/login'
import CreateUser from '@/components/pages/public/user/create'
//privates
import Home from '@/components/pages/private/home'
import Handler from '@/components/pages/private/handler'
import Api from '@/components/pages/private/api'
import Admin from '@/components/pages/private/admin'
import Rpa from '@/components/pages/private/rpa'
import RpaCreate from '@/components/pages/private/rpaCreate'
import RpaUnique from '@/components/pages/private/rpaUnique'
import RpaResults from '@/components/pages/private/rpaResults'
import RpaResultsSuccess from '@/components/pages/private/rpaResults/success'
import RpaResultsFail from '@/components/pages/private/rpaResults/fail'
import NotFound from '@/components/pages/private/notFound'
import Payment from '@/components/pages/private/payment'
import AccessDenied from '@/components/pages/private/accessDenied'
//import UnderConstruction from '@/components/pages/Private/UnderConstruction'

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
    next('/AccessDenied')
}
export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'Public',
            component: PublicHome
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/newuser',
            name: 'Create',
            component: CreateUser,
        },
        {
            path: '/about',
            name: 'About',
            component: PublicAbout
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/error',
            name: 'ErrorHandler',
            component: Handler,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/mypanel',
            name: 'Rpa',
            component: Rpa,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/newrpa',
            name: 'RpaCreate',
            component: RpaCreate,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rparesult/:Rid',
            name: 'RpaResults',
            component: RpaResults,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rpasuccess/:Rid',
            name: 'RpaResultsSuccess',
            component: RpaResultsSuccess,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/rpafail/:Rid',
            name: 'RpaResultsFail',
            component: RpaResultsFail,
            beforeEnter: ifAuthenticated
        },
        {
            //Pid = id_user | Rid = id_Rpa
            path: '/rpa/:Rid',
            name: 'RpaUniue',
            component: RpaUnique,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/api',
            name: 'Api',
            component: Api,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            beforeEnter: ifAuthenticatedAuthorized
        },
        {
            path: '/payment',
            name: 'Payment',
            component: Payment,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/AccessDenied',
            name: 'AccessDenied',
            component: AccessDenied,
            beforeEnter: ifAuthenticated
        }
    ]
})