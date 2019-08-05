/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import Router from 'vue-router';

import Career from '@/views/Career.vue';
import Contact from '@/views/Contact.vue';
import Accounts from '@/views/Accounts.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts,
    },
    {
      path: '*',
      name: 'carrer',
      component: Career,
    },
  ],
});
