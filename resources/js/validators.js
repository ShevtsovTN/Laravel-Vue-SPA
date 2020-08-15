export default {
    state: {
        validName: false,
        validEmail: false,
        validPassword: false,
        validConfirmPass: true
    },
    mutations: {
        validateName (state, payload) {
            if (payload === 'is-valid') {
                state.validName = !state.validName;
            }
        },
        validateEmail (state, payload) {
            if (payload === 'is-valid') {
                state.validEmail = !state.validEmail;
            }
        },
        validatePassword (state, payload) {
            if (payload === 'is-valid') {
                state.validPassword = !state.validPassword;
            }
        },
        confirmedPassword (state, payload) {
            if (payload === 'is-valid') {
                state.validConfirmPass = !state.validConfirmPass;
            }
        },
        valid(state) {
            return !!(state.validName && state.validEmail && state.validPassword && state.validConfirmPass);
        }
    },
    actions: {
        validRegister ({commit}) {
            commit('valid');
        }
    },
    getters: {

    }
}
