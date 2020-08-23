import VueRouter from "vue-router";
import AuthGuard from "./auth-guard";
import login from './components/auth/login';
import reset from './components/auth/passwords/reset';
import register from './components/auth/register';
import cart from './components/cart/cart';
import catalog from './components/products/catalog';
import orders from './components/orders';
import mainpage from './components/mainpage';




export default new VueRouter({

    routes: [
        {
            path: '',
            name: 'main',
            component: mainpage
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: catalog,
            beforeEnter: AuthGuard
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart,
            beforeEnter: AuthGuard
        },
        {
            path: '/orders',
            name: 'orders',
            component: orders,
            beforeEnter: AuthGuard
        },
        {
            path: '/reset',
            name: 'reset',
            component: reset
        },
        {
            path: '*',
            redirect: 'main'
        }
    ],
    mode: 'history'
})
