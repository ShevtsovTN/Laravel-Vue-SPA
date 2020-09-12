window.Vue = require('vue');
import App from "./components/App";
import VueRouter from "vue-router";
import router from "./routes";
import store from "./store"
import Vuelidate from "vuelidate/src";

Vue.use(VueRouter);
Vue.use(Vuelidate);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('App', require('./components/App').default);
Vue.component('preloader', require('./components/preloader').default);
Vue.component('orders', require('./components/orders').default);
Vue.component('mainpage', require('./components/mainpage').default);
Vue.component('alert', require('./components/alert').default);
Vue.component('navigation', require('./components/navigation').default);
Vue.component('catalog', require('./components/products/catalog').default);
Vue.component('product', require('./components/products/product').default);
Vue.component('reset', require('./components/auth/passwords/reset').default);
Vue.component('login', require('./components/auth/login').default);
Vue.component('register', require('./components/auth/register').default);
Vue.component('cart', require('./components/cart/cart').default);
Vue.component('usercart', require('./components/cart/usercart').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router: router,
    store: store,
    async mounted () {
        this.$store.commit('setLoading', true);
        await this.$store.dispatch('authUser');
        await this.$store.dispatch('getProduct');
        await this.$store.dispatch('getCurrency');
        this.$store.commit('setLoading', false);
    }
});
