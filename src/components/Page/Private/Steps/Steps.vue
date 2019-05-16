<template>
  <v-container>
    <v-timeline align-top>
      <v-timeline-item v-for="(item, i) in items" :key="i" color="green" icon="check" fill-dot>
        <v-card color="primary" dark>
          <v-card-title class="title">[ Event ]</v-card-title>
          <v-card-text class="white text--primary">
            <p>
              <b>Data:</b>
              Lorem.
            </p>
            <p>
              <b>Selection:</b>
              Lorem ipsum dolor sit amet, no nam oblique veritus.
            </p>
            <v-btn color="primary" class="mx-0" outline small>Edit</v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
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
