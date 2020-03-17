<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon>home</v-icon>Página inicial
    </h1>
    <card-generic :data="this.auth.id_user_profile == 1? cardsAdmin:cards" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import CardGeneric from "@/components/organisms/Card/CardGeneric";
export default {
  components: {
    CardGeneric
  },
  computed: {
    ...mapState("auth", ["auth"])
  },
  data() {
    return {
      cards: [
        {
          banner: require("@/assets/img/hawinsoft-robot.png"),
          title: "RPA's",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft-api.png"),
          title: "API's",
          path: "Api",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
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
          banner: require("@/assets/img/hawinsoft-mensagens.png"),
          title: "Mensagens",
          path: "Message",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        }
      ],
      cardsAdmin: [
        {
          banner: require("@/assets/img/hawinsoft-id.png"),
          title: "Administração",
          path: "Admin",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        },
        {
          banner: require("@/assets/img/hawinsoft-robot.png"),
          title: "RPA's",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft-api.png"),
          title: "API's",
          path: "Api",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
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
          banner: require("@/assets/img/hawinsoft-mensagens.png"),
          title: "Mensagens",
          path: "Message",
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
