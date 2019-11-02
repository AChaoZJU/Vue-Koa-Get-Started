<template>
    <div>
        <el-row>
            <good-item v-for="(good,index) in goods" :key="good.id" :good="good"></good-item>
        </el-row>
        <good-paging :total='total' v-on:handleCurrentChange='paging' v-on:handleSizeChange='changeSize'></good-paging>
    </div>
</template>

<script>
import goodItem from '@/components/good-item'
import goodPaging from '@/components/good-paging'
import bus from '@/service/eventBus.js'
export default {
    data() {
        return {
            goods: [],
            total: 0,
            keyword: '',
            pageNumer: 1,
            pageSize: 10,
        }
    },
    methods: {
        http: function() {
            this.$http.post('/api/getGood', {
                pageSize: this.pageSize, pageNumber: this.pageNumer, keyword: this.keyword
            }).then(res => {
                const data = res.data;
                if (data.code === 2) {
                    this.$message({
                        type: 'info',
                        message: data.msg
                    })
                }
                this.goods = data.data
                this.total = Number.isInteger(data.msg) ?data.msg:0
            }).catch(err => {
            });
        },
        paging: function(val) {
            this.pageNumer = val;
            this.http();
        },
        changeSize: function(val) {
            this.pageSize = val;
            this.pageNumer = 1;
            this.http()
        }
    },
    created() {
        let here = this;
        here.http(1);
        bus.$on('search', function(keyword) {
            here.keyword = keyword;
            here.http();
        })
    },
    components: {
        goodItem,
        goodPaging
    }
}
</script>

<style>

</style>
