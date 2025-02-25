import clear from 'rollup-plugin-clear'
import screeps from 'rollup-plugin-screeps'
import copy from 'rollup-plugin-copy'

let config
// 根据指定的目标获取对应的配置项
if (!process.env.DEST) console.log("未指定目标, 代码将被编译但不会上传")
else if (!(config = require("./.secret.json")[process.env.DEST])) {
    throw new Error("无效目标，请检查 secret.json 中是否包含对应配置")
}

// 根据指定的配置决定是上传还是复制到文件夹
const pluginDeploy = config && config.copyPath ?
    // 复制到指定路径
    copy({
        targets: [
            {
                src: 'dist/main.js',
                dest: config.copyPath
            },
            {
                src: 'dist/main.js.map',
                dest: config.copyPath,
                rename: name => name + '.map.js',
                transform: contents => `module.exports = ${contents.toString()};`
            }
        ],
        hook: 'writeBundle',
        verbose: true
    }) :
    // 更新 .map 到 .map.js 并上传
    screeps({ config, dryRun: !config })

export default {
    // 源代码的入口是哪个文件
    input: 'src/main.js',
    // 构建产物配置
    output: {
        // 输出到哪个文件
        file: 'dist/main.js',
        format: 'cjs',
        sourcemap: true
    }
};