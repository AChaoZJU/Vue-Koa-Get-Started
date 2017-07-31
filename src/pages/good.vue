<template>
    <div>
        <good-header></good-header>
        <good-items></good-items>
    </div>
</template>

<script>
import goodItems from '@/components/good-items'
import goodHeader from '@/components/good-header'
export default {
     data(){
        return{
            goods:[]
        }
    },
    components:{
        goodItems,
        goodHeader
    }
}
</script>

<style>
  
</style>
