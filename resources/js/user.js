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
            email: null,
            password: null,
            saveBillingData: null,
        }
    },
    mutations: {
        setUser (state, payload) {
            state.user.name = payload.name;
            state.user.email = payload.email;
            state.user.password = payload.password;
        },
        getUser (state, payload) {
            state.user.name = payload.name;
            state.user.email = payload.email;
        }
    },
    actions: {
        registerUser ({commit}, payload) {
            axios.post('/register', payload);
            commit('setUser', new User(payload));
        },
        loginUser ({commit}, payload) {
            axios.post('/login', payload);
        }
    },
    getters: {
        user (state) {
            return state.user;
        },
        isUserLoggedIn (state) {
            return state.user !== null
        }
    }
}
