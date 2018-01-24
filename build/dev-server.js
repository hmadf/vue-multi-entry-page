require('./check-versions')() // 检查 Node 和 npm 版本

var config = require('../config') // 获取 config/index.js 的默认配置

/*
** 如果 Node 的环境无法判断当前是 dev / product 环境
** 使用 config.dev.env.NODE_ENV 作为当前的环境
*/
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
// 一个可以强制打开浏览器并跳转到指定 url 的插件
var opn = require('opn')

// 使用 NodeJS 自带的文件路径工具
var path = require('path')
// 使用 express
var express = require('express')
// 使用 webpack
var webpack = require('webpack')
// 使用 proxyTable 用于连接，快速和浏览器同步
var proxyMiddleware = require('http-proxy-middleware')
// 使用 dev 环境的 webpack 配置
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

  /* 如果没有指定运行端口，使用 config.dev.port 作为运行端口 */

var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser

/* 使用 config.dev.proxyTable 的配置作为 proxyTable 的代理配置 */
/* 项目参考 https://github.com/chimurai/http-proxy-middleware */
var proxyTable = config.dev.proxyTable

/* 使用 express 启动一个服务 */
var app = express()
var compiler = webpack(webpackConfig) // 启动 webpack 进行编译
/* 启动 webpack-dev-middleware，将 编译后的文件暂存到内存中 */
//对更改的文件进行监控，编译，
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath, //output.publicPath
  quiet: true //显示到控制台
})
/* 启动 webpack-hot-middleware，也就是我们常说的 Hot-reload */
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

/* 当 html-webpack-plugin 模板更新的时候强制刷新页面 */
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// app.use('http://localhost:'+port, proxyMiddleware(proxyTable)); //需要代理就打开 
// 使用 connect-history-api-fallback 匹配资源，如果不匹配就可以重定向到指定地址
app.use(require('connect-history-api-fallback')())

// 将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上
app.use(devMiddleware)

// 将 Hot-reload 挂在到 express 服务上并且输出相关的状态、错误
app.use(hotMiddleware)

// 拼接 static 文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 为静态资源提供响应服务
app.use(staticPath, express.static('./static'))

//host 地址 已百度为例子 127.0.0.1 m.baidu.com
// var uri = 'http://m.maodou.com:' + port+'/apps/Demo/detail/index.html'
 var uri = 'http://localhost:' + port+'/apps/Demo/detail/index.html'

devMiddleware.waitUntilValid(function () {
  console.log('> 构建完成，已自动在浏览器打开页面，如未自动打开，请手工复制下面的链接，复制到浏览器里打开。')
  console.log('> Listening at ' + uri + '\n')
  // 如果不是测试环境，自动打开浏览器并跳到我们的开发地址
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
// 让我们这个 express 服务监听 port 的请求，并且将此服务作为 dev-server.js 的接口暴露
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log("\n正在构建初始化中，构建完成后，将自动在浏览器打开页面。");
  // when env is testing, don't need open it
})
