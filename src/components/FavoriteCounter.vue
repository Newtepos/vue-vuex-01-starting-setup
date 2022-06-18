<template>
  <h3>{{ counter }}</h3>
  <h2>We do more..</h2>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters.normalizedCounter;
        }
    }
}
</script>
