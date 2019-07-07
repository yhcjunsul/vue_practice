<template>
<div>
    <v-layout align-center row wrap>
        <v-flex xs12>
            <PostViewForm></PostViewForm>
        </v-flex>
        <v-flex mt-2 xs12>
            <PostCommentEditorForm @update:contents="contents => this.editorContents = contents"></PostCommentEditorForm>
        </v-flex>
        <v-flex mt-2 xs12>
            <PostCommentListForm :commentItemList="commentItems">
            </PostCommentListForm>
        </v-flex>
    </v-layout>

    <!-- 댓글 작성창 추가 -->
    <!-- 댓글 목록 추가 -->
</div>
</template>

<script>
import PostViewForm from "@/components/PostViewForm.vue";
import PostCommentEditorForm from "@/components/PostCommentEditorForm.vue";
import PostCommentListForm from "@/components/PostCommentListForm.vue";

export default {
    name: "postview",
    components: {
        PostViewForm,
        PostCommentEditorForm,
        PostCommentListForm,
    },
    data() {
        return {
            editorContents: '',
            commentItems: []
        }
    },
    mounted() {
        this.commentItems = this.$store.getters.getCommentItemList;
    }
}
</script>
