<template>
  <panel jsonUrl='/api/upload'>
      <h4 slot="header">上架商品</h4>
      <span slot="button">上架</span>
      <span slot="result">上架</span>
      <span slot="continue">
            继续上架商品?
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
