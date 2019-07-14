<template>
<v-card>
    <v-card-title class="pb-0">
        <div>
            <div v-html="replyItem.contents">
            </div>
            {{ formatDate(replyItem.date) }}
        </div>
    </v-card-title>
    <v-card-actions>
        <v-spacer></v-spacer>
        <ReportForm :reportButtonLabel="reportButtonLabel" :reportReasons="reportReasons" @update:reportId="reportId => reportReply(reportId, replyItem.id)">
        </ReportForm>
    </v-card-actions>
</v-card>
</template>

<script>
import ReportForm from '@/components/ReportForm.vue'
import * as datehelper from '@/modules/datehelper.js'

export default {
    name: "PostCommentReplyForm",
    components: {
        ReportForm,
    },
    props: {
        replyItem: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
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
        this.replyItem.contents = this.replyItem.contents.replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
    methods: {
        reportReply(reportId, replyId) {
            console.log('report reply: reportId=' + reportId + ' replyId=' + replyId);
        },
        formatDate(date) {
            return datehelper.formatDate(date);
        },
    }
}

</script>
