<template>
<div>
    <v-layout justify-center>
        <v-flex md6 sm10 xs12>
            <v-card>
                <v-card-title primary-title mb-1>
                    <div>
                        <h3 class="headline mb-1">{{title}}</h3>
                        <span class="mr-1">조회 {{viewCount}} </span> <span class="mr-1">댓글 {{commentCount}}</span> <span>작성일자 {{postedDate}} </span>
                    </div>
                </v-card-title>
                <v-card-text>
                    <div v-html="postContents"></div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <ReportForm :reportReasons="reportReasons" @update:reportId="reportId => reportPost(reportId)">
                    </ReportForm>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
import ReportForm from '@/components/ReportForm.vue'
import * as dateHelper from '@/modules/datehelper.js'

export default {
    name: "PostViewForm",
    components: {
        ReportForm,
    },
    data() {
        return {
            viewCount: 10,
            commentCount: 0,
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
    computed: {
        title() {
            return this.$store.getters.getPostTitle;
        },
        postContents() {
            return this.$store.getters.getPostContents;
        },
        postedDate() {
            return dateHelper.formatDate(this.$store.getters.getPostDate);
        }
    },
    methods: {
        reportPost(reportId) {
            console.log('report post: reportId=' + reportId);
        }
    }
}
</script>
