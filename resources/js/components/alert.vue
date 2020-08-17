<template>
    <div
        :class="type"
        class="alert alert-dismissible fade show" role="alert">
        {{ text }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "alert",
        computed: {
            type () {
                if (this.$store.getters.messageSuccess !== '') {
                    return 'alert-success';
                } else if (this.$store.getters.messageError !== '') {
                    return 'alert-danger';
                } else if (this.$store.getters.messageWarning !== '') {
                    return 'alert-warning';
                }
            },
            text () {
                if (this.$store.getters.messageSuccess !== '') {
                    return this.$store.getters.messageSuccess;
                } else if (this.$store.getters.messageError !== '') {
                    return this.$store.getters.messageError;
                } else if (this.$store.getters.messageWarning !== '') {
                    return this.$store.getters.messageWarning;
                }
            }
        }

    }
</script>

<style scoped>

</style>
