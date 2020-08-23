import store from "./store";



export default function (to, from, next) {
    if (store.getters.isUserLoggedIn) {
        next();
    } else {
        store.dispatch('authUser').then(() => {
            if (to.name !== 'login' && !store.getters.isUserLoggedIn) {
                next({name: 'login'});
            } else {
                next();
            }
        });
    }

}
