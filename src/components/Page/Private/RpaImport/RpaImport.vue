<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">{{this.pageTitle}}</h1>
    <div class="py-3">
      <v-alert :value="true" type="info" color="blue lighten-2">This is a info alert.</v-alert>
    </div>
    <card-import />
  </v-container>
</template>

<script>
import CardImport from "@/components/organisms/Card/CardRpaImport";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    CardImport
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
      pageTitle: ""
    };
  }
};
</script>

<style>
</style>
