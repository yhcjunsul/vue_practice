<template>
<v-layout justify-center>
    <v-flex md6 sm10 xs12>
        <v-card>
            <v-toolbar dark color="blue-grey darken-4">
                <v-toolbar-title>
                    댓글({{commentCount}})
                </v-toolbar-title>
            </v-toolbar>
            <template v-for="(commentItem, index) in commentItemList">
                <v-card :key="index">
                    <v-card-title class="pb-0">
                        <div>
                        <div v-html="commentItem.contents">
                        </div>
                            {{ commentItem.date }}
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <ReportForm :reportButtonLabel="reportButtonLabel" :reportReasons="reportReasons" @update:reportId="reportId => reportComment(reportId)">
                        </ReportForm>
                        <v-btn flat>댓글 작성</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
import ReportForm from '@/components/ReportForm.vue'

export default {
    name: "PostCommentListForm",
    components: {
        ReportForm,
    },
    props: {
        commentItemList: null,
    },
    data() {
        return {
            commentCount: 0,
            isRecommentActivated: false,
            commentIdForRecomment: 0,
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
        this.commentCount = this.commentItemList === null ? 0 : this.commentItemList.length;
    },
    methods: {
        reportComment(reportId) {
            console.log('report comment: reportId=' + reportId);
        },
    }
}
</script>
