<template>
  <v-container grid-list-md>
    <dialog-generic :data="data" />
    <h1 class="title font-weight-light">
      <v-icon class="mr-1">memory</v-icon>Robotic process automation
    </h1>
    <v-layout v-if="verifyUserRpa" justify-center wrap>
      <v-flex xs12 sm6 class="mt-3">
        <v-flex xs12 text-xs-center class="mt-3">
          <v-img :src="require('@/assets/img/hawinsoft-robot.png')" contain height="200"></v-img>
        </v-flex>
        <v-flex xs12 text-xs-center class="mt-3">
          <h2
            class="font-weight-light"
            color="grey--text"
          >Você não possui um RPA associado à sua conta.</h2>
        </v-flex>
        <v-flex xs12 text-xs-center class="mt-3">
          <v-btn color="success" large flat outline round @click="newRpa()">Criar</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout v-if="!verifyUserRpa">
      <!--criar bot-->
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-fab-transition>
            <v-btn
              absolute
              outline
              fab
              top
              right
              color="success"
              class="mt-5"
              v-on="on"
              @click="newRpa()"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <span>Novo</span>
      </v-tooltip>
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
    ...mapState("auth", ["auth"])
  },
  methods: {
    ...mapActions("rpa", ["allRpaUser"]),
    goHome() {
      router.push({ name: "Home" });
    },
    newRpa() {
      router.push({ name: "RpaCreate" });
    }
  },
  created() {
    if (this.auth.auth) {
      const data = {
        id_user: this.auth.id,
        token: this.auth.token
      };
      this.allRpaUser(data)
        .then(res => {
          if (res.data != "") {
            res.data.forEach(element => {
              const item = {
                idRpa: element.id_rpa,
                banner: require("@/assets/img/hawinsoft-robot.png"),
                title: element.name,
                path: "RpaUniue",
                enabled: element.active == 1 ? true : false,
                hoveText: element.active == 1 ? "Ativo" : "Inativo",
                hoveTextColor:
                  element.active == 1 ? "green--text" : "red--text",
                hoveColor:
                  element.active == 1 ? "grey lighten-5" : "red lighten-5"
              };
              this.cards.push(item);
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