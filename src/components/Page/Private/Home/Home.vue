<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">PÁGINA INICIAL</h1>
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
          banner: require("@/assets/img/hawinsoft-robot.png"),
          title: "Automação de processos",
          path: "Rpa",
          enabled: true,
          hoveText: "Ativado",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4"
        },
        {
          banner: require("@/assets/img/lab-test-hawinsoft.png"),
          title: "Laboratório de teste",
          path: "Test",
          enabled: false,
          hoveText: "Desativado",
          hoveTextColor: "red--text",
          hoveColor: "grey lighten-5"
        },
        {
          banner: require("@/assets/img/hawinsoft-bug.png"),
          title: "Reportar problema",
          path: "Report",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        },
        {
          banner: require("@/assets/img/money-hawinsoft.png"),
          title: "Forma de pagamento",
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
