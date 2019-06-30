<template>
  <v-container grid-list-md text-xs-center>
    <breadcrumb :data="breadcrumb"/>
    <card-generic :data="cards"/>
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
    this.breadcrumb[2].text = "RPA - " + selected[0].name_rpa;
  },
  data() {
    return {
      cards: [
        {
          banner: require("@/assets/img/hawinsoft-add-user.png"),
          title: "Create User",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-5 lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft-download-client.png"),
          title: "Download client",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-5 lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft-upload.png"),
          title: "Import data",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-5 lighten-4"
        },
        {
          banner: require("@/assets/img/hawinsoft-chart.png"),
          title: "Results RPA",
          path: "Rpa",
          enabled: true,
          hoveText: "",
          hoveTextColor: "",
          hoveColor: "grey lighten-5 lighten-4"
        }
      ],
      breadcrumb: [
        {
          text: "Home",
          disabled: false,
          href: "/#/home"
        },
        {
          text: "Panel RPAs",
          disabled: false,
          href: "/#/rpa/" + this.$route.params.Pid
        },
        {
          text: "",
          disabled: true,
          href: "#"
        }
      ]
    };
  }
};
</script>
