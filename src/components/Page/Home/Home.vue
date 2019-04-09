<template>
  <v-container grid-list-md text-xs-center>
    <card-group></card-group>
    <content-admin></content-admin>
  </v-container>
</template>

<script>
import CardGroup from "@/components/Card/CardGroup";
import ContentAdmin from "@/organisms/Admin/ContentAdmin";
export default {
  components: {
    CardGroup,
    ContentAdmin
  }
};
</script>
