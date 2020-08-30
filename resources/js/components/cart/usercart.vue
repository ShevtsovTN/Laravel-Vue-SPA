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
                <span class="text-muted">{{ currencyLabel }}{{ product.amount * mainCurrencyRate}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Total ({{ currency }})</span>
                <strong>{{ currencyLabel }}{{ totalAmount * mainCurrencyRate}}</strong>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                    <h6 class="my-0">Price including discount</h6>
                </div>
                <span class="text-success">{{ amountWithDiscount * this.mainCurrencyRate }}{{ currencyLabel }}</span>
            </li>
        </ul>
        <form class="card p-2"
              @submit.prevent="onSubmit"
        >
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
                    <button @click="getDiscount"  class="btn btn-secondary">Redeem</button>
                </div>
            </div>
            <div class="container-fluid">
                <button @click="clearCart" class="mt-2 btn btn-secondary btn-lg btn-block">Clear Cart</button>
            </div>
        </form>

    </div>
</template>

<script>
    export default {
        name: "usercart",
        data: function () {
            return {
                amount: 0,
                amountWithDiscount: 0,
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
            totalAmount() {
                return this.$store.getters.totalAmountInCart;
            },
            totalValue() {
                return this.$store.getters.totalValueInCart;
            },
            mainCurrencyRate () {
                return this.$store.getters.currencyMainRate;
            }
        },
        methods: {
            onSubmit: function () {

            },
            getDiscount: function () {
                this.amountWithDiscount = this.totalAmount * (100 - this.promo) / 100
            },
            clearCart: function () {
                this.$store.dispatch('clearCart');
            }
        }
    }
</script>

<style>

</style>
