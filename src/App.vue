<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-counter></favorite-counter>
    <button @click="incrementCounter">Add 2</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteCounter from './components/FavoriteCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteCounter,
  },
  methods: {
    incrementCounter() {
      this.$store.dispatch('increment');
    },
  },
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
