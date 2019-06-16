<template>
<v-container fluid fill-height>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <JoinForm></JoinForm>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import JoinForm from '@/components/JoinForm.vue'

export default {
    name: "join",
    components: {
        JoinForm
    }
}
</script>
