<template>
  <v-container grid-list-md text-xs-center>
    <card-group></card-group>
    <card-download></card-download>
  </v-container>
</template>

<script>
import CardGroup from "@/components/Card/CardGroup";
import CardDownload from "@/components/Card/CardDownload";
export default {
  components: {
    CardGroup,
    CardDownload
  }
};
</script>
