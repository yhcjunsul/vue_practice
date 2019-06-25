<template>
<div class="login">
    <v-card class="elevation-12">
        <v-toolbar dark color="indigo darken-3">
            <v-toolbar-title class="text-uppercase">{{ loginLabel }}</v-toolbar-title>
        </v-toolbar>
        <v-card-actions>
            <v-btn block dark color="indigo" @click="loginFb">{{ loginWithFb }}</v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
import router from '../router'

export default {
    name: "LoginForm",
    data() {
        return {
            loginLabel: 'Login',
            loginWithFb: 'Facebook Login'
        }
    },
    methods: {
        loginFb: function () {
            /** TODO : 서버에 facebook id를 저장하도록 수정이 필요 */
            this.$store.dispatch('login').then(response => {
                console.log(response)
                router.push('/');
            }, response => {
                console.log(response);
                alert("Login 실패");
            })
        }
    }
}
</script>
