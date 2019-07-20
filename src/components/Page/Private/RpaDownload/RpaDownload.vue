<template>
  <v-container grid-list-md text-xs-center>
    <v-layout text-xs-center wrap ma-4>
      <v-flex xs12>
        <v-img :src="require('@/assets/img/hawinsoft-robot.png')" contain height="250"></v-img>
      </v-flex>
      <v-flex xs12>
        <h2
          :style="{ cursor: 'pointer'}"
          class="textopen font-weight-light"
          color="grey--text"
          @click="goDownload(urlBlob)"
        >Download robô<br> {{rpa}}</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Breadcrumb from "@/components/organisms/Breadcrumb";
export default {
  components: {
    Breadcrumb
  },
  methods: {
    goDownload(url) {
      let win = window.open(url, "_blank");
      win.focus();
    }
  },
  computed: {
    ...mapState("product", ["product"])
  },
  created() {
    const selected = this.product.filter(
      rpa => rpa.id_rpa_type == this.$route.params.Rid
    );
    this.rpa = selected[0].name_rpa;

    if (this.$route.params.Rid == 1) {
      this.urlBlob =
        "https://hawinsoftrpa.blob.core.windows.net/client/publish.htm";
    }
  },
  data() {
    return {
      urlBlob: "",
      rpa: ""
    };
  }
};
</script>

<style>
.textopen:hover {
  color: #357ca5;
}
</style>
