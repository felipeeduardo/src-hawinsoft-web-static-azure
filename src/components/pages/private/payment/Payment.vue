<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-credit-card</v-icon>Inserir créditos
    </h1>
    <v-layout justify-center wrap>
      <v-flex xs12 sm7>
        <card-generic :data="cards" />
      </v-flex>
      <v-flex xs12 sm5>
        <v-img
          :src="require('@/assets/img/hawinsoft-payment.jpg')"
          contain
          max-height="500"
        ></v-img>
        <v-img
          :src="require('@/assets/img/hawinsoft-pagseguro.png')"
          contain
          max-height="200"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CardGeneric from "@/components/organisms/cards/cardGeneric";
export default {
  components: {
    CardGeneric,
  },
  data() {
    return {
      cards: [
        {
          title: "R$ 20.00",
          subtitle: "Créditos inseridos através do PagSeguro",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4",
        },
        {
          title: "R$ 30.00",
          subtitle: "Créditos inseridos através do PagSeguro",
          path: "Api",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5",
        },
        {
          title: "R$ 40.00",
          subtitle: "Créditos inseridos através do PagSeguro",
          path: "Report",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5",
        },
        {
          title: "R$ 50.00",
          subtitle: "Créditos inseridos através do PagSeguro",
          path: "Notification",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5",
        },
        {
          title: "R$ 100.00",
          subtitle: "Créditos inseridos através do PagSeguro",
          path: "Notification",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5",
        },
        {
          title: "R$ 200.00",
          subtitle: "Créditos inseridos através do PagSeguro",
          path: "Notification",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5",
        },
      ],
    };
  },
};
</script>

<style>
</style>