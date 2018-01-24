require('./check-versions')() // 检查 Node 和 npm 版本

//env参数可能是stag|prod（测试|生产）环境
var env = process.argv[2]

process.env.NODE_ENV = env //指定环境

var ora = require('ora') // 一个 loading 插件

var rm = require('rimraf') //提供node版本的UNIX的rm -rf命令

var path = require('path') //使用Node自带的文件路径插件

var chalk = require('chalk') //控制台高亮显示的插件

var webpack = require('webpack')

var config = require('../config')

var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('构建中'+ env +'...')

var deleteDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsRootProd
    : config.build.assetsRootStag

spinner.start() // 开始 loading 动画
//删除dev 或 dist 目录 
rm(deleteDirectory, err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        // 编译成功的回调函数
        spinner.stop()
        if (err) throw err //编译失败就抛出异常
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
