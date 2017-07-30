import Vue from 'vue'
import Router from 'vue-router'
import good from '@/pages/good'
import goodDetail from '@/pages/good-detail'
import upload from '@/pages/good-upload'
import update from '@/pages/good-update'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/good'
        },
        {
            path: '/good',
            name: 'good',
            component: good
        }, {
            path: '/good/:goodId',
            name: 'goodDetial',
            component: goodDetail
        }, {
            path: '/upload',
            name: 'upload',
            component: upload
        }, {
            path: '/update',
            name: 'update',
            component: update
        }
    ]
})