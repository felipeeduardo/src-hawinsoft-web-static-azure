<template>
  <v-container grid-list-md text-xs-center>
    <card-product/>
    <!--<v-flex d-flex xs12 sm6 md6 class="px-1 py-1">
        <card-product/>
    </v-flex>-->
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
