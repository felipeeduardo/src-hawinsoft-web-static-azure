<template>
  <v-container grid-list-md text-xs-center>
    <breadcrumb :data="breadcrumb"/>
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
  },
  data() {
    return {
      breadcrumb: [
        {
          text: "Home",
          disabled: false,
          href: "/#/home"
        },
        {
          text: "Report problem",
          disabled: true,
          href: "#"
        }
      ]
    };
  }
};
</script>

<style>
</style>
