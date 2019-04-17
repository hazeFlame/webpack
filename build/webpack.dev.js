const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
  mode: 'development',
  optimization: {
    usedExports: true // import { } from '...' 清除未使用的模块
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
		contentBase: './dist',
    open: false,
    compress: true,
    port: 9999,
    proxy: {//配置跨域，访问的域名会被代理到本地的3000端口
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = merge(commonConfig, devConfig)
