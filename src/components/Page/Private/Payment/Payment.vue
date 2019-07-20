<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">FORMA DE PAGAMENTOS</h1>
    <card-generic :data="cards" />
  </v-container>
</template>

<script>
import CardGeneric from "@/components/organisms/Card/CardGeneric";
export default {
  components: {
    CardGeneric
  },
  data() {
    return {
      cards: [
        {
          banner: require("@/assets/img/hawinsoft-price.png"),
          title: "Robotic process",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft-price.png"),
          title: "Test laboratory",
          path: "Test",
          enabled: false,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-5"
        },
        {
          banner: require("@/assets/img/hawinsoft-price.png"),
          title: "Report problem",
          path: "Report",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        },
        {
          banner: require("@/assets/img/hawinsoft-price.png"),
          title: "Payment",
          path: "Payment",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        }
      ]
    };
  }
};
</script>

<style>
</style>
