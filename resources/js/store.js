window.Vue = require('vue');
import Vuex from "vuex"
import user from "./user";
import products from "./products";
import alert from "./alert";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        products, user, alert
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
        userBillingData: {
            address: '',
            address2: '',
            country: '',
            state: '',
            zipcode: ''
        }
    },
    getters: {
        loading (state) {
            return state.loading;
        }
    },
    mutations: {

    },
    actions: {

    }
})
