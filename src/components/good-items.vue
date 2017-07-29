<template>
    <el-row>
        <good-item v-for="(good,index) in goods" :key="index" :good="good"></good-item>
    </el-row>
</template>

<script>
import goodItem from '@/components/good-item'
import bus from '@/service/eventBus.js'
import axios from 'axios'
export default {
    data(){
        return{
            goods:[]
        }
    },
    methods:{
        http:function(pageSize,keyword){
            axios.get('static/jsons/goods.json',{params:{
            pageSize:pageSize,pageNumer:16,keyword:keyword
            }}).then(res=>{
                this.goods=res.data.data
            }).catch(err=>{
            });
        }
    },
    created(){
        let here=this;
        here.http(1);
        bus.$on('search',function(keyword){
            here.http(1,keyword);
            console.log(this);
        })
    },
    components:{
        goodItem
    }
}
</script>

<style>
  
</style>
