<template>
  <v-flex xs12 py-2 @click="goClient()" :style="{ cursor: 'pointer'}">
    <v-alert :value="true" type="success" icon="cloud_download">DOWNLOAD CLIENT</v-alert>
  </v-flex>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goClient: function() {
      router.push({ name: "Client" });
    }
  }
};
</script>
