<template>
  <panel jsonUrl='/static/jsons/update.json' :goodId='this.$route.params.goodId'>
      <h4 slot="header">编辑商品</h4>
      <span slot="button">确定</span>
      <span slot="result">编辑</span>
      <span slot="continue">
          <router-link to="/good">查看其它商品?</router-link>
      </span>
  </panel>
</template>

<script>
import panel from '@/components/panel'
export default {
    data(){
        return{
            jsonUrl:''
        }
    },
    components:{
        panel
    }
}
</script>

<style lang='scss' scoped>
   
</style>
