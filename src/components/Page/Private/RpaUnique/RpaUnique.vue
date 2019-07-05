<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">{{this.pageTitle}}</h1>
    <card-control />
    <card-generic :data="cards" />
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CardControl from "@/components/organisms/Card/CardRpaControl";
import CardGeneric from "@/components/organisms/Card/CardGeneric";
export default {
  components: {
    CardGeneric,
    CardControl
  },
  computed: {
    ...mapState("product", ["product"]),
    ...mapState("auth", ["auth"])
  },
  created() {
    const selected = this.product.filter(
      rpa => rpa.id_user_product == this.$route.params.Rid
    );
    this.pageTitle = selected[0].name_rpa;
    //profile access -> 3 access basic
    this.profile = this.auth.id_user_profile == 3 ? false : true;
    if (!this.profile) {
      this.cards[0].path = "";
      this.cards[0].hoveText = "Desabled";
      this.cards[0].hoveTextColor = "red--text";
    }
  },
  data() {
    return {
      pageTitle: "",
      profile: "",
      cards: [
        {
          idRpa: this.$route.params.Rid,
          banner: require("@/assets/img/hawinsoft-add-user.png"),
          title: "Create User",
          path: "RpaNewUser",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-5 lighten-4"
        },
        {
          idRpa: this.$route.params.Rid,
          banner: require("@/assets/img/hawinsoft-download-client.png"),
          title: "Download client",
          path: "RpaDownload",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-5 lighten-4"
        },
        {
          idRpa: this.$route.params.Rid,
          banner: require("@/assets/img/hawinsoft-upload.png"),
          title: "Import data",
          path: "RpaImport",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-5 lighten-4"
        },
        {
          idRpa: this.$route.params.Rid,
          banner: require("@/assets/img/hawinsoft-chart.png"),
          title: "Results RPA",
          path: "RpaResults",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-5 lighten-4"
        }
      ]
    };
  }
};
</script>
