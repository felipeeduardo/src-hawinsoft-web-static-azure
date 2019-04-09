<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <card-admin></card-admin>
      <card-group></card-group>
    </v-layout>
  </v-container>
</template>

<script>
import CardGroup from "@/components/Card/CardGroup";
import CardAdmin from "@/components/Card/CardAdmin";
export default {
  components: {
    CardGroup,
    CardAdmin
  }
};
</script>
