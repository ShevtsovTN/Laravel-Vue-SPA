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
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        payments (state) {
            return state.payments;
        }
    }
}
