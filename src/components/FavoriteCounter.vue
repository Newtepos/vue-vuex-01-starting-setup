<template>
  <h3>{{ normalizedCounter }}</h3>
  <h2>We do more..</h2>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['normalizedCounter'])
    },
}
</script>
