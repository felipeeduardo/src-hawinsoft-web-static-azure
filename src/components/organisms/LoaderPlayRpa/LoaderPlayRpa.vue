<template>
  <v-snackbar
    v-model="this.loaderPlayerRpa"
    :color="color"
    :multi-line="mode === 'multi-line'"
    :timeout="timeout"
    :vertical="mode === 'vertical'"
  >
    <v-flex xs12>
      <v-progress-linear :indeterminate="true"></v-progress-linear>
    </v-flex>
    <v-flex xs12>
      <h3 class="font-weight-light">Bot em execução...</h3>
    </v-flex>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    loaderPlayerRpa: {
      type: Boolean,
      default: null
    }
  },
  data() {
    return {
      color: "info",
      mode: "vertical",
      timeout: 0,
      text: "Hello, I'm a snackbar"
    };
  }
};
</script>

<style>
</style>