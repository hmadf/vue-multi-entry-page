// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    // 网站模块名，例如 http://m.maodou.com:8089/module/apps/initlayer.html 中的
    //【apps】，默认为apps，修改这里的配置的同时，也要同时重命名/src/apps的这个文件夹名称
    moduleName:'apps',
    build: {
        envProd: require('./prod.env'),
        envStag:require('./stag.env'),
        index: path.resolve(__dirname, '../dist/index.html'),

        assetsSubDirectory: 'static',

        assetsRootProd: path.resolve(__dirname, '../dist'),
        assetsRootStag:path.resolve(__dirname, '../dev'),

        assetsPublicPathProud: '../../', //静态资源CDN地址
        assetsPublicPathStag: '../../',

        productionSourceMap: true, // 启用/禁用 Sourcemap I. e. the extract-text-webpack-plugin can handle them.
        productionGzip: false, //不压缩GZ
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8090,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static', // 编译输出的二级目录
        assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
        proxyTable: {target: "http://m.baidu.com:8090",changeOrigin: true}, // 需要 proxyTable 代理的接口（可跨域）
        cssSourceMap: false // 启用/禁用 Sourcemap I. e. the extract-text-webpack-plugin can handle them.
    }
}
