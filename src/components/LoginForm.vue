<template>
<div class="login">
    <v-card class="elevation-12">
        <v-toolbar dark color="indigo">
            <v-toolbar-title class="text-uppercase">{{ loginLabel }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form>
                <v-text-field prepend-icon="person" name="id" type="text" v-model="id">
                    <template v-slot:label>{{ idLabel }}</template>
                </v-text-field>
                <v-text-field prepend-icon="lock" name="password" id="password" type="password" v-model="password">
                    <template v-slot:label>{{ passwordLabel }}</template>
                </v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn dark color="deep-purple darken-3" @click="moveToJoinPage">{{ joinLabel }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn dark color="indigo darken-3" @click="loginPost">{{ loginLabel }}</v-btn>
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
            id: '',
            password: '',
            idLabel: 'ID',
            passwordLabel: 'Password',
            loginLabel: 'Log In',
            joinLabel: 'Join'
        }
    },
    methods: {
        loginPost: function () {
            let form = new FormData()
            form.append('id', this.id)
            form.append('password', this.password)

            this.axios.post(`${process.env.VUE_APP_API_URL}/login`, form).then(function () {
                alert("Log in 성공")

                router.push("/member_list")
            }, function () {
                alert("Log in 실패")
            })
        },
        moveToJoinPage: function () {
            router.push("/join")
        }
    }
}
</script>
