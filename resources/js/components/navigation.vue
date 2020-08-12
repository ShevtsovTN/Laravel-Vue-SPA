<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <router-link class="navbar-brand" to="/">My Site</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul v-if="userIsLogged" class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/catalog">Catalog</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/orders">Orders</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/cart">Cart <span class="badge badge-secondary badge-pill">{{ totalValue }}</span></router-link>
                </li>
            </ul>
            <ul v-else class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>

</style>
