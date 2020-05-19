<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-bug</v-icon>Reportar problema
    </h1>
    <card-report />
  </v-container>
</template>

<script>
import CardReport from "@/components/organisms/Card/CardReport";
export default {
  components: {
    CardReport
  }
};
</script>

<style>
</style>
