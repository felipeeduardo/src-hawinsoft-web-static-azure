<template>
  <v-layout row wrap>
    <card-download></card-download>
    <card-settings></card-settings>
  </v-layout>
</template>
<script>
import CardDownload from "@/components/Card/CardDownload";
import CardSettings from "@/components/Card/CardSettings";
export default {
  components: {
    CardDownload,
    CardSettings
  }
};
</script>