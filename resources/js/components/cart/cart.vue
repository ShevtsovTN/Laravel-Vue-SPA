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
                            <input v-model="firstname"
                                name="firstName" type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input v-model="lastname"
                                name="lastname" type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="username">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input v-model="username" name="username"
                                   type="text" class="form-control" id="username" placeholder="Username" required="">
                            <div class="invalid-feedback" style="width: 100%;">
                                Your username is required.
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email">Email <span class="text-muted">(Optional)</span></label>
                        <input v-model="email" name="email"
                               type="email" class="form-control" id="email" placeholder="you@example.com">
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="address">Address</label>
                        <input v-model="address" name="address"
                               type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
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
                                    class="custom-select d-block w-100" id="country" required="">
                                <option value="">Choose...</option>
                                <option v-for="country in countries"
                                        :key="country.id"
                                >{{ country.title }}
                                </option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="state">State</label>
                            <select v-model="region" name="region"
                                    class="custom-select d-block w-100" id="state" required="">
                                <option value="">Choose...</option>
                                <option v-for="region in regions"
                                        :key="region.id"
                                >{{ region.title }}
                                </option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="zip">Zip</label>
                            <input v-model="zipcode" name="zipcode"
                                   type="text" class="form-control" id="zip" placeholder="" required="">
                            <div class="invalid-feedback">
                                Zip code required.
                            </div>
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
                        <div class="custom-control custom-radio">
                            <input id="credit" v-model="paymentMethod" name="paymentMethod" value="credit" type="radio" class="custom-control-input" checked=""
                                   required="">
                            <label class="custom-control-label" for="credit">Credit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="debit" v-model="paymentMethod" name="paymentMethod" value="debit" type="radio" class="custom-control-input" required="">
                            <label class="custom-control-label" for="debit">Debit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="paypal" v-model="paymentMethod" name="paymentMethod" value="paypal" type="radio" class="custom-control-input" required="">
                            <label class="custom-control-label" for="paypal">Paypal</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cc-name">Name on card</label>
                            <input v-model="nameCard" name="nameCard"
                                   type="text" class="form-control" id="cc-name" placeholder="" required="">
                            <small class="text-muted">Full name as displayed on card</small>
                            <div class="invalid-feedback">
                                Name on card is required
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="cc-number">Credit card number</label>
                            <input v-model="numberCard" name="numberCard"
                                   type="text" class="form-control" id="cc-number" placeholder="" required="">
                            <div class="invalid-feedback">
                                Credit card number is required
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="cc-expiration">Expiration</label>
                            <input v-model="expiration" name="expiration"
                                   type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                            <div class="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="cc-expiration">CVV</label>
                            <input v-model="cvv" name="cvv"
                                   type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                            <div class="invalid-feedback">
                                Security code required
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <button class="btn btn-primary btn-lg btn-block" :disabled="!checkValidateForm()" type="submit">Continue to checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                region: '',
                zipcode: '',
                paymentMethod: '',
                nameCard: '',
                numberCard: '',
                expiration: '',
                cvv: '',
                saveData: false,
                trueBuyForm: null
            }
        },
        computed: {
            countries () {
                return this.$store.state.countries;
            },
            regions () {
                return this.$store.state.regions;
            }
        },
        mounted() {
            this.checkValidateForm()
        },
        methods: {
            checkValidateForm: function () {
                return this.$store.state.totalValueCart !== 0 && (this.zipcode !== '' && this.username !== '' && this.email !== '' && this.address !== '' && this.nameCard !== '' && this.numberCard !== '' && this.expiration !== '' && this.cvv !== '');
            }
        }
    }
</script>

<style>

</style>
