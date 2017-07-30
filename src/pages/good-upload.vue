<template>
  <panel :jsonUrl='jsonUrl'>
      <h4 slot="header">上架商品</h4>
      <span slot="button">上架</span>
      <span slot="result">上架</span>
      <span slot="continue">上架</span>
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
        this.jsonUrl='/static/jsons/upload.json';
    },
    components:{
        panel
    }
}
</script>

<style lang='scss' scoped>
   
</style>
