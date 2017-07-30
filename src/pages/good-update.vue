<template>
  <panel :jsonUrl='jsonUrl'>
      <h4 slot="header">编辑商品</h4>
      <span slot="button">确定</span>
      <span slot="result">编辑</span>
      <span slot="continue">编辑</span>
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
    created(){
        this.jsonUrl='/static/jsons/update.json';
    },
    components:{
        panel
    }
}
</script>

<style lang='scss' scoped>
   
</style>
