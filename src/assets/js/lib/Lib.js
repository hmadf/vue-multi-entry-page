/*
 * @Author: hean
 * @Date: 2018-01-17 01:00:21
 * @Last Modified by: hean
 * @Last Modified time: 2018-01-24 23:21:48
 * 全局注册包括重置css rem 埋点统计
 * 创建全局自定义指令
 * 使用 v-mClick="{key:'value',eventid:'123456'}" 进行埋点
 * @param {binding} 埋点属性 eventid 等 可以省略
 * @param{FastClick}解决click点击300毫秒延时问题
*/

import FastClick from 'fastclick'
// import Performance from 'performance'
// import Vue from 'vue'

// import tracker from 'assets/js/util/tracker'
import 'assets/css/common.scss'
import 'assets/js/util/waprem'

// 解决click点击300毫秒延时问题
FastClick.attach(document.body)


// Vue.directive('mClick', function (el, binding) {
//     let cli = { 'tracking_type': 'click' }
//     let trackerObj = Object.assign({}, cli, binding.value)
//     el.onclick = function (e) {
//         tracker.send(
//             trackerObj,
//         )
//     }

// })

// export default {
//     Performance,
//     tracker,
// }
