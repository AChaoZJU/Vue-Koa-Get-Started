<template>
    <el-row>
        <good-item v-for="(good,index) in goods" :key="index" :good="good"></good-item>
    </el-row>
</template>

<script>
import goodItem from '@/components/good-item'
import axios from 'axios'
export default {
    data(){
        return{
            goods:[]
        }
    },
    created(){
        axios.get('static/jsons/goods.json',{params:{
            pageSize:1,pageNumer:16
        }}).then(res=>{
            this.goods=res.data.data
        }).then(err=>{

        });
    },
    components:{
        goodItem
    }
}
</script>

<style>
  
</style>
