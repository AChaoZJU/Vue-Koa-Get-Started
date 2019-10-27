import Vue from 'vue'
import Router from 'vue-router'
import good from '@/pages/good'
import goodDetail from '@/pages/good-detail'
import upload from '@/pages/good-upload'
import update from '@/pages/good-update'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/good',
            name: 'good',
            component: good
        }, {
            path: '/good/:id',
            name: 'goodDetial',
            component: goodDetail
        }, {
            path: '/upload',
            name: 'upload',
            component: upload
        }, {
            path: '/update/:id',
            name: 'update',
            component: update
        }
    ]
})