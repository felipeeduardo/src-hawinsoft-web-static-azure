<template>
  <v-container grid-list-md text-xs-center>
    <v-layout v-if="verifyUserRpa" text-xs-center wrap ma-4>
      <v-flex xs12>
        <v-img :src="require('@/assets/img/hawinsoft-robot.png')" contain height="250"></v-img>
      </v-flex>
      <v-flex xs12>
        <h1 class="font-weight-light" color="grey--text">You do not have RPA</h1>
      </v-flex>
      <v-flex xs12>
        <v-btn color="primary" outline @click="goHome()">
          <v-icon left>adb</v-icon>Request a quote
        </v-btn>
      </v-flex>
      <v-flex>
        <p class="text-xs-center">OR</p>
        <h3 class="text-xs-center" style="color:blue">support@hawinsoft.com.br</h3>
      </v-flex>
    </v-layout>
    <breadcrumb v-if="!verifyUserRpa" :data="breadcrumb"/>
    <card-generic v-if="!verifyUserRpa" :data="cards"/>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
import CardGeneric from "@/components/organisms/Card/CardGeneric";
import Breadcrumb from "@/components/organisms/Breadcrumb";
export default {
  components: {
    CardGeneric,
    Breadcrumb
  },
  data() {
    return {
      verifyUserRpa: false,
      cards: [],
      breadcrumb: [
        {
          text: "Home",
          disabled: false,
          href: "/#/home"
        },
        {
          text: "Panel RPAs",
          disabled: true,
          href: "#"
        }
      ]
    };
  },
  computed: {
    ...mapState("auth", ["auth"]),
    ...mapState("product", ["product"])
  },
  methods: {
    ...mapActions("product", ["getProductsUser"]),
    ...mapActions("auth", ["logOut"]),
    goHome(path) {
      router.push({ name: "Home" });
    },
    sessionExpired() {
      EventBus.$emit("showMenuPrivate", false);
      sessionStorage.hawinsoft = false;
      this.logOut();
      router.push({ name: "Login" });
    }
  },
  created() {
    if (this.auth.auth) {
      const data = {
        id: this.auth.id,
        token: this.auth.token
      };
      this.getProductsUser(data)
        .then(res => {
          if (res.data != "") {
            res.data.forEach(element => {
              if (element != "") {
                const item = {
                  idRpa: element.id_rpa_type,
                  banner: require("@/assets/img/hawinsoft-rpa-web.png"),
                  title: element.name_rpa,
                  path: "RpaUniue",
                  enabled: element.active == 1 ? true : false,
                  hoveText: element.active == 1 ? "Enabled" : "Desabled",
                  hoveTextColor:
                    element.active == 1 ? "green--text" : "red--text",
                  hoveColor:
                    element.active == 1 ? "grey lighten-5" : "red lighten-5"
                };
                this.cards.push(item);
              }
            });
          } else {
            this.verifyUserRpa = true;
          }
        })
        .catch(err => {
          //erro 500 -> auth expired
          this.sessionExpired();
        });
    }
  }
};
</script>
