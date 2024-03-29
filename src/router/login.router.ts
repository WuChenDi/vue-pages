import Vue from 'vue';
import Router from 'vue-router';
import Page from '@/views/login/page1';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: `${process.env.VUE_APP_PAGES}/login`,
  routes: [
    {
      path: '/page1/:accessToken*',
      name: 'page',
      component: Page
    },
    {
      path: '/page2',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login-about" */ '../views/login/page2.vue')
    }
  ]
});
