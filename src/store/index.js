import { createStore } from 'vuex';
import counterModule from './modules/counter/index.js'

export default createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    changeLoggedState(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('changeLoggedState', { isAuth: true });
    },
    logout(context) {
      context.commit('changeLoggedState', { isAuth: false });
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});