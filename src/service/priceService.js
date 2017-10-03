import Vue from 'vue'
export default function priceService(price) {
    return '￥' + parseInt(price).toFixed(2)
}