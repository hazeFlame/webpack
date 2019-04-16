const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          }, 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 如果less文件里还引入了另外一个less文件，另一个文件还会从postcss-loader向上解析。如果不加，就直接从css-loader开始解析。
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
          {
            loader: 'postcss-loader'
          }, 
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              outputPath: 'images/',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', //打包后的图片名字，后缀和打包的之前的图片一样
              outputPath: 'images/' //图片打包后的地址
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/template.html",
      filename: "./index.html"
    })
  ],
};