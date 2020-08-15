<template>
    <div class="content">
        <navigation></navigation>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "App",
        computed: {
            isUserLoggedIn () {
                return this.$store.getters.isUserLoggedIn;
            }
        }
    }
</script>

<style scoped>
    body {
        min-height: 100vh;
    }
    .content {
        height: 100vh;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>
