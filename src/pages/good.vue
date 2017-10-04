<template>
    <div>
        <good-header></good-header>
        <good-items></good-items>
    </div>
</template>

<script>
import goodItems from '@/components/good-items'
import goodHeader from '@/components/good-header'
import jwt from 'jsonwebtoken' // 我们安装koa-jwt的时候会自动下载这个依赖

export default {
    data() {
        return {
            goods: []
        }
    },
    created() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo: () => {
            const token = sessionStorage.getItem('wepay-token');
            const email = sessionStorage.getItem('email');
            const sellerId =sessionStorage.getItem('sellerId')
        }
    },
    components: {
        goodItems,
        goodHeader
    }
}
</script>

<style>

</style>
