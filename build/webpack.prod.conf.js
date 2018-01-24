var path = require('path')

var utils = require('./utils')

var webpack = require('webpack')

var config = require('../config')

var merge = require('webpack-merge')

var ExtractTextPlugin = require('extract-text-webpack-plugin')

var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var baseWebpackConfig = require('./webpack.base.conf')

var HtmlWebpackPlugin = require('html-webpack-plugin')

var env = process.env.NODE_ENV === 'production'
    ? config.build.envProd
    : config.build.envStag

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: true ,
            extract: true
        })
    },
    output: {
        filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash:8]js'), //非入口文件的命名
        path:process.env.NODE_ENV === 'production'
        ? config.build.assetsRootProd
        : config.build.assetsRootStag,
        publicPath: process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPathProd
        : config.build.assetsPublicPathStag
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env //webpack配置的全局标识
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
         /* 将 css 文件分离出来 */
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash:8].css')
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin(),

    ]
})

//配置项目分析工具加载下方插件
if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
//构建生成多页面的HtmlWebpackPlugin配置
// var pages =  utils.getMultiEntrys('./src/'+config.moduleName,'index.html');
var pages = utils.getMultiEntry('./src/'+config.moduleName+'/**/index.html'); // 获得入口js文件

for (var pathname in pages) {
var conf = {
    filename: pathname+'.html',
    template: pages[pathname], // 模板路径
    chunks: ['common','manifest',pathname], // 每个html引用的js模块 公共的和私有的
    inject: true,              // js插入位置
    hash:false ,
    chunksSortMode: 'dependency',
    minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeComments: true
    }
};

    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}
// console.log(webpackConfig);
module.exports = webpackConfig
