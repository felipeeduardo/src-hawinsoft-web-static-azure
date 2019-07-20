<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">REPORTAR PROBLEMA</h1>
    <card-report />
  </v-container>
</template>

<script>
import CardReport from "@/components/organisms/Card/CardReport";
import Breadcrumb from "@/components/organisms/Breadcrumb";
export default {
  components: {
    CardReport,
    Breadcrumb
  }
};
</script>

<style>
</style>
