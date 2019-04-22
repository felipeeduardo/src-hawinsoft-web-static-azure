<template>
  <v-flex xs6 py-2>
    <v-card class="elevation-2" @click="goClient()" :style="{ cursor: 'pointer'}">
      <v-card-title>
        <v-icon left color="primary">cloud_download</v-icon>
        <span class="title font-weight-light">Client</span>
      </v-card-title>
    </v-card>
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
