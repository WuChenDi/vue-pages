module.exports = {
  publicPath: './',
  filenameHashing: true,
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    login: {
      entry: 'src/pages/login/main.js',
      template: 'public/login.html',
      filename: 'login.html',
      title: 'login Page',
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    }
  },
  productionSourceMap: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false
  }
}
