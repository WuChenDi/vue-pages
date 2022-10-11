const path = require('path');
const CollectModules = require('./script/CollectModules');
// const BundlesizeWebpackPlugin = require('./script/bundlesize-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

function resolve(dir) {
  return path.join(__dirname, dir);
}

const codeVersion = process.env.VUE_APP_CODE_VERSION || '';
const codePath = codeVersion ? `/${codeVersion}` : '';
const outputDir = `dist${codePath}`;
let publicPath = isDev ? '/' : `${process.env.VUE_APP_COS_URL}${codePath}`;
if (publicPath.startsWith('//')) {
  publicPath = publicPath.slice(1);
}

let objectProject = {
  index: {
    entry: resolve('src/pages/index/main.ts'),
    template: resolve('public/index.html'),
    filename: 'index.html',
    title: 'Index Page',
    // chunks: ['chunk-vendors', 'chunk-common', 'index']
    chunks: ['chunk-common', 'index']
  },
  login: {
    entry: resolve('src/pages/login/main.ts'),
    template: resolve('public/login.html'),
    filename: 'login.html',
    title: 'login Page',
    // chunks: ['chunk-vendors', 'chunk-common', 'login']
    chunks: ['chunk-common', 'login']
  }
};

let page = {};
// let outputDir = 'dist';
let projectname = process.argv[3] || '';
if (['production', 'development'].includes(process.env.NODE_ENV)) {
  page = objectProject;
} else {
  page[projectname] = objectProject[projectname];
  // outputDir = `dist${projectname}`;
}
module.exports = {
  publicPath,
  outputDir,
  filenameHashing: true,
  pages: page,
  productionSourceMap: false,
  configureWebpack: config => {
    const filename = isDev ? 'js/[name].js' : 'js/[name].[contenthash:8].js';
    // const filename = isDev ? 'js/[name].js' : 'js/[name].[hash].js';

    config.output.filename = filename;
    config.output.chunkFilename = filename;

    // console.log(config);
    // 按照模块大小自动分割第三方库
    // config.optimization.splitChunks = {
    //   maxInitialRequests: Infinity,
    //   minSize: 300 * 1024,
    //   chunks: 'all',
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name(module) {
    //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
    //         return `npm.${packageName.replace('@', '')}`;
    //       }
    //     }
    //   }
    // };

    // config.optimization.splitChunks = {
    //   maxInitialRequests: Infinity,
    //   minSize: 0,
    //   chunks: 'all',
    //   cacheGroups: {
    //     canvasVendor: {
    //       test: /[\\/]node_modules[\\/](html2canvas)[\\/]/,
    //       name: 'html2canvas'
    //     },
    //     echartsVendor: {
    //       test: /[\\/]node_modules[\\/](echarts)[\\/]/,
    //       name: 'echarts'
    //     },
    //     antvVendor: {
    //       test: /[\\/]node_modules[\\/](antv)[\\/]/,
    //       name: 'antv'
    //     },
    //     elVendor: {
    //       test: /[\\/]node_modules[\\/](element-ui)[\\/]/,
    //       name: 'element-ui'
    //     },
    //     benzAmrRecorderVendor: {
    //       test: /[\\/]node_modules[\\/](benz-amr-recorder)[\\/]/,
    //       name: 'benz-amr-recorder'
    //     },
    //     quillVendor: {
    //       test: /[\\/]node_modules[\\/](quill)[\\/]/,
    //       name: 'quill'
    //     },
    //     zrenderVendor: {
    //       test: /[\\/]node_modules[\\/](zrender)[\\/]/,
    //       name: 'zrender'
    //     },
    //     corejsVendor: {
    //       test: /[\\/]node_modules[\\/](core-js)[\\/]/,
    //       name: 'core-js'
    //     }
    //   }
    // };

    config.optimization = {
      splitChunks: {
        cacheGroups: {
          common: {
            name: 'chunk-common',
            chunks: 'initial',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
            reuseExistingChunk: true,
            enforce: true
          }
          // 抽离node_modules下的库为一个chunk
          // vendors: {
          //   name: 'chunk-vendors',
          //   test: /[\\/]node_modules[\\/]/,
          //   chunks: 'initial',
          //   priority: 2,
          //   reuseExistingChunk: true,
          //   enforce: true
          // }
        }
      }
    };
    config.plugins.push(
      new CollectModules({
        publicPath,
        CODE_VERSION: process.env.VUE_APP_CODE_VERSION
      })
    );
    // config.plugins.push(new BundlesizeWebpackPlugin({ sizeLimit: 3 }));
  },
  chainWebpack: config => {
    // 删除默认的splitChunk
    // config.optimization.delete('splitChunks');
    // config.module
    //   .rule('local')
    //   .test(/\.local$/)
    //   // .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
    //   .use('assets-lang-loader')
    //   .loader('./script/assets-lang-loader.js')
    //   .end();
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_v', resolve('src/views'))
      .set('_c', resolve('src/components'))
      .end();
  },
  // devServer: {
  //   open: true,
  //   host: 'localhost',
  //   port: 8081,
  //   https: false,
  //   hotOnly: false
  // }
  devServer: {
    // open: true,
    port: 8081,
    historyApiFallback: {
      verbose: true,
      rewrites: [
        { from: /^\/index\/.*$/, to: '/index.html' },
        // { from: /^\/login\/.*$/, to: '/login.html' }
        { from: /^\/login/, to: '/login.html' }
      ]
    }
  }
};
