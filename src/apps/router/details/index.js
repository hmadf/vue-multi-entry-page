import Vue from 'vue'
import VueRouter from 'vue-router'
import 'assets/js/lib/Lib'

import Add from './addApp'
import List from './listApp'



const routes = [
  { path: '/', component: Add },
  { path: '/list', component: List },
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
})


new Vue({
    router,
}).$mount('#app')
