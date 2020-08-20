export default {
    state: {
        dataOrders: [
            {
                id: 1,
                address: 'address №1',
                description: 'description №1',
                value: 1,
                amount: 1
            },
            {
                id: 2,
                address: 'address №2',
                description: 'description №2',
                value: 2,
                amount: 2
            },
            {
                id: 3,
                address: 'address №3',
                description: 'description №3',
                value: 3,
                amount: 3
            }
        ]
    },
    mutations: {
        getOrdersToCatalog (state, payload) {
            for (let key in payload) {
                payload[key].amount = payload[key].amount / 100;
            }
            state.dataOrders = payload;
        },
    },
    actions: {
        async getOrders ({commit}) {
            await axios.get('/api/getOrders').then((response) => {
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
