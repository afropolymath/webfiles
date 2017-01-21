import localForage from 'localforage';

import Auth from '../../services/auth';

export default {
  namespaced: true,
  state: {
    currentUser: {},
  },
  actions: {
    loginUser({ commit }, user) {
      return Auth.login(user)
      .then((response) => {
        commit('SET_CURRENT_USER', response.body);
      });
    },
    registerUser(context, user) {
      return Auth.register(user);
    },
    loadUser({ commit, state }) {
      if (state.currentUser.id && state.currentUser.token) {
        return Promise.resolve(state.currentUser);
      }
      return localForage.getItem('wf_user')
      .then((user) => {
        if (user) {
          return Auth.testToken(user)
          .then(() => {
            commit('SET_CURRENT_USER', user);
            return user;
          });
        }
        return Promise.resolve({});
      });
    },
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      /* eslint no-param-reassign: ["error", { "props": false }] */
      localForage.setItem('wf_user', user)
      .then(() => {
        state.currentUser = user;
      });
    },
  },
};
