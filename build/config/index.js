// 配置文件
const path = require('path');
const ROOT_PATH = path.resolve(__dirname, '../../')
const APP_PATH = path.resolve(ROOT_PATH, 'src') // 解析为绝对路径
const STATIC_PATH = path.resolve(ROOT_PATH, 'static')

console.log(__dirname)
console.log(process.cwd())
console.log(path.resolve(__dirname))

console.log(__filename)
console.log(path.resolve(__filename))

console.log(path.resolve(__dirname, './src'))
console.log(path.resolve(__dirname, 'src'))
console.log(path.resolve(__dirname, 'src/'))

console.log(path.resolve(__dirname, '/src'))
console.log(path.resolve('/src'))

module.exports = {
  ROOT_PATH: ROOT_PATH,
  APP_PATH: APP_PATH,
  STATIC_PATH: STATIC_PATH,
}