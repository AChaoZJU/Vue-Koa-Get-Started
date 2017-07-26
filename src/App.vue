<template>
  <div id="app">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">商品</el-menu-item>
      <el-menu-item index="2">订单
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUi)

export default {
  name: 'app',
  data(){
    return{
      activeIndex:'1'
    }
  },
  methods:{
    handleSelect:function(){}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
