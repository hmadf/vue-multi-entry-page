<template>
    <div id='app'>
    <div class="warp" @click="change">
        我是一个测试用例
    </div>

  </div>
</template>

<script>

export default {
    components: {
    },
    data () {
        return {
            myData:[],
            t1:'',
            now:-1
        }
    },
    methods: {
        change (value) {
            console.log('欢迎来到vue',)
        },
        getHttp(){
            this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                wd:'a'
            },{
                jsonp:'cb'
            }).then(function(res){
            
            },function(res){
                
            });
        },
    },
    created(){
        this.getHttp()
    }
}
</script>

<style lang="sass" >
</style>
