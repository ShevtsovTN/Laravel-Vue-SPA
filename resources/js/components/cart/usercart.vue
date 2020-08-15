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
                <span class="text-muted">{{ currencyLabel }}{{ product.amount }}</span>
            </li>

            <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>{{ promocode }}</small>
                </div>
                <span class="text-success">-{{ discount }}{{ currencyLabel }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Total ({{ currency }})</span>
                <strong>{{ currencyLabel }}{{ totalAmount }}</strong>
            </li>
        </ul>
        <form class="card p-2">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Promo code">
                <div class="input-group-append">
                    <button :click="getDiscount"  class="btn btn-secondary">Redeem</button>
                </div>
            </div>
            <div class="container-fluid">
                <button :click="clearCart" type="submit" class="mt-2 btn btn-secondary btn-lg btn-block">Clear Cart</button>
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
                promocode: '',
                discount: 0,
                currency: '',
                currencyLabel: ''
            }
        },
        computed: {
            userCart() {
                return this.$store.state.productsInCart;
            },
            totalAmount() {
                return this.$store.state.totalAmountCart;
            },
            totalValue() {
                return this.$store.state.totalValueCart;
            }
        },
        methods: {
            getDiscount: function () {

            },
            clearCart: function () {
                this.$store.dispatch('clearCart');
            }
        }
    }
</script>

<style>

</style>
