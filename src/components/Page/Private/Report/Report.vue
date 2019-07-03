<template>
  <v-container grid-list-md text-xs-center>
    <card-report/>
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
