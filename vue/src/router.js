import Vue from 'vue';
import Router from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import Career from '@/views/Career.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'career',
      component: Career,
    },
    {
      path: '/career',
      name: 'career',
      component: Career,
    },
    {
      path: '*',
      name: 'error',
      component: Career,
    },
  ],
});
