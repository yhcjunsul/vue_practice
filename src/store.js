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
        commentId: 0,
        commentList: [],
        replyList: [],
        replyId: 0,
    },
    getters: {
        getIsLogined: state => state.isLogined,
        getPostContents: state => state.postContents,
        getPostTitle: state => state.postTitle,
        getPostDate: state => state.postDate,
        getCommentId: state => state.commentId,
        getCommentList: state => state.commentList,
        getReplyList: state => state.replyList,
        getReplyId: state => state.replyId,
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
        [mutation_types.ADD_COMMENT](state, commentContents) {
            const commentItem = {
                date: Date.now(),
                contents: commentContents,
                id: state.commentId,
            }

            state.commentList.push(commentItem);
            state.commentId++;
        },
        [mutation_types.ADD_REPLY](state, payload) {
            const replyItem = {
                date: Date.now(),
                contents: payload.contents,
                id: state.replyId,
                commentId: payload.commentId,
            }

            state.replyList.push(replyItem);
            state.replyId++;
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
        },
    }
})