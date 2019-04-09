<template>
  <v-flex xs6 py-2>
    <v-card class="elevation-2" @click="goClient()" :style="{ cursor: 'pointer'}">
      <v-list two-line subheader>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon class="primary lighten-1 white--text">cloud_download</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Download client</v-list-tile-title>
            <v-list-tile-sub-title>Update: 30/04/1989</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
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
