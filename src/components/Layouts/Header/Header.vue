<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-title
      class="headline text-uppercase"
      @click="gohome()"
      exact
      :style="{ cursor: 'pointer'}"
    >
      <span>HAWINSOFT</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    gohome: function() {
      router.push({ name: "Home" });
    }
  }
};
</script>
