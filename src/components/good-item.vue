<template>
  <el-col :span="6">
      <div class="panel">
      <img :src="good.imgUrl">
      <div class="good-price">{{good.unitPrice}}</div>
      <div>{{good.goodName}}</div>
        <div class="sell-amount">
            成交量:<span>{{good.sellAmount}}笔</span>
        </div>
        </div>
  </el-col>
</template>

<script>
import priceService from '@/service/priceService'

export default {
    props:['good'],
    created(){
        this.good.unitPrice=priceService(this.good.unitPrice);
    }
}
</script>

<style  lang='scss' scoped>
   .el-col{
       text-align: left;
        padding: 20px;
        .panel{border: 1px solid #eee;
        
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
   }
</style>
