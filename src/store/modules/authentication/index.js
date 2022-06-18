import authMutation from './mutation.js';
import authActions from './action.js';
import authGetters from './getters.js';

export default {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: authMutation,
  actions: authActions,
  getters: authGetters,
};
