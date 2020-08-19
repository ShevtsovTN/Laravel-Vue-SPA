<template>
    <div class="container mt-4 mb-4">
        <div class="row">
            <usercart></usercart>
            <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Billing address</h4>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">First name</label>
                            <input
                                @input="$v.firstname.$touch()"
                                v-model.trim="firstname"
                                :class="validFirstname"
                                name="firstName" type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                            <span class="invalid-feedback" v-if="$v.firstname.$dirty && !$v.firstname.required" role="alert">
                                        <strong>Valid first name is required.</strong>
                            </span>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input v-model.trim="lastname"
                                   @input="$v.lastname.$touch()"
                                   :class="validLastname"
                                name="lastname" type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                            <span class="invalid-feedback" v-if="$v.lastname.$dirty && !$v.lastname.required" role="alert">
                                        <strong>Valid first lastname is required.</strong>
                            </span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="username">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input v-model.trim="username" name="username"
                                   @input="$v.username.$touch()"
                                   :class="validUsername"
                                   type="text" class="form-control" id="username" placeholder="Username">
                            <span class="invalid-feedback" v-if="$v.username.$dirty && !$v.username.required" role="alert">
                                        <strong>Valid first username is required.</strong>
                            </span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email">Email <span class="text-muted">(Optional)</span></label>
                        <input v-model="email" name="email"
                               @input="$v.email.$touch()"
                               :class="validEmail"
                               type="email" class="form-control" id="email" placeholder="you@example.com">
                        <span class="invalid-feedback" v-if="$v.email.$dirty && !$v.email.email" role="alert">
                              <strong>Invalid email</strong>
                        </span>
                        <span class="invalid-feedback" v-else-if="$v.email.$dirty && !$v.email.required" role="alert">
                              <strong>Email cannot be empty.</strong>
                        </span>
                    </div>
                    <div class="mb-3">
                        <label for="address">Address</label>
                        <input v-model="address" name="address"
                               @input="$v.address.$touch()"
                               :class="validAddress"
                               type="text" class="form-control" id="address" placeholder="1234 Main St">
                        <span class="invalid-feedback" v-if="$v.username.$dirty && !$v.username.required" role="alert">
                                        <strong>Please enter your shipping address.</strong>
                            </span>

                    </div>
                    <div class="mb-3">
                        <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                        <input v-model="address2" name="address2"
                               type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                    </div>
                    <div class="row">
                        <div class="col-md-5 mb-3">
                            <label for="country">Country</label>
                            <select v-model="country" name="country"
                                    :class="validCountry"
                                    @input="$v.country.$touch()"
                                    class="custom-select d-block w-100" id="country">
                                <option value="">Choose...</option>
                                <option v-for="country in countries"
                                        :key="country.id"
                                >{{ country.title }}
                                </option>
                            </select>
                            <span class="invalid-feedback" v-if="$v.country.$dirty && !$v.country.required" role="alert">
                                        <strong>Please select a valid country.</strong>
                            </span>
                        </div>

                        <div class="col-md-3 mb-3">
                            <label for="zip">Zip</label>
                            <input v-model.trim="zipcode"
                                   :class="validZipcode"
                                   @select="$v.zipcode.$touch()"
                                   name="zipcode"
                                   type="text" class="form-control" id="zip" placeholder="">
                            <span class="invalid-feedback" v-if="$v.zipcode.$dirty && !$v.zipcode.minLength" role="alert">
                                        <strong>Zip code must be more than 4 characters.</strong>
                                    </span>
                            <span class="invalid-feedback" v-else-if="$v.zipcode.$dirty && !$v.zipcode.required" role="alert">
                                        <strong>Zip code required.</strong>
                                    </span>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <div class="custom-control custom-checkbox">
                        <input v-model="saveData" name="saveData"
                               type="checkbox" class="custom-control-input" id="save-info" :checked="saveData" value="true">
                        <label class="custom-control-label" for="save-info">Save this information for next time</label>
                    </div>
                    <hr class="mb-4">
                    <h4 class="mb-3">Payment</h4>
                    <div class="d-block my-3">
                        <div
                            v-for="payment in paymentsSystems" :key="payment.title"
                            class="custom-control custom-radio"
                        >
                            <input
                                :class="validPaymentMethod"
                                @input="$v.paymentMethod.$touch()"
                                :id="payment.id" v-model="paymentMethod" name="paymentMethod" :value="payment.id" type="radio" class="custom-control-input" checked="">
                            <label class="custom-control-label" :for="payment.id">{{ payment.title }}</label>
                            <span class="invalid-feedback" v-if="$v.paymentMethod.$dirty && !$v.paymentMethod.required" role="alert">
                                        <strong>Payment Method required.</strong>
                                    </span>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <button class="btn btn-primary btn-lg btn-block" :disabled="$v.$invalid" type="submit">Continue to checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {email, minLength, required} from 'vuelidate/lib/validators'
    export default {
        name: "cart",
        data: function () {
            return {
                firstname: '',
                lastname: '',
                username: '',
                email: '',
                address: '',
                address2: '',
                country: '',
                zipcode: '',
                paymentMethod: '',
                saveData: false
            }
        },
        computed: {
            validFirstname () {
                if (this.$v.firstname.$dirty && !this.$v.firstname.required) {
                    return 'is-invalid';
                } else if (!(this.$v.firstname.$dirty && !this.$v.firstname.required)) {
                    return 'is-valid';
                }
            },
            validLastname () {
                if (this.$v.lastname.$dirty && !this.$v.lastname.required) {
                    return 'is-invalid';
                } else if (!(this.$v.lastname.$dirty && !this.$v.lastname.required)) {
                    return 'is-valid';
                }
            },
            validUsername () {
                if (this.$v.username.$dirty && !this.$v.username.required) {
                    return 'is-invalid';
                } else if (!(this.$v.username.$dirty && !this.$v.username.required)) {
                    return 'is-valid';
                }
            },
            validAddress () {
                if (this.$v.address.$dirty && !this.$v.address.required) {
                    return 'is-invalid';
                } else if (!(this.$v.address.$dirty && !this.$v.address.required)) {
                    return 'is-valid';
                }
            },
            validCountry () {
                if (this.$v.country.$dirty && !this.$v.country.required) {
                    return 'is-invalid';
                } else if (!(this.$v.country.$dirty && !this.$v.country.required)) {
                    return 'is-valid';
                }
            },
            validPaymentMethod () {
                if (this.$v.paymentMethod.$dirty && !this.$v.paymentMethod.required) {
                    return 'is-invalid';
                } else if (!(this.$v.paymentMethod.$dirty && !this.$v.paymentMethod.required)) {
                    return 'is-valid';
                }
            },
            validEmail () {
                if ((this.$v.email.$dirty && !this.$v.email.required) || (this.$v.email.$dirty && !this.$v.email.email)) {
                    return 'is-invalid';
                } else if (!(this.$v.email.$dirty && !this.$v.email.required) || !(this.$v.email.$dirty && !this.$v.email.email)) {
                    return 'is-valid';
                }
            },
            validZipcode () {
                if ((this.$v.zipcode.$dirty && !this.$v.zipcode.required) || (this.$v.zipcode.$dirty && !this.$v.zipcode.minLength)) {
                    return 'is-invalid';
                } else if (!(this.$v.zipcode.$dirty && !this.$v.zipcode.required) || !(this.$v.zipcode.$dirty && !this.$v.zipcode.minLength)) {
                    return 'is-valid';
                }
            },
            countries () {
                return this.$store.state.countries;
            },
            regions () {
                return this.$store.state.regions;
            },
            paymentsSystems () {
                return this.$store.getters.payments;
            }
        },
        validations: {
            firstname: {
                required
            },
            lastname: {
                required
            },
            username: {
                required
            },
            email: {
                required,
                email
            },
            address: {
                required
            },
            country: {
                required
            },
            zipcode: {
                required,
                minLength: minLength(4)
            },
            paymentMethod: {
                required
            }
        }
    }
</script>

<style>

</style>
