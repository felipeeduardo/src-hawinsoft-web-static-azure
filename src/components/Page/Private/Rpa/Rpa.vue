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
          banner: require("@/assets/img/hawinsoft-add-user.png"),
          title: "Add user",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "light-blue lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft-rpa-web.png"),
          title: "Web vendas - VIVO",
          path: "Rpa",
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
