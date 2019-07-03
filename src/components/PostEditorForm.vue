<template>
<div>
    <VueEditor id="editor" v-model="editorContents" :placeholder="editorPlaceholder" :customModules="customModulesForEditor" :editorOptions="editorSettings" />
</div>
</template>

<script>
import {
    VueEditor
} from "vue2-editor";
import {
    ImageDrop
} from 'quill-image-drop-module'
import ImageResize from "quill-image-resize";

export default {
    components: {
        VueEditor
    },
    data() {
        return {
            editorPlaceholder: '내용을 입력하세요',
            editorContents: '',
            customModulesForEditor: [{
                    alias: "imageDrop",
                    module: ImageDrop
                },
                {
                    alias: "imageResize",
                    module: ImageResize
                }
            ],
            editorSettings: {
                modules: {
                    imageDrop: true,
                    imageResize: {}
                }
            }
        }
    },
    watch: {
        editorContents: function (newContents) {
            this.$emit('update:contents', newContents)
        }
    }
}
</script>

<style>
#editor .ql-editor {
    height: 40vh;
}
</style>
