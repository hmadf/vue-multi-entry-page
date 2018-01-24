<template>
    <div class="box">
        <div class="mainWarp" @click="change">
          click ====> http://localhost:8090/apps/vuex/index.html vuex
        </div>
        <div class="mainWarp" @click="go">
          click ====> http://localhost:8090/apps/vuex/index.html router
        </div>
        <img :src="img " alt=""> 
        <div id="box">
        <input type="button" value="更新数据" @click="update">
        <input type="button" value="销毁组件" @click="destroy">
        {{msg}}
    </div>
    </div>
</template>

<script>
import api from '../../../../assets/js/util/api'
export default {
    data () {
        return {
            msg:'welcome vue2.0',
            img:'https://cn.vuejs.org/images/logo.png'
        }
    },
    methods: {
        change () {
           window.location="http://localhost:8090/apps/vuex/index.html"
        },
        go(){
             window.location="http://localhost:8090/apps/router/details/index.html"
        },
        getHTTP(){
            this.$http.jsonp('https://shop.juanpi.com/zxg', {
                    //请求参数
                    params: {
                        key: 'zuixinzhekou',
                        type: '1',
                        zhouyi_ids: 'p8_c3_l1_18_51_5',
                        machining: 'gsortzxg',
                        page: 1,
                        rows: '10',
                        dtype: 'JSONP',
                        cm: '1',
                        cm_channel: '1'
                    }
                    //回调函数名字  jsonp:'callback'
                }).then(function(res) {
                    console.log(res.body.list);
                })
        },
        update(){
            this.msg='大家好';
        },
        destroy(){
            this.$destroy();
        }
    },
    beforeCreate(){
         console.log('组件实例刚刚被创建');
    },
    created(){
        console.log(api.domain)
        this.getHTTP()
        console.log('实例已经创建完成');
    },
    beforeMount(){
        console.log('模板编译之前');
    },
    mounted(){
        console.log('模板编译完成');
    },
    beforeUpdate(){
        console.log('组件更新之前');
    },
    updated(){
        console.log('组件更新完毕');
    },
    beforeDestroy(){
        console.log('组件销毁之前');
    },
    destroyed(){
        console.log('组件销毁之后');
    }
}
</script>

<style lang="scss">
.box{
    .mainWarp{
        font-size: 20px ;
        padding-bottom: 100px;
    }
    img{
        width: 100%;
    }
}
</style>
