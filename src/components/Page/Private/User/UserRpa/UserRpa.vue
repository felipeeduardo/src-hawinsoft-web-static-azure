<template>
  <v-container grid-list-md text-xs-center>
    <cardNewUserRpa/>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CardNewUserRpa from "@/components/organisms/Card/CardNewUserRpa";
export default {
  components: {
    CardNewUserRpa
  }
};
</script>

<style>
</style>
