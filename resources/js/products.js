export default {
    state: {
        dataProducts: []
    },
    mutations: {
        setProductToCatalog (state, payload) {
            for (let key in payload) {
                payload[key].amount = payload[key].amount / 100;
                payload[key].amount.toFixed(2);
            }
            state.dataProducts = payload;
        }
    },
    actions: {
        async getProduct ({commit}) {
            await axios.get('/api/getProducts').then((response) => {
                commit('setProductToCatalog', response.data.data);
            });
        }
    },
    getters: {
        dataProducts (state) {
            return state.dataProducts;
        }
    }
}
