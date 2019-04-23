# webpack

- mkdir webpack && cd $_ 创建webpack文件夹
- mkdir -p src 增加src目录
- npm init -y 初始化

- yarn add webpack --D 安装webpack
- yarn add webpack-cli --D 安装webpack-cli

- yarn add webpack-dev-server 代码热更新

```js
  "scripts": {
    "start": "webpack-dev-server --open --mode development",
    "build": "webpack --mode production"
  }
```

- yarn add html-webpack-plugin -D  处理HTML 修改webpack.config
> * file-loader 支持加载图片文件
> * babel-loader 支持babel
> * html-loader 支持html
> * url-loader 支持将小图片转换成base64
> * style-loader
> * css-loader
> * less-loader

```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
                options: {
                  name:'[name].[ext]', //打包后的图片名字，后缀和打包的之前的图片一样
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
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
  }
```
### 配置Babel
- webpack中的babel-loader 便担任着将ES6语法转换为浏览器所能理解语法的工作。
- @babel/preset-env 负责将ES6语法转换成ES5
- @babel/preset-react 负责将JSX语法转化为JavaScript
- @babel/plugin-proposal-class-properties 可以省略类中consructor

-yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties --save-dev

#### 新建 .babelrc 文件 配置
```js
  {
    "presets": [
      "@babel/preset-env", 
      "@babel/preset-react"
    ], 
    "plugins": ["@babel/plugin-proposal-class-properties"] 
  }
```
#### CSS
- mini-css-extract-plugin 抽离 css
- optimize-css-assets-webpack-plugin 压缩css
> 修改webpack 配置 package.json 修改 "sideEffects": ["*.css"] 除了css文件，其余的都TreeShaking

### 环境变量使用
- 通过在package.json 传入环境变量 --env.production 
- 重构webpack config文件 在common文件中进行marge