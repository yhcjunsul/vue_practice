import Vue from 'vue'
import Vuex from 'vuex'
import * as mutation_types from '@/vuex/mutation_types.js'
import FbHelper from '@/modules/fbhelper.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogined: false,
    },
    getters: {
        getIsLogined: state => state.isLogined,
    },
    mutations: {
        [mutation_types.IS_LOGINED](state, isLogined) {
            state.isLogined = isLogined
        }
    },
    actions: {
        login({ commit }) {
            const fbHelper = new FbHelper();

            return new Promise((resolve, reject) => {
                fbHelper.fbLogin().then(response => {
                    if (response.status === 'connected') {
                        commit(mutation_types.IS_LOGINED, true);
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
            })
        }
    }
})