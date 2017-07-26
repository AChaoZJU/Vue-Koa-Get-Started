<template>
  <el-col :span="6">
      <img :src="good.imgUrl">
      <div class="good-price">{{good.unitPrice}}</div>
      <div>{{good.goodName}}</div>
        <div class="sell-amount">
                    成交量:<span>{{good.sellAmount}}笔</span>
        </div>
  </el-col>
</template>

<script>
export default {
    props:['good'],

}
</script>

<style  lang='scss' scoped>
   .el-col{
       text-align: left;
        padding: 20px;
        img {
            width: 100%;
            height: 200px;
        }
        .good-price {
            color: #ff0036;
        }
        .sell-amount {
            border-top: 1px solid #eee;
            span {
                color: #b57c5b;
                font-size: 20px;
                font-weight: 700;
            }
        }
   }
</style>
