<template>
    <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">{{ totalValue }}</span>
        </h4>
        <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed"
                v-for="product in userCart"
                :key="product.id"
            >
                <div>
                    <h6 class="my-0">{{ product.name }}</h6>
                    <small class="text-muted">{{ product.description }}</small>
                </div>
                <span class="text-muted">{{ currencyLabel }}{{ (product.amount * mainCurrencyRate).toFixed(2) }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Total ({{ currency }})</span>
                <strong>{{ currencyLabel }}{{ (totalAmount * mainCurrencyRate).toFixed(2) }}</strong>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                    <h6 class="my-0">Price including discount</h6>
                </div>
                <span class="text-success">{{ (amountWithDiscount * mainCurrencyRate).toFixed(2) }}{{ currencyLabel }}</span>
            </li>
        </ul>
        <div class="card p-2">
            <div class="input-group">
                <select name="promocodes" v-model="promo" class="custom-select d-block" id="promocodes">
                    <option value="">Choose...</option>
                    <option v-for="promocode in promocodes"
                            :key="promocode.id"
                            :value="promocode.value"
                    >{{ promocode.amount }}
                    </option>
                </select>
                <div class="input-group-append">
                    <button @click="getDiscount" :disabled="flagPromo"  class="btn btn-secondary">Redeem</button>
                </div>
            </div>
            <div class="container-fluid">
                <button @click="clearCart" class="mt-2 btn btn-secondary btn-lg btn-block">Clear Cart</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "usercart",
        data: function () {
            return {
                flagPromo: false,
                amount: 0,
                promo: 0,
                currency: '',
                currencyLabel: ''
            }
        },
        mounted () {
            if (!this.$store.getters.promo) {
                this.$store.commit('setLoading', true);
                this.$store.dispatch('getPromo');
                this.$store.commit('setLoading', false);
            }
        },
        computed: {
            promocodes () {
                return this.$store.getters.promo;
            },
            userCart() {
                return this.$store.getters.productsInCart;
            },
            totalAmount () {
                return this.$store.getters.totalAmountInCart;
            },
            totalValue () {
                return this.$store.getters.totalValueInCart;
            },
            mainCurrencyRate () {
                return this.$store.getters.currencyMainRate;
            },
            amountWithDiscount () {
                return this.$store.getters.amountWithDiscount
            }
        },
        methods: {
            getDiscount: function () {
                this.$store.dispatch('getDiscount', this.amountWithDiscount * (100 - this.promo) / 100);
                this.flagPromo = true;
            },
            clearCart: function () {
                this.amountWithDiscount = 0;
                this.$store.dispatch('clearCart');
            }
        }
    }
</script>

<style>

</style>
