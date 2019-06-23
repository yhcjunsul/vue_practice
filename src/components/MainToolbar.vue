<template>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SUGO.EE</span>
      </v-toolbar-title>
      <v-btn
        flat
        to="/"
      >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="doLoginOrLogOutByState"
      >
        <span class="mr-2">{{ loginBtnLabel }}</span>
      </v-btn>
    </v-toolbar>
</template>

<script>
import router from '../router'
import FbHelper from '@/modules/fbhelper.js'

export default {
    name: "MainToolbar",
    data() {
        return {
            isLogined: false,
        }
    },
    methods: {
        doLoginOrLogOutByState() {
            if (this.$store.state.isLogined) {
                let fbHelper = new FbHelper();
                fbHelper.fbLogout(response => {
                    this.$store.commit('logout');
                });
            } else {
                router.push('/login');
            }
        }
    },
    computed: {
        loginBtnLabel() {
            if (this.$store.state.isLogined) {
                return 'Log out'
            } else {
                return 'Log in'
            }
        },
        loginLink() {
            if (this.$store.state.isLogined) {
                return ''
            } else {
                return 'Log in'
            }
        }
    }
}
</script>