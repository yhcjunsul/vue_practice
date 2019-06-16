<template>
<div>
    <v-card class="elevation-12">
        <v-toolbar dark color="deep-purple">
            <v-toolbar-title class="text-uppercase">{{ joinLabel }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-text-field prepend-icon="person" name="id" type="text" v-model="id">
                <template v-slot:label>{{ idLabel }}</template>
            </v-text-field>
            <v-text-field prepend-icon="face" name="name" type="text" v-model="name">
                <template v-slot:label>{{ nameLabel }}</template>
            </v-text-field>
            <v-text-field prepend-icon="lock" name="password" id="password" type="password" v-model="password">
                <template v-slot:label>{{ passwordLabel }}</template>
            </v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="deep-purple darken-3" @click="joinPost">{{ joinLabel }}</v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
import router from '../router'

export default {
    name: "JoinForm",
    data() {
        return {
            id: '',
            password: '',
            name: '',
            idLabel: 'ID',
            passwordLabel: 'Password',
            nameLabel: 'Name',
            joinLabel: 'Join'
        }
    },
    methods: {
        joinPost: function () {
            let form = new FormData()
            form.append('id', this.id)
            form.append('password', this.password)
            form.append('name', this.name)

            this.axios.post(`${process.env.VUE_APP_API_URL}/member`, form).then(function () {
                alert("회원가입 성공")
                router.push("/")
            }, function () {
                alert("회원가입 실패")
            })
        }
    }
}
</script>
