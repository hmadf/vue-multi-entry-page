var path = require('path')
var joins = path.join
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var glob = require('glob');


exports.assetsPath = function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
    options = options || {}
    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production', //是否开启CSS 压缩
            sourceMap: options.sourceMap //开启CSS提取
        }
    }
    // generate loader string to be used with extract text plugin
    function generateLoaders (loader, loaderOptions) {
        var loaders = [cssLoader]
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }
        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
    var output = []
    var loaders = exports.cssLoaders(options)
    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
    return output
}

exports.getMultiEntrys = function (globPath,type) {
    var projectName = findSync(globPath)
    var entries = {},
    basename, tmp, pathname ,url,result=[];
    projectName.forEach(function(item){
        if(item.includes(type)){
            result.push(item);
        }
    })
    result.forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));
        url = path.dirname(entry);
        tmp = url.replace('src/','')
        pathname = tmp + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
    });

    return entries;

}
// //获取多级的入口文件
exports.getMultiEntry = function (globPath) {
    
    var entries = {},
    basename, tmp, pathname ,url,result=[] ;
   
    glob.sync(globPath).forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));
        url = path.dirname(entry);
        tmp = url.replace('src/','')
        pathname = tmp + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
    });

    return entries;

}


var fs = require( 'fs' ),
    copyStat = fs.stat;
var findSync= function (startPath) {
    let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
            let fPath=joins(path,val);
            let stats=fs.statSync(fPath); //读取的文件信息
                if(stats.isDirectory()) finder(fPath); //是否为目录
            if(stats.isFile()) result.push(fPath); // 是否为文件
        });

    }
    finder(startPath);
    return result;
}
