<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.value }}</td>
        <td>{{ (product.amount  * mainCurrencyRate).toFixed(2) }}</td>
        <td>
            <button class="btn btn-success"
                    :disabled="productIsEmpty"
                    @click="addToCart(product)"
            >Ad to Cart</button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "product",
        props: [
            'product'
        ],
        data: function() {
            return {
                productIsEmpty: false,
            }
        },
        computed: {
            mainCurrencyRate () {
                return this.$store.getters.currencyMainRate;
            }
        },
        methods: {
            addToCart: function (product) {
                this.product.value--;
                this.$store.dispatch('addToCart', product);
                if (this.product.value < 1) {
                    this.productIsEmpty = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>
