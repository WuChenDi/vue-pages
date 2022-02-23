const ConcatSource = require('webpack-sources').ConcatSource;

class CollectModules {
  constructor(options) {
    this.options = Object.assign({}, options);
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(this.constructor.name, compilation => {
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tap(
        this.constructor.name,
        htmlPluginData => {
          const modules = {};
          modules.head = htmlPluginData.head || [];
          modules.body = htmlPluginData.body || [];
          htmlPluginData.head = [];
          htmlPluginData.body = [];
          const publicPath = this.options.publicPath;
          modules.publicPath = publicPath;
          modules.head.forEach(item => {
            const href = item.attributes.href;
            // console.log(publicPath, href, href.startsWith(publicPath));
            if (href && publicPath && href.startsWith(publicPath)) {
              item.attributes.href = href.substring(publicPath.length);
            }
          });
          modules.body.forEach(item => {
            const src = item.attributes.src;
            if (src && publicPath && src.startsWith(publicPath)) {
              item.attributes.src = src.substring(publicPath.length);
            }
          });
          compilation.assets['modules.js'] = new ConcatSource(
            'moduleLoaderLoadData(' + JSON.stringify(modules) + ');'
          );
          return htmlPluginData;
        }
      );
    });
  }
}

module.exports = CollectModules;
