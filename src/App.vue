<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-counter></favorite-counter>
    <button @click="increment">Add 2</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteCounter from './components/FavoriteCounter.vue';
import { mapActions } from 'vuex';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteCounter,
    UserAuth,
  },
  methods: {
    // incrementCounter() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions('numbers', ['increment']),
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
