const { resolve } = require('path');
const { statSync } = require('fs');

class BundlesizeWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    const { sizeLimit } = this.options;
    console.log(sizeLimit);
    // console.log('bundle size plugin');
    // compiler.hooks.compile.tap('BundlesizeWebpackPlugin', compilationParams => {
    //   console.log('compile', compilationParams);
    // });
    compiler.hooks.done.tap('BundlesizeWebpackPlugin', stats => {
      // console.log('done', stats.compilation.outputOptions);
      // get path and filename from outputOptions
      const { path, filename } = stats.compilation.outputOptions;
      // generate a bundle path
      const bundlePath = resolve(path, filename);
      // get file size in KB
      const { size } = statSync(bundlePath);
      const bundleSize = size / 1024;
      if (bundleSize < sizeLimit) {
        console.log(
          'Safe: Bundle-Size',
          bundleSize,
          '\n SIZE LIMIT:',
          sizeLimit
        );
      } else {
        console.log(
          'Unsafe: Bundle-Size',
          bundleSize,
          '\n SIZE LIMIT:',
          sizeLimit
        );
      }
    });
  }
}

module.exports = BundlesizeWebpackPlugin;
