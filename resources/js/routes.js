import VueRouter from "vue-router";
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
            component: mainpage
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/catalog',
            component: catalog
        },
        {
            path: '/cart',
            component: cart
        },
        {
            path: '/orders',
            component: orders
        },
        {
            path: '/reset',
            component: reset
        },
    ],
    mode: 'history'
})
