<template>
  <el-input
  placeholder="请输入商品名称"
  icon="search"
  v-model='keyword'
  :on-icon-click="search">
</el-input>

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

<style>
  
</style>
