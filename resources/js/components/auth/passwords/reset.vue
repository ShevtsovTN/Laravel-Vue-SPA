<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Reset Password</div>

                    <div class="card-body">
                        <form method="POST" action="">

                            <input type="hidden" name="token" value="">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input v-model.trim="email" @input="$v.email.$touch()"
                                           id="email" type="email" class="form-control"
                                           :class="validEmail"
                                           name="email" value="" autocomplete="email">
                                    <span class="invalid-feedback" v-if="$v.email.$dirty && !$v.email.email" role="alert">
                                        <strong>Invalid email</strong>
                                    </span>
                                    <span class="invalid-feedback" v-else-if="$v.email.$dirty && !$v.email.required" role="alert">
                                        <strong>Email cannot be empty.</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">New Password</label>
                                <div class="col-md-6">
                                    <input v-model.trim="password"
                                           @input="$v.password.$touch()"
                                           :class="validPassword"
                                           class="form-control"
                                           id="password" type="password"  name="password" autocomplete="new-password">
                                    <span class="invalid-feedback" v-if="$v.password.$dirty && !$v.password.minLength" role="alert">
                                        <strong>Password must be more than 8 characters.</strong>
                                    </span>
                                    <span class="invalid-feedback" v-else-if="$v.password.$dirty && !$v.password.required" role="alert">
                                        <strong>Password cannot be empty.</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row" v-if="password">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm New Password</label>
                                <div class="col-md-6">
                                    <input
                                        v-model="passwordConfirm"
                                        :class="validPasswordConfirm"
                                        @input="$v.passwordConfirm.$touch()"
                                        id="password-confirm" type="password" class="form-control" name="password_confirmation" autocomplete="new-password">
                                    <span class="invalid-feedback"
                                          v-if="$v.passwordConfirm.$dirty && !$v.passwordConfirm.sameAs" role="alert">
                                     <strong>Passwords must be the same</strong>
                                    </span>
                                </div>

                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button
                                        :disabled="$v.$invalid"
                                        type="submit" class="btn btn-primary">
                                        Reset Password
                                    </button>
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
    import {email, minLength, required, sameAs} from 'vuelidate/lib/validators'
    export default {
        name: "reset",
        data () {
            return {
                email: '',
                password: '',
                passwordConfirm: ''
            }
        },
        computed: {
            validEmail() {
                if ((this.$v.email.$dirty && !this.$v.email.required) || (this.$v.email.$dirty && !this.$v.email.email)) {
                    return 'is-invalid';
                } else if (!(this.$v.email.$dirty && !this.$v.email.required) || !(this.$v.email.$dirty && !this.$v.email.email)) {
                    return 'is-valid';
                }
            },
            validPassword() {
                if ((this.$v.password.$dirty && !this.$v.password.required) || (this.$v.password.$dirty && !this.$v.password.minLength)) {
                    return 'is-invalid';
                } else if (!(this.$v.password.$dirty && !this.$v.password.required) || !(this.$v.password.$dirty && !this.$v.password.email)) {
                    return 'is-valid';
                }
            },
            validPasswordConfirm() {
                if (this.$v.passwordConfirm.$dirty && this.$v.passwordConfirm.sameAs) {
                    return 'is-valid';
                } else {
                    return 'is-invalid';
                }
            },
        },
        methods: {
            onSubmit () {

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
            },
            passwordConfirm: {
                sameAs: sameAs('password')
            }
        },
    }
</script>

<style scoped>

</style>
