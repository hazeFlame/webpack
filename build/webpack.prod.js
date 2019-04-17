const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
};

module.exports = merge(commonConfig, prodConfig)
