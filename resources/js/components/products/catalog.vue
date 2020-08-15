<template>
    <div class="container-fluid mt-4 mb-4">
        <div class="row">
            <preloader v-if="loading"></preloader>
            <table v-else class="table container">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <product
                    v-for="prod in dataProducts"
                    :key="prod.id"
                    :product="prod"
                ></product>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "catalog",
        data () {
            return {
                loading: true
            }
        },
        computed: {
            dataProducts () {
                return this.$store.state.dataProducts;
            }
        },
        mounted() {
            this.update();
        },
        methods: {
            update: function () {
                this.$store.dispatch('getProduct');
                this.loading = false;
            }
        }
    }
</script>


<style>
    /*.table {
        animation: visible .8s ease-in-out;
    }
    @keyframes visible {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }*/
</style>
