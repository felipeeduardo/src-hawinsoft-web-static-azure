<template>
  <v-card class="elevation-3">
    <v-card-title>
      <v-icon large left color="primary">folder</v-icon>
      <span class="title font-weight-light">[Process name]</span>
    </v-card-title>
    <div>
      <v-btn flat small color="primary">
        <v-icon left>save_alt</v-icon>Cypress
      </v-btn>
      <v-btn flat small color="primary">
        <v-icon left>settings_system_daydream</v-icon>RPA
      </v-btn>
    </div>
    <v-card-text>
      <v-timeline align-top dense>
        <v-timeline-item
          color="success"
          small
          fill-dot
          v-for="(item, i) in items"
          :key="i"
          icon="check"
        >
          <v-layout pt-3>
            <v-flex xs4>
              <strong>Selection:</strong>
              <div class="caption ellipsis">[Selection]</div>
            </v-flex>
            <v-flex>
              <strong>Event:</strong>
              <div class="caption ellipsis">click</div>
            </v-flex>
            <v-flex>
              <strong>Data:</strong>
              <div class="caption ellipsis">Mobile App</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star"
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant"
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon"
      },
      {
        color: "indigo",
        icon: "mdi-buffer"
      }
    ]
  })
};
</script>

<style>
</style>
