<template>
    <div class="mt-4 container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="shadow card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form
                            @submit.prevent="onSubmit"
                            method="POST" action="">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input
                                        v-model.trim="email" @input="$v.email.$touch()"
                                        id="email" type="email" class="form-control"
                                        :class="validEmail"
                                        name="email" value="" autocomplete="email" autofocus>
                                    <span class="invalid-feedback" v-if="$v.email.$dirty && !$v.email.email" role="alert">
                                        <strong>Invalid email</strong>
                                    </span>
                                    <span class="invalid-feedback" v-else-if="$v.email.$dirty && !$v.email.required" role="alert">
                                        <strong>Email cannot be empty.</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input
                                        v-model.trim="password"
                                        @input="$v.password.$touch()"
                                        :class="validPassword"
                                        id="password" type="password" class="form-control" name="password" autocomplete="current-password">
                                    <span class="invalid-feedback" v-if="$v.password.$dirty && !$v.password.minLength" role="alert">
                                        <strong>Password must be more than 8 characters.</strong>
                                    </span>
                                    <span class="invalid-feedback" v-else-if="$v.password.$dirty && !$v.password.required" role="alert">
                                        <strong>Password cannot be empty.</strong>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button
                                        :disabled="$v.$invalid"
                                        type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                    <router-link class="btn btn-link" to="/reset">
                                        Forgot Your Password?
                                    </router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {email, minLength, required} from 'vuelidate/lib/validators'
    export default {
        name: "login",
        data () {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            validEmail () {
                if ((this.$v.email.$dirty && !this.$v.email.required) || (this.$v.email.$dirty && !this.$v.email.email)) {
                    return 'is-invalid';
                } else if (!(this.$v.email.$dirty && !this.$v.email.required) || !(this.$v.email.$dirty && !this.$v.email.email)) {
                    return 'is-valid';
                }
            },
            validPassword () {
                if ((this.$v.password.$dirty && !this.$v.password.required) || (this.$v.password.$dirty && !this.$v.password.minLength)) {
                    return 'is-invalid';
                } else if (!(this.$v.password.$dirty && !this.$v.password.required) || !(this.$v.password.$dirty && !this.$v.password.email)) {
                    return 'is-valid';
                }
            }
        },
        methods: {
            onSubmit () {
                const user = {
                    email: this.email,
                    password: this.password
                };
                if (!this.$v.$invalid) {
                    this.$store.dispatch('loginUser', user);
                    this.$router.push('/').catch(()=>{});
                }
            }
        },
        validations: {
            email: {
                email,
                required
            },
            password: {
                required,
                minLength: minLength(8)
            }
        }
    }
</script>

<style scoped>

</style>
