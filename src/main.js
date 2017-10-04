// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
//Promise的finally回调
Promise.prototype.finally = function(callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};

router.beforeEach((to, from, next) => {
        const token = sessionStorage.getItem('wepay-token');
        if (to.path === '/') {
            if (!!token && token !== 'null') {
                next('/good')
            } else {
                next();
            }
        } else {
            if (!!token && token !== 'null') {
                Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格                
                next();
            } else {
                next('/')
            }
        }
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})