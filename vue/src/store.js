import Vue from 'vue';
import Vuex from 'vuex';

// eslint-disable-next-line import/extensions
import base from './resorce/content/base.js';

Vue.use(Vuex);
// eslint-disable-next-line camelcase
const {
  profileUrl,
  contactUrl,
  accounts,
  career,
  githubUrl,
} = base;
export default new Vuex.Store({
  state: {
    profileUrl,
    contactUrl,
    accounts,
    career,
    githubUrl,
  },
  mutations: {

  },
  actions: {

  },
});
