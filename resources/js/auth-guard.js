import store from "./store";

export default function (to, from, next) {
    if (to.name !== 'login' && !store.getters.isUserLoggedIn) next({ name: 'login' });
    else next()
}
