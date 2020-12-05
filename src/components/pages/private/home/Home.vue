<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-home</v-icon>Página inicial
    </h1>
    <v-layout justify-center wrap>
      <v-flex xs12 sm7>
        <card-generic :data="this.auth.user.id_user_profile == 1? cardsAdmin:cards" />
      </v-flex>
      <v-flex xs12 sm5>
        <v-img :src="require('@/assets/img/hawinsoft-mount.jpg')" contain max-height="500"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import CardGeneric from "@/components/organisms/cards/cardGeneric";
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
          title: "Painel de Bots",
          subtitle: "Criação, monitoramento de métricas.",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4"
        },
        {
          title: "Integrações",
          subtitle: "Integração através de Rest API.",
          path: "Api",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        },
        {
          title: "Ticket",
          subtitle: "Relate problemas tire suas dúvidas.",
          path: "Report",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        },
        {
          title: "Notificações",
          subtitle: "Acompanhamento de informativos e logs",
          path: "Notification",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        }
      ],
      cardsAdmin: [
        {
          title: "Administração",
          path: "Admin",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        },
        {
          title: "RPA's",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4"
        },
        {
          title: "API's",
          path: "Api",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        },
        {
          title: "Ticket",
          subtitle: "Relate problemas tire suas dúvidas.",
          path: "Report",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "blue-grey lighten-5"
        },
        {
          title: "Notificações",
          path: "Notification",
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
