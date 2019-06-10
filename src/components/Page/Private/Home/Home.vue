<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap class="py-3 px-2">
      <v-flex d-flex xs12 sm6 md6 class="px-1 py-1">
        <card-product/>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6 class="px-1 py-1">
        <card-product/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CardProduct from "@/components/organisms/Card/CardProduct";
export default {
  components: {
    CardProduct
  }
};
</script>
