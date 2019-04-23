const webpack = require('webpack')
const path = require('path')
const config = require('./config')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // sourcemap
  output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
  devServer: {
		contentBase: path.resolve(config.ROOT_PATH, 'dist'),
    open: false,
    compress: true,
    port: 9999,
    proxy: { // 配置跨域，访问的域名会被代理到本地的3000端口
      '/api': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 如果less文件里还引入了另外一个less文件，另一个文件还会从postcss-loader向上解析。如果不加，就直接从css-loader开始解析。
              modules: true, // 开启css的模块打包。css样式不会和其他模块发生耦合和冲突
              sourceMap: true, 
            },
          }, 
          {
            loader: 'less-loader',
            options: {
              strictMath: true,
              noIeCompat: true
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 使用模块热更新插件
  ],
};

