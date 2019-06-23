import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogined: false,
    },
    mutations: {
        login: state => state.isLogined = true,
        logout: state => state.isLogined = false,
    },
    actions: {

    }
})