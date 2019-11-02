<template>
  <el-col :span="6">
      <el-card>
          <router-link :to="router">
            <img :src="good.img">
            <div class="good-price">{{good.price}}</div>
            <div>{{good.name}}</div>
            <div class="sell-amount">
                成交量:<span>{{good.soldAmount === null ? 0 : good.soldAmount}}笔</span>
            </div>
        </router-link>
        </el-card>
  </el-col>
</template>

<script>
import priceService from '@/service/priceService'

export default {
    data(){
        return{
            router:''
        }
    },
    props:['good'],
    created(){
        this.good.price=priceService(this.good.price);
        this.router='/good/'+this.good.id;
    }
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
