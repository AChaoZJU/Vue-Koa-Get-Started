<template>
    <el-row>
        <el-col :span="6">
            <el-input
            placeholder="请输入商品名称"
            icon="search"
            v-model='keyword'
            :on-icon-click="search">
            </el-input>
        </el-col>
    </el-row>
</template>

<script>
import bus from '@/service/eventBus.js'
export default {
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        search:function(){
            bus.$emit('search',this.keyword)
        }
    }
}
</script>

<style lang='scss' scoped>
    .el-row{
        margin-top: 30px;
        margin-left: 30px;
    }
</style>
