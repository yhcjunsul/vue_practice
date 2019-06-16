<template>
<v-container fluid fill-height>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <LoginForm></LoginForm>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
    name: "login",
    components: {
        LoginForm
    }
}
</script>
