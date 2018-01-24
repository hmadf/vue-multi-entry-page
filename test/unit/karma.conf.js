// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

let webpackConfig = require('../../build/webpack.test.conf')

module.exports = function karmaConfig(config) {
    config.set({
    // 浏览器
        browsers: ['PhantomJS'],
    // 测试框架
        frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
        reporters: ['spec', 'coverage'],
        files: ['./index.js'],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
            ],
        },
    })
}
