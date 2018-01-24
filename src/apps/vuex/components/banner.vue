<template lang="html">
    <div id="ban">
        <h3>{{ msg }}</h3>
        <button @click="add()"> 购买一根香蕉</button>
        <button @click="ruduce()"> 丢弃一根香蕉</button>
    </div>
</template>

<script>

export default {
    data(){
        return{
            msg:'香蕉货架',
            price:50
        }
    },
    methods:{
        add(){
            //通过调用stroe 下 mutations 提供的方法，来修改money 这个共享数据
            this.$store.commit('ADD_PRICE',this.price)
            //在调用store 提供的同步修改方法时，必须使用commit函数显示的调用
            //在调用store 提供的异步修改方法是，必须使用dispatch函数显示的调用
        },
        ruduce(){
            //this.$store.commit('REDUCE_PRICE',this.price)

            //在组件中使用store 提供的异步事件时，需要使用dispatch 显示的调用
             this.$store.dispatch('reduce_price',this.price)
        }
    }
}
</script>

<style lang="css">
</style>
