/* eslint-disable */
//这里主要是开发服务器热重载脚本，用来实现开发阶段的页面自动刷新.

require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload()
    }
})
