import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

const isDev = process.env.NODE_ENV === 'development';

export default new Router({
  mode: 'history',
  base: `${isDev ? '/' : process.env.VUE_APP_PAGES}/`,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "index-about" */ '../views/About.vue')
    }
  ]
});
