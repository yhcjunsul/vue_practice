<template>
<v-layout justify-center>
    <v-flex md6 sm10 xs12>
        <v-card>
            <v-toolbar dark color="grey darken-4">
                <v-toolbar-title>
                    댓글 쓰기
                </v-toolbar-title>
            </v-toolbar>
            <v-card-actions class="pb-0">
                <v-textarea class="mb-0" flat outline v-model="editorContents" :placeholder="editorPlaceholder">
                </v-textarea>
            </v-card-actions>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="grey darken-3" @click="addComment">
                    작성
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
import * as types from '@/vuex/mutation_types.js';

export default {
    name: "PostCommentEditorForm",
    data() {
        return {
            editorPlaceholder: '주제와 무관하거나 타인의 명예를 훼손하거나 타인의 권리를 침해하는 게시물은 별도의 통보없이 제재를 받을 수 있습니다.',
            editorContents: '',
        }
    },
    watch: {
        editorContents: function (newContents) {
            this.$emit('update:contents', newContents);
        }
    },
    methods: {
        addComment() {
            if (this.editorContents === '') {
                alert('내용을 입력하세요');
                return;
            }

            let commentItem = {
                date: Date.now(),
                contents: this.editorContents,
            }

            this.$store.commit(types.COMMENT_ITEM_LIST, commentItem);
            this.editorContents = '';
        }
    }
}
</script>

<style>
#editor .ql-editor {
    min-height: 15vh;
    height: 15vh;
}
</style>
