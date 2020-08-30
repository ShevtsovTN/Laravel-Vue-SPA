<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <router-link class="navbar-brand" to="/">My Site</router-link>
        <button
            class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav w-100 d-flex">
                <li v-for="link in links"
                    :key="link.title"
                    class="nav-item">
                    <router-link class="nav-link" :to="link.url">{{ link.title }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link v-if="isUserLoggedIn" class="nav-link" :to="cart.url">
                        {{ cart.title }} <span class="cart-viewer rounded-circle bg-secondary text-light">{{ totalValueInCart }}</span>
                    </router-link>
                </li>
                <li class="nav-item d-flex align-items-center" v-if="isUserLoggedIn">
                    <select
                        v-model="rateCurrency"
                        @change="setCurrencyMain"
                        id="currency" name="currency"
                        class="currency-nav form-control mw-25 form-control-sm ml-sm-2 custom-select"
                    >
                        <option
                            v-for="currency in currencies" :key="currency.title" :value="currency.rates">
                            {{currency.title}}
                        </option>
                    </select>
                </li>
                <router-link
                        v-if="isUserLoggedIn"
                        class="nav-item ml-sm-auto"
                        to="/"
                        tag="li" >
                        <a class="nav-link"
                           @click="onLogout"
                        >Logout {{ username }}</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navigation",
        data () {
            return {
                rateCurrency: 1
            }
        },
        computed: {
            currencies () {
                return this.$store.getters.currenciesArr
            },
            isUserLoggedIn () {
                return this.$store.getters.isUserLoggedIn;
            },
            links () {
                if (this.isUserLoggedIn) {
                    return [
                        {title: 'Catalog', url: '/catalog'},
                        {title: 'Orders', url: '/orders'}
                    ]
                }
                return [
                    {title: 'Login', url: '/login'},
                    {title: 'Register', url: '/register'}
                ]
            },
            cart () {
                return {
                    title: 'Cart',
                    url: '/cart'
                }
            },
            username () {
                return this.$store.getters.user;
            },
            totalValueInCart () {
                return this.$store.getters.totalValueInCart;
            }
        },
        methods: {
            onLogout () {
                this.$store.dispatch('Logout');
            },
            setCurrencyMain () {
                this.$store.dispatch('setMainCurrency', this.rateCurrency);
            }
        }
    }
</script>

<style scoped>
    .cart-viewer {
        padding: 0 5px 0 5px;
        margin-left: 3px;
    }
    @media (max-width: 575.98px) {
        .currency-nav {
            width: 20% !important;
        }
    }
</style>
