<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12>
            <v-textarea class="mb-0" flat outline v-bind:maxlength="maxLength" v-model="editorContents" :placeholder="editorPlaceholder" v-on:input="updateLength">
            </v-textarea>
        </v-flex>
    </v-layout>
    <v-layout justify-end>
        {{currentLength}} / {{maxLength}}
        <v-btn class="mb-0 mt-0" dark color="grey darken-3" @click="submitComment">
            {{submitBtnLabel}}
        </v-btn>
    </v-layout>
</v-container>
</template>

<script>
export default {
    name: "PostCommentEditorForm",
    data() {
        return {
            editorPlaceholder: '주제와 무관하거나 타인의 명예를 훼손하거나 타인의 권리를 침해하는 게시물은 별도의 통보없이 제재를 받을 수 있습니다.',
            editorContents: '',
            maxLength: 1000,
            currentLength: 0,
            submitBtnLabel: '작성',
        }
    },
    methods: {
        submitComment() {
            if (this.editorContents === '') {
                alert('내용을 입력하세요');
                return;
            }

            this.$emit('update:contents', this.editorContents);
            this.editorContents = '';
            this.currentLength = 0;
        },
        updateLength() {
            this.currentLength = this.editorContents.length;
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
