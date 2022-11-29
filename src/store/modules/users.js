import Auth from "../../services/auth";

export default {
  namespaced: true,
  state: {
    currentUser: { id: "", token: "" },
  },
  actions: {
    loginUser({ commit }, user) {
      return Auth.login(user).then((response) => {
        commit("SET_CURRENT_USER", response);
      });
    },
    registerUser(_, user) {
      return Auth.register(user);
    },
    async loadUser({ commit, state }) {
      if (state.currentUser.id && state.currentUser.token) {
        return state.currentUser;
      }
      try {
        const user = JSON.parse(localStorage.getItem("wf_user"));
        commit("SET_CURRENT_USER", user);
        return user;
      } catch (err) {
        return {};
      }
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
      localStorage.setItem("wf_user", JSON.stringify(user));
      state.currentUser = user;
    },
  },
};
