import Vue from 'vue';
import Login from './login.vue';
import router from '@/router/login.router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Login)
}).$mount('#app');
