export default {
    state: {
        dataOrders: null
    },
    mutations: {
        getOrdersToCatalog (state, payload) {
            for (let key in payload) {
                payload[key].amount = payload[key].amount / 100;
            }
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
