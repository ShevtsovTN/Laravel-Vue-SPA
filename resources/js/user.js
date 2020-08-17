class User {
    constructor (user) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }
}

export default {
    state: {
        user: {
            name: null,
            email: null
        }
    },
    mutations: {
        addUser (state, payload) {
            state.user.name = payload.name;
            state.user.email = payload.email;
        },
        clearUser (state) {
            state.user.name = null;
            state.user.email = null;
        }
    },
    actions: {
        async registerUser ({commit}, payload) {
            let response = await axios.post('/register', payload)
                .then((response) => {
                    commit('addUser', response.data);
                    return response;
                })
                .catch((e) => {
                });
            //commit('addUser', response.data);
        },
        async loginUser ({commit}, payload) {
            let response = await axios.post('/login', payload).then((response) => {
                commit('addUser', response.data);
                return response;
            });
            //commit('addUser', response.data);
        },
        authUser ({commit}, payload) {
            if (payload.name && payload.email) {
                commit('addUser', payload);
            }
        },
        async Logout ({commit}) {
            let response = await axios.post('/logout').then((response) => {
                return response;
            });
            commit('clearUser');
        }
    },
    getters: {
        user (state) {
            return state.user;
        },
        isUserLoggedIn (state) {
            return state.user.name !== null
        }
    }
}
