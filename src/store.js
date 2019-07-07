import Vue from 'vue'
import Vuex from 'vuex'
import * as mutation_types from '@/vuex/mutation_types.js'
import FbHelper from '@/modules/fbhelper.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogined: false,
        postContents: '',
        postTitle: '',
        postDate: 0,
        commentItemList: [],
    },
    getters: {
        getIsLogined: state => state.isLogined,
        getPostContents: state => state.postContents,
        getPostTitle: state => state.postTitle,
        getPostDate: state => state.postDate,
        getCommentItemList: state => state.commentItemList,
    },
    mutations: {
        [mutation_types.IS_LOGINED](state, isLogined) {
            state.isLogined = isLogined
        },
        [mutation_types.POST_CONTENTS](state, postContents) {
            state.postContents = postContents
        },
        [mutation_types.POST_TITLE](state, postTitle) {
            state.postTitle = postTitle
        },
        [mutation_types.POST_DATE](state, postDate) {
            state.postDate = postDate
        },
        [mutation_types.COMMENT_ITEM_LIST](state, commentItem) {
            state.commentItemList.push(commentItem)
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