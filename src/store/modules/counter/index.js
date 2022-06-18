import counterMutation from './mutation.js';
import counterActions from './actions.js';
import counterGetters from './getter.js';

export default {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: counterMutation,
  actions: counterActions,
  getters: counterGetters,
};
