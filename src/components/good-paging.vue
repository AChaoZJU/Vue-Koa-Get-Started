<template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</template>

<script>
  export default {
    props:[
       'total'
    ],
    methods: {
      handleSizeChange(val) {
        this.$emit('handleSizeChange',val)        
      },
      handleCurrentChange(val) {
        this.$emit('handleCurrentChange',val);
      }
    },
    data() {
      return {

      };
    }
  }
</script>


<style>
  
</style>
