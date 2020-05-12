<template>
  <v-container grid-list-md>
    <dialog-generic :data="data" />
    <h1 class="title font-weight-light">
      <v-icon class="mr-1">memory</v-icon>Robotic process automation
    </h1>
    <card-generic v-if="verifyUserRpa" :data="newBot" />
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
      newBot: [
        {
          banner: require("@/assets/img/hawinsoft-new.png"),
          title: "Novo",
          subtitle: "Robotic process automation",
          path: "RpaCreate",
          enabled: true,
          hoveText: "",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4"
        }
      ],
      cards: [
        {
          banner: require("@/assets/img/hawinsoft-new.png"),
          title: "Novo",
          subtitle: "Robotic process automation",
          path: "RpaCreate",
          enabled: true,
          hoveText: "",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4"
        }
      ],
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
    formatDateDb(date) {
      var data = new Date(date),
        dia = data
          .getDate()
          .toString()
          .padStart(2, "0"),
        mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
        ano = data.getFullYear();
      return dia + "/" + mes + "/" + ano;
    },
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
                subtitle: "Criado: " + this.formatDateDb(element.created),
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