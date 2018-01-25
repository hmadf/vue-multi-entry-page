var path = require('path')

var utils = require('./utils')

var webpack = require('webpack')

var config = require('../config')

var glob = require('glob');

// var entries =  utils.getMultiEntrys('./src/'+config.moduleName,'index.js'); // 获得入口js文件
var entries =  utils.getMultiEntry('./src/'+config.moduleName+'/**/index.js'); // 获得入口js文件

var chunks = Object.keys(entries); //提取公共模块需要

// console.log(chunks)

var projectRoot = path.resolve(__dirname, '../')

// const vuxLoader = require('vux-loader')

var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var webpackConfig = {
    //https://segmentfault.com/a/1190000008288240
    //key还可以是路径字符串。此时webpack会自动生成路径目录，并将路径的最后作为[name]。这个特性在多页面配置下也是很有用的
    entry:entries,
    output: {
        path: config.build.assetsRootProd,
        filename: utils.assetsPath('js/[name].js'),
        publicPath: process.env.NODE_ENV === 'production'
          ? config.build.assetsPublicPath
          : config.dev.assetsPublicPath
    },
    resolve: {
        //自动补全
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                query: {

                    name: utils.assetsPath('img/[name].[hash:8].[ext]')
                }
            },
        ]
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: chunks,
            minChunks: chunks.length >= 2 ?  chunks.length : 2
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['common']
        }),

    ]
}



module.exports = webpackConfig
