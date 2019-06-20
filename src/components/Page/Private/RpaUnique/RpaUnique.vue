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
          banner: require("@/assets/img/hawinsoft-add-user.png"),
          title: "User",
          path: "Rpa",
          enabled: true,
          hoveText: "New",
          hoveTextColor: "light-blue--text",
          hoveColor: "light-blue lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft-download-client.png"),
          title: "Download",
          path: "Rpa",
          enabled: true,
          hoveText: "RPA",
          hoveTextColor: "light-blue--text",
          hoveColor: "light-blue lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft-upload.png"),
          title: "Import",
          path: "Rpa",
          enabled: true,
          hoveText: "RPA",
          hoveTextColor: "light-blue--text",
          hoveColor: "light-blue lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft.png"),
          title: "Results",
          path: "Rpa",
          enabled: true,
          hoveText: "RPA",
          hoveTextColor: "light-blue--text",
          hoveColor: "light-blue lighten-4"
        }
      ]
    };
  }
};
</script>
