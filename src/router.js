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
            path: '/postedit',
            name: 'postedit',
            component: () =>
                import ( /* webpackChunkName: "postedit" */ './views/PostEdit.vue')
        },
        {
            path: '/postview',
            name: 'postview',
            component: () =>
                import ( /* webpackChunkName: "postview" */ './views/PostView.vue')
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "login" */ './views/Login.vue')
        }
    ]
})