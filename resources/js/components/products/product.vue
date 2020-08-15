<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.value }}</td>
        <td>{{ product.amount }}</td>
        <td>
            <button class="btn btn-success"
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
                is_added: false,
            }
        },
        methods: {
            addToCart: function (product) {
                this.$store.dispatch('addToCart', product);
            }
        }
    }
</script>

<style scoped>

</style>
