export default {
    state: {
        payments: [
            {
                title: 'Visa',
                id: 'visa'
            },
            {
                title: 'WebMoney',
                id: 'webmoney'
            },
            {
                title: 'PayPal',
                id: 'paypal'
            }
        ],
        promo: null
    },
    mutations: {
        getPromo (state, payload) {
            state.promo = payload;
        }
    },
    actions: {
        async getPromo ({commit}) {
            await axios.get('/getPromo').then((response) => {
                commit('getPromo', response.data.data)
            })
        },
        activatePromo () {

        },
        getDiscount () {

        },
        buy () {

        }
    },
    getters: {
        payments (state) {
            return state.payments;
        },
        promo (state) {
            return state.promo;
        }
    }
}
