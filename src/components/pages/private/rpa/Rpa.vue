<template>
  <v-container grid-list-md>
    <dialog-enabled :data="dialogEnabledOrDisabledRpa" />
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-robot</v-icon>Robotic process
      automation
    </h1>
    <v-layout justify-center wrap>
      <v-flex xs12 sm7>
        <card-generic v-if="verifyUserRpa" :data="newBot" />
        <card-generic v-if="!verifyUserRpa" :data="cards" />
      </v-flex>
      <v-flex xs12 sm5>
        <v-img
          :src="require('@/assets/img/hawinsoft-rpa-exe.jpg')"
          contain
          max-height="500"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
import CardGeneric from "@/components/organisms/cards/cardGeneric";
import DialogEnabled from "@/components/organisms/dialog/dialogDisabledOEnabledRpa";
export default {
  components: {
    CardGeneric,
    DialogEnabled,
  },
  data() {
    return {
      verifyUserRpa: false,
      newBot: [
        {
          title: "Novo",
          subtitle: "Robotic process automation",
          iconActive: true,
          icon: "fas fa-plus-square",
          path: "RpaCreate",
          chip: false,
          enabled: true,
          hoveText: "",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4",
        },
      ],
      cards: [
        {
          title: "Novo",
          subtitle: "Crie um Web crawler",
          iconActive: true,
          icon: "fas fa-plus",
          path: "RpaCreate",
          chip: false,
          enabled: true,
          hoveText: "",
          hoveTextColor: "green--text",
          hoveColor: "grey lighten-4",
        },
      ],
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290",
      },
      dialogEnabledOrDisabledRpa: {
        id_user: "",
        id_rpa: "",
        token: "",
        nameRpa: "",
        size: "400",
        countInput: 0,
        active: false,
      },
    };
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    formatDateDb(date) {
      var data = new Date(date),
        dia = data.getDate().toString().padStart(2, "0"),
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
    },
  },
  created() {
    if (this.auth.token) {
      this.dialogEnabledOrDisabledRpa.id_user = this.auth.user.id_user;
      this.dialogEnabledOrDisabledRpa.token = this.auth.token;
      const data = {
        id_user: this.auth.user.id_user,
        token: this.auth.token,
      };
      this.allRpaUser(data)
        .then((res) => {
          if (res.status == 200) {
            res.data.forEach((element) => {
              const item = {
                idRpa: element.id_rpa,
                title: element.name,
                subtitle: "Criado: " + this.formatDateDb(element.created),
                path: "RpaUniue",
                chip: true,
                enabled: element.active == 1 ? true : false,
                hoveText: "",
                hoveTextColor: "",
                hoveColor: "grey lighten-4",
              };
              this.cards.push(item);
            });
          } else {
            this.verifyUserRpa = true;
          }
        })
        .catch((err) => {
          if (err.response.status == 401) {
            EventBus.$emit("dialogGeneric", true, this.dataDialog);
          }
        });
    }
  },
};
</script>