import Vue from 'vue'
Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function(el, binding, vnode, oldVnode) {
        // 聚焦元素
        console.log(el);
        console.log(binding);
        console.log(vnode);
        console.log(oldVnode);
    }
})

export default function priceService(price) {
    return '￥' + parseInt(price).toFixed(2)
}