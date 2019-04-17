module.exports = {
  // 启动代码分割,不写有默认配置项
  chunks: 'all', // 参数all/initial/async，只对所有/同步/异步进行代码分割
  // minSize: 3000, // 大于30kb才会对代码分割
  // maxSize: 0,
  // minChunks: 2, // 打包生成的文件，当一个模块至少用多少次时才会进行代码分割
  // maxAsyncRequests: 5, // 同时加载的模块数最多是5个
  // maxInitialRequests: 3, // 入口文件最多3个模块会做代码分割，否则不会
  // automaticNameDelimiter: '~', // 文件自动生成的连接符
  // name: true,
  // cacheGroups: { // 对同步代码走缓存组
  //   vendors: {
  //     test: /[\\/]node_modules[\\/]/,
  //     priority: -10, // 谁优先级大就把打包后的文件放到哪个组
  //     filename: 'vendors.js'
  //   },
  //   default: {
  //     minChunks: 2,
  //     priority: -20,
  //     reuseExistingChunk: true, // 模块已经被打包过了，就不用再打包了，复用之前的就可以
  //     filename: 'common.js' // 打包之后的文件名   
  //   }
  // }
}
