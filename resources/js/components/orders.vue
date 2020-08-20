<template>
    <div class="container-fluid mt-4 mb-4">
        <div class="row">
            <table class="table container">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Address</th>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="order in orders"
                        :key="order.id"
                    >
                        <td>{{ order.id }}</td>
                        <td>{{ order.address }}</td>
                        <td>{{ order.description }}</td>
                        <td>{{ order.value }}</td>
                        <td>{{ order.amount }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "orders",
        computed: {
            orders () {
                return this.$store.getters.getOrders;
            }
        }
    }
</script>

<style scoped>

</style>
