export default {
    state: {
        dataProducts: [],
        productsInCart: [],
        totalAmountCart: 0,
        totalValueCart: 0,
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
    },
    getters: {

    }
}
