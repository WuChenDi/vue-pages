import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index.router';
import store from './store';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'hello world',
      // logo: '../../assets/loginLogo.png'
      // ! 不可行, hash 会变
      logo: '/img/loginLogo.451dd7b8.png'
    }
  },
  zh: {
    message: {
      hello: '你好世界',
      // logo: '../../assets/logo.png'
      // ! 不可行, hash 会变
      logo: '/img/logo.82b9c7a5.png'
    }
  }
};

const i18n = new VueI18n({
  silentTranslationWarn: true,
  locale: 'zh',
  messages
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
