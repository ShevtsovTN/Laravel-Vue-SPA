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
        promo: null,
        mainCurrency: '',
        mainCurrencyRate: 1,
        currencies: [],
        productsInCart: [],
        totalAmountCart: 0,
        amountWithDiscount: 0,
        totalValueCart: 0,
    },
    mutations: {
        setPromo (state, payload) {
            state.promo = payload;
        },
        setCurrency (state, payload) {
            state.currencies = payload;
        },
        setMainCurrencyRate(state, payload) {
            state.mainCurrencyRate = payload;
        },
        setProductOnUserCart (state, payload) {
            state.productsInCart.push(payload);
            state.totalAmountCart += (payload.amount);
            state.amountWithDiscount = state.totalAmountCart;
            state.totalValueCart++;
        },
        clearProductInCart (state) {
            state.productsInCart = [];
            state.totalAmountCart = 0;
            state.totalValueCart = 0;
            state.amountWithDiscount = 0;
        },
        setTotalAmountWithDiscountCart (state, payload) {
            state.amountWithDiscount = payload;
        }
    },
    actions: {
        async getPromo ({commit}) {
            await axios.get('/getPromo').then((response) => {
                commit('setPromo', response.data.data)
            })
        },
        activatePromo () {

        },
        async getCurrency({commit}) {
            await axios.get('/api/getCurrencyRates').then((response) => {
                commit('setCurrency', response.data)
            })
        },
        setMainCurrency({commit}, payload) {
            commit('setMainCurrencyRate', payload)
        },
        getDiscount ({commit}, payload) {
            commit('setTotalAmountWithDiscountCart', payload)
        },
        buy ({commit}, payload) {
            axios.post('/addOrders', payload).then((response) => {

            })
        },
        addToCart ({commit}, payload) {
            commit('setProductOnUserCart', payload);
        },
        clearCart ({commit}) {
            commit('clearProductInCart');
        }
    },
    getters: {
        payments (state) {
            return state.payments;
        },
        promo (state) {
            return state.promo;
        },
        currenciesArr (state) {
            return state.currencies;
        },
        currencyMain (state) {
            return state.mainCurrency;
        },
        currencyMainRate (state) {
            return state.mainCurrencyRate;
        },
        productsInCart (state) {
            return state.productsInCart;
        },
        totalAmountInCart (state) {
            return state.totalAmountCart;
        },
        totalValueInCart (state) {
            return state.totalValueCart;
        },
        amountWithDiscount (state) {
            return state.amountWithDiscount;
        }
    }
}
