export default {
    state: {
        dataOrders: null
    },
    mutations: {
        getOrdersToCatalog (state, payload) {
            state.dataOrders = payload;
        },
        clearOrders (state) {
            state.dataOrders = null;
        }
    },
    actions: {
        async getOrders ({commit}) {
            await axios.get('/getOrders').then((response) => {
                commit('getOrdersToCatalog', response.data.data);
            });
        },
    },
    getters: {
        getOrders (state) {
            return state.dataOrders;
        }
    }
}
