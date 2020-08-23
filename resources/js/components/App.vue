<template>
    <div class="content">
        <navigation></navigation>
        <router-view v-if="!loadingData"></router-view>
        <preloader v-else></preloader>
    </div>
</template>

<script>
    export default {
        name: "App",
        computed: {
            loadingData () {
                return this.$store.getters.loading
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
