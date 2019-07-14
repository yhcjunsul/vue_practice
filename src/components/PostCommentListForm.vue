<template>
<v-layout justify-center>
    <v-flex md6 sm10 xs12>
        <v-card>
            <v-toolbar dark color="blue-grey darken-4">
                <v-toolbar-title>
                    {{commentLabel}}({{commentCount}})
                </v-toolbar-title>
            </v-toolbar>
            <PostCommentEditorForm class="pb-2" @update:contents="contents => addComment(contents)"></PostCommentEditorForm>
            <template v-for="commentItem in commentList">
                <PostCommentForm :key="commentItem.id" :commentItem="commentItem"></PostCommentForm>
            </template>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
import PostCommentForm from '@/components/PostCommentForm.vue'
import PostCommentEditorForm from '@/components/PostCommentEditorForm.vue'
import * as types from '@/vuex/mutation_types.js'

export default {
    name: "PostCommentListForm",
    components: {
        PostCommentForm,
        PostCommentEditorForm,
    },
    props: {
        commentList: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            commentLabel: '댓글',
            commentCount: 0,
        }
    },
    mounted() {
        this.commentCount = this.commentList.length;
    },
    methods: {
        addComment(commentCotents) {
            this.$store.commit(types.ADD_COMMENT, commentCotents);
        },
    }
}
</script>
