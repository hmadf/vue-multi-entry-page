<template lang="html">
   <div id="oran">
       <h3>{{msg}}</h3>
       <button @click="add()">购买一个句子</button>
       <button @click="ruduce()">丢一个</button>
   </div>
</template>

<script>

export default {
    data(){
        return{
            msg:'句子货架',
            price:100
        }
    },
    methods:{
        add(){
            this.$store.commit('ADD_PRICE',this.price)
        },
        ruduce(){
            this.$store.commit('REDUCE_PRICE',this.price)
        }
    }
}

</script>

<style lang="css">
</style>
