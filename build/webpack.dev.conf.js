var utils = require('./utils')

var webpack = require('webpack')

var config = require('../config') // 同样的使用了 config/index.js

var merge = require('webpack-merge') // 使用 webpack 配置合并插件

var baseWebpackConfig = require('./webpack.base.conf')// 加载 base.conf

var HtmlWebpackPlugin = require('html-webpack-plugin')

//可识别某些类型的webpack错误并清理，汇总和优先化它们以提供更好的开发者体验。
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// 将 Hol-reload 相对路径添加到 webpack.base.conf 的 对应 entry 前
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// 将我们 webpack.dev.conf.js 的配置和 webpack.base.conf.js 的配置合并
var webpackConfig  = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',

    plugins: [
        /* definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串 */
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        /* HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件 */
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new FriendlyErrorsPlugin(),

    ]
})

//多页面 指定多个入口 push 进去
// var pages =  utils.getMultiEntrys('./src/'+config.moduleName,'index.html');
var pages = utils.getMultiEntry('./src/'+config.moduleName+'/**/index.html'); // 获得入口js文件

for (var pathname in pages) {
    // 配置生成的html文件，定义路径等
    // console.log('abc',pages[pathname])
    // var projectName = pathname.split('/').pop()
    var conf = {
        // filename: pathname +'/'+ projectName+'.html',
        filename: pathname +'.html',
        template: pages[pathname], // 模板路径
        chunks: ['common','manifest',pathname], // 每个html引用的js模块 公共的和私有的
        inject: true           // js插入位置底部
    };
    // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}
module.exports = webpackConfig ;
