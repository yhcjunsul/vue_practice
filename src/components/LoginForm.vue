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
import FbHelper from '@/modules/fbhelper.js'

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
            /** TODO : 서버에 facebook id와 name을 저장하도록 수정이 필요 */
            const fbHelper = new FbHelper();

            fbHelper.getFbLoginStatus(response => {
                console.log(response)
            })

            fbHelper.fbLogin(response => {
                if (response.status === 'connected') {
                    fbHelper.fbApi(response => {
                        console.log(response);
                    })

                    this.$store.commit('login');

                    router.push('/');
                } else {
                    alert("Facebook login 실패")
                }
            })
        }
    }
}
</script>
