<template>
<div>
    <v-layout align-center row wrap>
        <v-flex xs12>
            <PostViewForm></PostViewForm>
        </v-flex>
        <v-flex mt-2 xs12>
            <PostCommentListForm :commentList="commentList">
            </PostCommentListForm>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
import PostViewForm from "@/components/PostViewForm.vue";
import PostCommentListForm from "@/components/PostCommentListForm.vue";

export default {
    name: "postview",
    components: {
        PostViewForm,
        PostCommentListForm,
    },
    data() {
        return {
            editorContents: '',
            commentList: null,
        }
    },
    mounted() {
        this.commentList = this.$store.getters.getCommentList;
    }
}
</script>
