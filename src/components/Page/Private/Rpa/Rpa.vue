<template>
  <v-container grid-list-md>
    <dialog-generic :data="data" />
    <h1 class="title font-weight-light">
      <v-icon>memory</v-icon>Robotic process automation
    </h1>
    <v-layout v-if="verifyUserRpa" text-xs-center wrap ma-2>
      <v-flex xs12>
        <v-img :src="require('@/assets/img/hawinsoft-robot.png')" contain height="300"></v-img>
      </v-flex>
      <v-flex xs12>
        <h1 class="font-weight-light" color="grey--text">Você não possui RPA associado a sua conta.</h1>
      </v-flex>
      <v-flex xs12>
        <v-btn color="success" large flat outline round @click="goHome()">Criar RPA</v-btn>
      </v-flex>
    </v-layout>
    <card-generic v-if="!verifyUserRpa" :data="cards" />
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
import CardGeneric from "@/components/organisms/Card/CardGeneric";
import DialogGeneric from "@/components/organisms/Dialog/DialogGeneric";
export default {
  components: {
    CardGeneric,
    DialogGeneric
  },
  data() {
    return {
      verifyUserRpa: false,
      cards: [],
      data: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290"
      }
    };
  },
  computed: {
    ...mapState("auth", ["auth"]),
    ...mapState("product", ["product"])
  },
  methods: {
    ...mapActions("product", ["getProductsUser"]),
    ...mapActions("auth", ["logOut"]),
    goHome() {
      router.push({ name: "Home" });
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
                  banner: require("@/assets/img/hawinsoft-bot.png"),
                  title: element.name_rpa,
                  path: "RpaUniue",
                  enabled: element.active == 1 ? true : false,
                  hoveText: element.active == 1 ? "Ativo" : "Inativo",
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
        .catch(() => {
          //erro 500 -> auth expired
          EventBus.$emit("dialogGeneric", true);
        });
    }
  }
};
</script>
