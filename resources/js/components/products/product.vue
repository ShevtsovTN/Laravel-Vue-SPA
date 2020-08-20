<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.value }}</td>
        <td>{{ product.amount }}</td>
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
