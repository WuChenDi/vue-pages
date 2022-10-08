import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index.router';
import store from './store';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  zh: {
    message: {
      hello: '你好世界'
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
