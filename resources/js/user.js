export default {
    state: {
        user: {
            name: null,
            email: null
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user.name = payload.name;
            state.user.email = payload.email;
        },
        clearUser(state) {
            state.user.name = null;
            state.user.email = null;
        }
    },
    actions: {
        async registerUser ({commit}, payload) {
            commit('clearError');
            commit('setLoading', true);
            await axios.post('/register', payload)
                .then((response) => {
                    commit('setUser', response.data);
                    commit('setLoading', false);
                })
                .catch((e) => {
                    commit('setLoading', false);
                    commit('setError', e.message)
                });
        },
        async loginUser ({commit}, payload) {
            commit('clearError');
            commit('setLoading', true);
            await axios.post('/login', payload)
                .then((response) => {
                commit('setUser', response.data);
                commit('setLoading', false);
            })
                .catch((e) => {
                    commit('setLoading', false);
                    commit('setError', e.message)
                });
        },
        authUser ({commit}, payload) {
            if (payload.name && payload.email) {
                commit('setUser', payload);
            }
        },
        async Logout ({commit}) {
            await axios.post('/logout');
            commit('clearUser');
        }
    },
    getters: {
        user (state) {
            return state.user.name;
        },
        isUserLoggedIn (state) {
            return state.user.name !== null
        }
    }
}
