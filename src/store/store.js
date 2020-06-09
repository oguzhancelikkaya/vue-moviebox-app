import Vue from 'vue';
import Vuex from 'vuex';

import movies from './modules/movies.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
      movies
  }
})