export default {
    state: {
        message: false,
        alertBodySuccess: '',
        alertBodyError: '',
        alertBodyWarning: ''
    },
    mutations: {
        setMessageSuccess (state, payload) {
            state.alertBodySuccess = payload;
        },
        setMessageError (state, payload) {
            state.alertBodyError = payload;
        },
        setMessageWarning (state, payload) {
            state.alertBodyWarning = payload;
        },
        clearMessage (state) {
            state.alertBodySuccess = '';
            state.alertBodyError = '';
            state.alertBodyWarning = '';
        }
    },
    actions: {
        getMessageSuccess ({commit}, payload) {
            commit('setMessageSuccess', payload);
            this.state.message = true;
        },
        getMessageError ({commit}, payload) {
            commit('setMessageError', payload);
            this.state.message = true;
        },
        getMessageWarning ({commit}, payload) {
            commit('setMessageWarning', payload);
            this.state.message = true;
        },

    },
    getters: {
        message (state) {
            return state.message;
        },
        messageSuccess (state) {
            return state.alertBodySuccess;
        },
        messageError (state) {
            return state.alertBodyError;
        },
        messageWarning (state) {
            return state.alertBodyWarning;
        }
    }
}
