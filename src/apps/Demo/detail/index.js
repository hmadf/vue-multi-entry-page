
import Vue from 'vue'
import 'assets/js/util/vueFilter'
import axios from 'axios'
import VueResource from 'vue-resource'
import 'assets/js/lib/Lib'
import App from './App'

Vue.use(VueResource)
// 添加統計 pv

Vue.prototype.axios = axios

// new Vue({
//   el: '#app',
//   render: h => h(App) 2.0更简洁的写法
// })

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App,
    },

})

