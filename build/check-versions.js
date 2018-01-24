//这里面的代码主要是通过调用shell去打印出node和npm的版本信息,同时会给出版本依赖的警告信息.

var chalk = require('chalk')   // 用于在控制台输出高亮字体的插件

var semver = require('semver') // 语义化版本检查插件

var packageConfig = require('../package.json')

// 开辟子进程执行指令cmd并返回结果
function exec (cmd) {
    return require('child_process').execSync(cmd).toString().trim()
}

// node和npm版本需求
var versionRequirements = [
    {
        name: 'node',
        currentVersion: semver.clean(process.version),
        versionRequirement: packageConfig.engines.node
    },
    {
        name: 'npm',
        currentVersion: exec('npm --version'),
        versionRequirement: packageConfig.engines.npm
    }
]

module.exports = function () {
    var warnings = []
    // 依次判断版本是否符合要求
    for (var i = 0; i < versionRequirements.length; i++) {
        var mod = versionRequirements[i]
        if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            warnings.push(mod.name + ': ' +
                chalk.red(mod.currentVersion) + ' should be ' +
                chalk.green(mod.versionRequirement)
            )
        }
    }

    if (warnings.length) {
        console.log('')
        // 如果有警告则将其输出到控制台
        console.log(chalk.yellow('To use this template, you must update following to modules:'))
        console.log()
    for (var i = 0; i < warnings.length; i++) {
        var warning = warnings[i]
        console.log('  ' + warning)
    }
        console.log()
        process.exit(1)
    }
}
