<template>
  <v-container grid-list-md text-xs-center>
    <card-generic v-if="rpa" :data="cards"/>
    <card-generic v-if="!rpa" :data="createRpa"/>
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
      rpa: true,
      cards: [
        {
          idRpa: 1,
          banner: require("@/assets/img/hawinsoft-rpa-web.png"),
          title: "RPA - Web vendas",
          path: "RpaUniue",
          enabled: true,
          hoveText: "Enabled",
          hoveTextColor: "green--text",
          hoveColor: "green lighten-4"
        }
      ],
      createRpa: [
        {
          banner: require("@/assets/img/hawinsoft-new-rpa.png"),
          title: "Create",
          path: "Rpa",
          enabled: true,
          hoveText: "NEW RPA",
          hoveTextColor: "green--text",
          hoveColor: "green lighten-4"
        }
      ]
    };
  }
};
</script>
