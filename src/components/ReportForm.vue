<template>
<v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{on}">
        <v-btn flat v-on="on">{{reportButtonLabel}}</v-btn>
    </template>
    <v-card>
        <v-card-title class="headline" primary-title>
            신고하기
        </v-card-title>
        <v-card-text>
            신고 사유를 선택해주세요
            <v-radio-group v-model="selectedReportReason">
                <v-radio v-for="reason in reportReasons" :key="reason.id" :label="reason.contents" :value="reason">
                </v-radio>
            </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="reportPost">
                신고
            </v-btn>
            <v-btn color="orange" flat @click="dialog=false">
                취소
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    name: "ReportForm",
    data() {
        return {
            dialog: false,
            selectedReportReason: null,
        }
    },
    props: {
        reportReasons: null,
        reportButtonLabel: {
            type: String,
            default: '신고',
        },
    },
    methods: {
        reportPost() {
            this.dialog = false;
            if (this.selectedReportReason === null) {
                return;
            }

            this.$emit('update:reportId', this.selectedReportReason.id);
        }
    }
}
</script>
