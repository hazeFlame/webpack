const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // 直接引用的css文件
      chunkFilename: '[name].chunk.css' // 间接引用的css文件
    })
  ]
};

module.exports = merge(commonConfig, prodConfig)
