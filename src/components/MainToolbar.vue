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
import * as types from '@/vuex/mutation_types.js'

export default {
    /** 쿠키를 이용한 세션 관리 추가 */
    name: "MainToolbar",
    data() {
        return {
            isLogined: false,
        }
    },
    methods: {
        doLoginOrLogOutByState() {
            if (this.$store.getters.getIsLogined) {
                let fbHelper = new FbHelper();
                fbHelper.fbLogout().then(response => {
                    console.log(response);
                    this.$store.commit(types.IS_LOGINED, false);
                });
            } else {
                router.push('/login');
            }
        },
        checkLoginStatus() {
            let fbHelper = new FbHelper();
            fbHelper.getFbLoginStatus().then(response => {
                console.log(response)
                if (response.state === 'connected') {
                    this.$store.commit(types.IS_LOGINED, true);
                } else {
                    this.$store.commit(types.IS_LOGINED, false);
                }
            });
        }
    },
    mounted() {
        this.checkLoginStatus();
    },
    computed: {
        loginBtnLabel() {
            if (this.$store.getters.getIsLogined) {
                return 'Log out'
            } else {
                return 'Log in'
            }
        },
        loginLink() {
            if (this.$store.getters.getIsLogined) {
                return ''
            } else {
                return 'Log in'
            }
        }
    }
}
</script>