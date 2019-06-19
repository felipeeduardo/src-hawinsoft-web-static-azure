<template>
  <v-container grid-list-md text-xs-center>
    <card-generic :data="cards"/>
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
          banner: require("@/assets/img/hawinsoft-robot.png"),
          title: "Robotic process",
          path: "Rpa",
          enabled: true,
          hoveText: "Enabled",
          hoveTextColor: "green--text",
          hoveColor: "green lighten-4"
        },
        {
          banner: require("@/assets/img/lab-test-hawinsoft.png"),
          title: "Test laboratory",
          path: "Test",
          enabled: false,
          hoveText: "Desabled",
          hoveTextColor: "red--text",
          hoveColor: "red lighten-5"
        },
        {
          banner: require("@/assets/img/hawinsoft-bug.png"),
          title: "Report problem",
          path: "Report",
          enabled: true,
          hoveText: "Report",
          hoveTextColor: "blue--text",
          hoveColor: "blue-grey lighten-5"
        },
        {
          banner: require("@/assets/img/money-hawinsoft.png"),
          title: "Payment",
          path: "Payment",
          enabled: true,
          hoveText: "Payment",
          hoveTextColor: "green--text",
          hoveColor: "blue-grey lighten-5"
        }
      ]
    };
  }
};
</script>
