export default function priceService(price) {
    return '￥' + parseInt(price).toFixed(2)
}