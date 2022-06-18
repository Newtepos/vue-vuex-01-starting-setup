import { createStore } from 'vuex';
import counterModule from './modules/counter/index.js';
import authModule from './modules/authentication/index.js';

export default createStore({
  modules: {
    numbers: counterModule,
    authentication: authModule,
  },
});
