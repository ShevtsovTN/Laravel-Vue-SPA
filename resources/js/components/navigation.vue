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
        computed: {
            isUserLoggedIn () {
                return this.$store.getters.isUserLoggedIn;
            },
            links () {
                if (this.isUserLoggedIn) {
                    return [
                        {title: 'Catalog', url: '/catalog'},
                        {title: 'Orders', url: '/orders'},
                        {title: 'Cart', url: '/cart'},
                    ]
                }
                return [
                    {title: 'Login', url: '/login'},
                    {title: 'Register', url: '/register'}
                ]
            },
            username () {
                return this.$store.getters.user;
            }
        },
        methods: {
            onLogout () {
                this.$store.dispatch('Logout');
            }
        }
    }
</script>

<style scoped>

</style>
