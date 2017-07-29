import Vue from 'vue'
import Router from 'vue-router'
import good from '@/pages/good'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: good
        },
        {
            path: '/good',
            name: 'good',
            component: good
        }
    ]
})