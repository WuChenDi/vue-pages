const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  filenameHashing: true,
  pages: {
    index: {
      entry: resolve('src/pages/index/main.ts'),
      template: resolve('public/index.html'),
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    login: {
      entry: resolve('src/pages/login/main.ts'),
      template: resolve('public/login.html'),
      filename: 'login.html',
      title: 'login Page',
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_v', resolve('src/views'))
      .set('_c', resolve('src/components'))
      .end();
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false
  }
};
