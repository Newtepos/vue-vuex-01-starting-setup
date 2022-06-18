<template>
  <button @click="addCounter({value: 10})">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addCounter() {
    //   // this.$store.commit('increase', {value: 10});
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    ...mapActions({addCounter: 'increase'})
  },
};
</script>
