<template lang="html">
  <h1 @click="change">{{allPrice+"click返回"}}</h1>
</template>

<script>
export default {
    computed :{
        allPrice(){
            //不提倡直接取值
            //return this.$store.state.money ;
            return this.$store.getters.allMoney
        }
    },
    methods:{
        change(){
             window.location="http://localhost:8090/apps/Demo/detail/index.html"
        }
    }
}
</script>

<style lang="css">
</style>
