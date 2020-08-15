window.Vue = require('vue');
import Vuex from "vuex"
import user from "./user";
import product from "./product";
import validators from "./validators"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        product, user//, validators
    },
    state: {
        loading: true,
        countries: {
            UnatedStates: {
                id: 1,
                title: 'Unated States'
            },
            Russia: {
                id: 2,
                title: 'Russia'
            }
        },
        regions: {
            Zimbabwe: {
                id: 1,
                title: 'Zimbabwe'
            },
            Russia: {
                id: 2,
                title: 'Russia'
            }
        },
        dataProducts: [],
        productsInCart: [],
        totalAmountCart: 0,
        totalValueCart: 0,
        userBillingData: {
            address: '',
            address2: '',
            country: '',
            state: '',
            zipcode: ''
        }
    },
    getters: {
        // Применение методов к state, вызывается в компоненте, обязателен return.
    },
    mutations: {
        getProductToCatalog (state, payload) {
            for (let key in payload) {
                payload[key].amount = payload[key].amount / 100;
            }
            state.dataProducts = payload;
            state.loading = false;
        },
        getProductOnUserCart (state, payload) {
            state.productsInCart.push(payload);
            state.totalAmountCart += payload.amount;
            state.totalValueCart++;
        },
        clearProductInCart (state) {
            state.productsInCart = [];
            state.totalAmountCart = 0;
            state.totalValueCart = 0;
        }
    },
    actions: {
        getProduct ({commit}) {
            axios.get('/api/getProducts').then((response) => {
                commit('getProductToCatalog', response.data.data);
            });
        },
        addToCart ({commit}, payload) {
            commit('getProductOnUserCart', payload);
        },
        clearCart ({commit}) {
            commit('clearProductInCart');
        }
    }
})
