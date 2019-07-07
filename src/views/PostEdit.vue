<template>
<v-container fluid>
    <v-layout justify-center>
        <v-flex md6 sm10 xs12>
            <v-card class="elevation-12">
                <v-toolbar dark color="black">
                    <v-flex class="text-xs-center">
                        <v-toolbar-title>글쓰기</v-toolbar-title>
                    </v-flex>
                </v-toolbar>
                <v-flex ma-2>
                    <v-form>
                        <v-text-field name="title" placeholder="title" type="text" v-model="title"></v-text-field>
                    </v-form>
                </v-flex>
                <v-flex ma-2>
                    <PostEditorForm @update:contents="contents => this.editorContents = contents"></PostEditorForm>
                </v-flex>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat icon @click="submitContents">
                        <v-icon>done</v-icon>
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import PostEditorForm from '@/components/PostEditorForm.vue'
import * as types from '@/vuex/mutation_types.js'
import router from '../router'

export default {
    name: 'postedit',
    components: {
        PostEditorForm
    },
    data() {
        return {
            title: '',
            editorContents: ''
        }
    },
    methods: {
        submitContents() {
            console.log('title: ' + this.title);
            console.log('contents: ' + this.editorContents);

            if (this.title === '') {
                alert('제목을 입력하세요')
                return
            }

            if (this.editorContents === '') {
                alert('내용을 입력하세요')
                return
            }

            this.$store.commit(types.POST_TITLE, this.title);
            this.$store.commit(types.POST_CONTENTS, this.editorContents);
            this.$store.commit(types.POST_DATE, Date.now());
            router.push('/postview');
        }
    }
}
</script>
