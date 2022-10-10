// 动态加载前端代码 - 多环境隔离
const MODULE_LOAD_BASE_URL = '/';

function moduleLoaderAjax(url, token, onSuccess, onFailed) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function (e) {
    if (request.readyState === 4) {
      if (request.status === 200) {
        let responseJson;
        try {
          responseJson = JSON.parse(request.responseText);
        } catch (ex) {
          console.log(url + '获取失败');
          onFailed && onFailed();
          return;
        }
        onSuccess && onSuccess(responseJson);
      } else {
        onFailed && onFailed();
      }
    }
  };
  request.open('POST', url, true);
  request.setRequestHeader('Authorization', 'Bearer ' + token);
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  request.setRequestHeader('Content-type', 'application/json;charset=utf-8');
  request.setRequestHeader('x-header-host', window.location.host);
  request.send(JSON.stringify({}));
}

// JSONP 加载模块, 从modules.js中触发， 不要删掉
function moduleLoaderLoadData(data) {
  const head = document.getElementsByTagName('head')[0];
  const publicPath = data.publicPath;
  const prefetchArray = data.head || [];
  for (let i = 0; i < prefetchArray.length; i++) {
    const item = prefetchArray[i];
    const hm = document.createElement(item.tagName);
    hm.setAttribute('href', publicPath + item.attributes.href);
    hm.setAttribute('rel', item.attributes.rel);
    if (item.attributes.as) {
      hm.setAttribute('as', item.attributes.as);
    }
    head.appendChild(hm);
  }
  const body = document.getElementsByTagName('body')[0];
  const initArray = data.body || [];
  for (let i = 0; i < initArray.length; i++) {
    const item = initArray[i];
    const hm = document.createElement(item.tagName);
    hm.src = publicPath + item.attributes.src;
    body.appendChild(hm);
  }
}

const SESSION_KEY_MODULE_VERSION = 'module_version';
const SESSION_KEY_MODULE_HAS_LOADED = 'module_has_loaded';
function setLoadVersion(version = 'master') {
  sessionStorage.setItem(SESSION_KEY_MODULE_VERSION, version);
}

function moduleLoaderLoad(version = 'master') {
  const { PATH, PAGES, NODE_ENV } = window.multiVersionConfigs;
  const path = PATH ? `${PATH}/` : '';
  let moduleJSFile = `${path}modules-` + PAGES + '.js';
  if (NODE_ENV === 'production') {
    moduleJSFile = `${path}modules-` + PAGES + '-' + version + '.js';
  }
  // 以JSONP的形式加载, 相对ajax请求json的好处是有缓存，且不用考虑跨域问题
  const body = document.getElementsByTagName('body')[0];
  const hm = document.createElement('script');
  hm.src = MODULE_LOAD_BASE_URL + moduleJSFile;
  body.appendChild(hm);
}

function moduleLoaderInit(multiVersionConfigs) {
  window.multiVersionConfigs = multiVersionConfigs;
  const version = sessionStorage.getItem(SESSION_KEY_MODULE_VERSION) || 'master';
  setLoadVersion(version);
  moduleLoaderLoad(version);
}

function moduleChosen(token, path, resolve, reject) {
  if (sessionStorage.getItem(SESSION_KEY_MODULE_HAS_LOADED) !== null) {
    resolve();
    return;
  }
  const getCodeVersionUrl = '/v3/backend-h5-server/public/api/get-code-version';
  moduleLoaderAjax(getCodeVersionUrl, token, function (response) {
    let version = 'master';
    if (response && response.data && response.data.version) {
      version = response.data.version || 'master';
      version = version.toLowerCase();
    }
    sessionStorage.setItem(SESSION_KEY_MODULE_HAS_LOADED, version);
    const currentVersion = sessionStorage.getItem(SESSION_KEY_MODULE_VERSION) || 'master';
    if (currentVersion !== version) {
      setLoadVersion(version);
      reject();
      window.location.replace(path);
    } else {
      resolve();
    }
  }, function () {
    let version = 'master';
    sessionStorage.setItem(SESSION_KEY_MODULE_HAS_LOADED, version);
    setLoadVersion(version);
    console.error('加载版本信息失败，使用默认版本');
    resolve();
  });
}
