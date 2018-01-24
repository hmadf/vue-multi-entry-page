
import Vue from 'vue'
// import Lib from 'assets/js/lib/Lib' //如果lib 有导出 可以这样写 然后再用
import 'assets/js/lib/Lib'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueResource)
// 添加統計 pv

new Vue({
    el: '#app',
    render: h => h(App),
})

