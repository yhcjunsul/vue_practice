<template>
<div>
    <v-card>
        <v-card-title class="pb-0">
            <div>
                <div v-html="commentItem.contents">
                </div>
                {{ formatDate(commentItem.date) }}
            </div>
        </v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <ReportForm :reportButtonLabel="reportButtonLabel" :reportReasons="reportReasons" @update:reportId="reportId => reportComment(reportId, commentItem.id)">
            </ReportForm>
            <v-btn flat @click="toggleEditor()">{{ submitCommentBtnLabel }}</v-btn>
        </v-card-actions>
        <div v-show="isReplyEditorOpend">
            <v-layout class="grey lighten-3">
                <v-flex>
                    <PostCommentEditorForm class="pt-1" @update:contents="contents => addReply(contents, commentItem.id)">
                    </PostCommentEditorForm>
                </v-flex>
            </v-layout>
        </div>
    </v-card>
    <v-layout class="grey lighten-4" v-for="replyItem in replyList" :key="replyItem.id">
        <v-flex xs1>
        </v-flex>
        <v-flex>
            <PostCommentReplyForm class="grey lighten-4" :replyItem="replyItem"> </PostCommentReplyForm>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
import ReportForm from '@/components/ReportForm.vue'
import PostCommentEditorForm from '@/components/PostCommentEditorForm.vue'
import PostCommentReplyForm from '@/components/PostCommentReplyForm.vue'
import * as datehelper from '@/modules/datehelper.js'
import * as types from '@/vuex/mutation_types.js'

export default {
    name: "PostCommentForm",
    components: {
        ReportForm,
        PostCommentEditorForm,
        PostCommentReplyForm,
    },
    props: {
        commentItem: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            submitCommentBtnLabel: '댓글 작성',
            isReplyEditorOpend: false,
            test: 'd<br>d',
            reportButtonLabel: '댓글 신고',
            reportReasons: [{
                    id: 0,
                    contents: '정치적인 내용',
                },
                {
                    id: 1,
                    contents: '선정적인 내용',
                },
                {
                    id: 2,
                    contents: '누군가를 모욕하는 내용'
                },
                {
                    id: 3,
                    contents: '기타'
                }
            ],
        }
    },
    mounted() {
        this.commentItem.contents = this.commentItem.contents.replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
    computed: {
        replyList() {
            return this.$store.getters.getReplyList;
        }
    },
    methods: {
        reportComment(reportId, commentId) {
            console.log('report comment: reportId=' + reportId + ' commentId=' + commentId);
        },
        toggleEditor() {
            this.isReplyEditorOpend = !this.isReplyEditorOpend;
        },
        formatDate(date) {
            return datehelper.formatDate(date);
        },
        addReply(replyContents, commentId) {
            this.$store.commit(types.ADD_REPLY, {
                contents: replyContents,
                commentId: commentId
            });
            this.isReplyEditorOpend = false;
        }
    }
}
</script>
