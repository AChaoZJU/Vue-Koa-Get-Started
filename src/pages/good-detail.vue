<template>
    <el-row>
        <el-col :span='8'>
            <el-card>
                <img :src="good.imgUrl" class="good-img" alt="图片加载失败">
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card class="box-card">
                <div class="name">{{good.goodName}}</div>
                <el-card>
                    商品信息:<br><br> {{good.goodInfo}}
                </el-card>
                <div class="item">
                    价格:<span>{{good.unitPrice}}</span>
                </div>
                <div class="item">
                    库存：{{good.amount}}
                </div>
                <div>
                    <el-button @click='download'>下架该商品</el-button>
                    <el-button>
                        <router-link :to='updateRoute'>编辑该商品</router-link>
                    </el-button>
                </div>
                <div class="feedback" v-show="ifFeedback">
                    <div><img src="/static/icons/success.svg">下架成功!</div>
                    <div>您可以<span><router-link to='/good'>查看其它商品？</router-link></span></div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import price from '@/service/priceService.js'
    
    export default {
        data() {
            return {
                good: {},
                ifFeedback: false,
                updateRoute: ''
            }
        },
        created() {
            this.$http.get('/api/goodDetail/' + this.$route.params.goodId)
                .then(res => {
                    let code = res.data.code;
                    if (code === 0) {
                        this.good = res.data.result;
                        this.updateRoute = '/update/' + this.good.goodId;
                        this.good.unitPrice = price(this.good.unitPrice);
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.data.msg
                        });
                    }
                }).catch(error => {
    
                })
        },
        methods: {
            download: function() {
                this.$http.get('/api/deleteGood/' + this.good.goodId).then(res => {
                    this.ifFeedback = true;
                    let type;
                    if (res.data.code === 0) {
                        type = 'success'
                    } else {
                        type = 'error'
                    }
                    this.$message({
                        type: type,
                        message: res.data.msg
                    })    
                    setTimeout(() => {
                       this.$router.replace('/good')
                    }, 3000)
                }).catch(error => {
    
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
    .el-row {
        margin: 30px 0 0 30px;
        height: 200px;
        .el-col {
            margin-right: 30px;
            text-align: left;
            .el-card {
                margin-bottom: 20px;
                margin-top: 20px;
                .good-img {
                    width: 100%;
                }
            }
        }
    }
    
    .item {
        span {
            color: #FF0036;
            font-size: 30px;
            font-weight: bolder;
        }
    }
    
    .item {
        margin-bottom: 20px;
    }
    
    .update {
        margin-left: 15px;
    }
    
    .feedback {
        margin-top: 20px;
        img {
            height: 30px;
            margin-right: 10px;
            position: relative;
            top: 10px;
        }
        span {
            color: #2d8cba;
            margin: 0 5px;
        }
        span:hover {
            cursor: pointer;
        }
    }
</style>
