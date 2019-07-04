<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">{{this.pageTitle}}</h1>
    <card-generic :data="cards" />
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CardGeneric from "@/components/organisms/Card/CardGeneric";
import Breadcrumb from "@/components/organisms/Breadcrumb";
export default {
  components: {
    CardGeneric,
    Breadcrumb
  },
  computed: {
    ...mapState("product", ["product"])
  },
  created() {
    const selected = this.product.filter(
      rpa => rpa.id_user_product == this.$route.params.Rid
    );
    this.pageTitle = selected[0].name_rpa;
  },
  data() {
    return {
      pageTitle: "",
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
