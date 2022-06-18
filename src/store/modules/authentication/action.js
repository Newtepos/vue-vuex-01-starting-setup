export default {
  login(context) {
    context.commit('changeLoggedState', { isAuth: true });
  },
  logout(context) {
    context.commit('changeLoggedState', { isAuth: false });
  },
};
