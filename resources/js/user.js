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
        registerUser ({commit}, payload) {
            axios.post('/register', payload)
                .then((response) => {

                })
                .catch((e) => {

                });
            //commit('addUser', new User(payload));
        },
        async loginUser ({commit}, payload) {
            let response = await axios.post('/login', payload).then((response) => {
                return response;
            });
            console.log(response);
            //commit('addUser', new User(payload));
        },
        authUser ({commit}, payload) {
            if (payload.name && payload.email) {
                commit('getUser', payload);
            }
        },
        Logout ({commit}) {
            axios.post('/logout').then((response) => {

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
