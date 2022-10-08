const loaderUtils = require('loader-utils');

const { getOptions, interpolateName } = loaderUtils;

function shouldTransform(limit, size) {
  if (typeof limit === 'boolean') {
    return limit;
  }

  if (typeof limit === 'string') {
    return size <= parseInt(limit, 10);
  }

  if (typeof limit === 'number') {
    return size <= limit;
  }

  return true;
}

function normalizeFallback(fallback, originalOptions) {
  let loader = 'file-loader';
  let options = {};

  if (typeof fallback === 'string') {
    loader = fallback;

    const index = fallback.indexOf('?');

    if (index >= 0) {
      loader = fallback.substr(0, index);
      options = loaderUtils.parseQuery(fallback.substr(index));
    }
  }

  if (fallback !== null && typeof fallback === 'object') {
    ({ loader, options } = fallback);
  }

  options = Object.assign({}, originalOptions, options);

  delete options.fallback;

  console.log(loader, options);

  return { loader, options };
}

/**
 * 替换图片国际化资源 loader
 *
 * @param {*} content 资源输入，对于第一个执行的 loader 为资源文件的内容；后续执行的 loader 则为前一个 loader 的执行结果
 * @param {*} sourceMap 可选参数，代码的 sourcemap 结构
 * @param {*} meta 可选参数，其它需要在 Loader 链中传递的信息，比如 posthtml/posthtml-loader 就会通过这个参数传递参数的 AST 对象
 */
module.exports = function (content, sourceMap, meta) {
  // Loader Options
  const options = getOptions(this) || {};
  console.log('');
  console.log(options?.fallback, options);

  // // Normalize the fallback.
  // const {
  //   loader: fallbackLoader,
  //   options: fallbackOptions
  // } = normalizeFallback(options.fallback, options);

  // // Require the fallback.
  // // eslint-disable-next-line global-require, import/no-dynamic-require
  // const fallback = require(fallbackLoader);

  // // Call the fallback, passing a copy of the loader context. The copy has the query replaced. This way, the fallback
  // // loader receives the query which was intended for it instead of the query which was intended for url-loader.
  // const fallbackLoaderContext = Object.assign({}, this, {
  //   query: fallbackOptions
  // });

  // return fallback.call(fallbackLoaderContext, content);

  // const context = options.context || this.rootContext;
  // const name = options.name || '[contenthash].[ext]';

  // // 拼接最终输出的名称
  // const url = interpolateName(this, name, {
  //   context,
  //   content,
  //   regExp: options.regExp
  // });
  // console.log('🚀 ~ file: assets-lang-loader.js ~ line 89 ~ url', url);

  // console.log(rawOptions);

  // this.cacheable(false);

  // console.log('AssetsLangLoader...');

  // console.log(content);

  return content;
};
