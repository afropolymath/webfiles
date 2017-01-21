import Vue from 'vue';
import Vuex from 'vuex';

import users from './modules/users';
import files from './modules/files';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    files,
    users,
  },
});
