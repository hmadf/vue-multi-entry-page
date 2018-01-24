
import Vue from 'vue'
import Vuex from 'vuex'
import 'assets/js/lib/Lib'
import 'assets/js/util/waprem'
import 'assets/css/common.scss'
import App from './App'

Vue.config.productionTip = false
// 导入vuex 模块

Vue.use(Vuex)


// 创建vuex实例
let store = new Vuex.Store({
    state: {// 共享的数据由 state 定义

        money: 0,
    },

    mutations: { // 同步操作共享数据的方法
        ADD_PRICE(state, price) { // 增加商品总价的方法
            state.money += price  // state 由程序自动传递进来的变量代表着声明的state
                                // price 是由调用该方法的函数传递进来的

        },
        REDUCE_PRICE(state, price) { // 减少商品总价的方法
            state.money -= price

        },
    },

    actions: { // 异步操作共享数据的方法
        reduce_price(context, pirce) {
            setTimeout(function () {
                context.commit('REDUCE_PRICE', pirce)
            }, 1000)
        },
    },
    getters: {
        allMoney(state) {
            return 'vuex例子商品总价为' + state.money + '.00'
        },
    },
})
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    store, // 把vuex 实例注册进vue实例中
})
