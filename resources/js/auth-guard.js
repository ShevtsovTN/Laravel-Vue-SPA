import store from "./store";

export default function (to, from, next) {
    if (store.getters.user.name) {
        next()
    } else {
        next('/login?loginError=true')
    }

}
