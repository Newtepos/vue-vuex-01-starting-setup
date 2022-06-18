<template>
  <button @click="addCounter({value: 10})">Add 10</button>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  methods: {
    // addCounter() {
    //   // this.$store.commit('increase', {value: 10});
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },

    /* ...mapActions({addCounter: 'increase'}),*/

    addCounter(payload) {
      this.$store.dispatch({
        type: 'numbers/increase',
        value: payload.value
      })
    }
  },
};
</script>
