import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/join',
            name: 'join',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "join" */ './views/Join.vue')
        },
        {
            path: '/member_list',
            name: 'member_list',
            component: () =>
                import ( /* webpackChunkName: "member_list" */ './views/MemberList.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "login" */ './views/Login.vue')
        }
    ]
})