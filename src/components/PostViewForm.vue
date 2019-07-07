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
            </v-card>
        </v-flex>

    </v-layout>
</div>
</template>

<script>
import * as dateHelper from '@/modules/datehelper.js'

export default {
    name: "PostViewForm",
    data() {
        return {
            viewCount: 10,
            commentCount: 0,
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
    }
}
</script>
