import Vue from 'vue';
import Vuex from 'vuex';

// eslint-disable-next-line import/extensions
import base from './resorce/content/base.js';

Vue.use(Vuex);
// eslint-disable-next-line camelcase
const { profile_url, contact_url } = base;
export default new Vuex.Store({
  state: {
    profile_url,
    contact_url,
  },
  mutations: {

  },
  actions: {

  },
});
