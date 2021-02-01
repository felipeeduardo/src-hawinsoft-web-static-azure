<template>
  <v-content class="white">
    <v-toolbar app dark clipped-left color="primary">
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
        v-if="checkSessionAuth"
      ></v-toolbar-side-icon>
      <v-toolbar-title
        @click.stop="drawer = !drawer"
        class="headline text-uppercase"
        exact
      >
        <span class="font-weight-light">HAWINSOFT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <menu-header></menu-header>
    </v-toolbar>

    <!--navigation-->
    <v-navigation-drawer
      v-if="checkSessionAuth"
      v-model="drawer"
      fixed
      app
      clipped
    >
      <v-list dense v-if="checkSessionAuth">
        <v-flex text-xs-center class="ma-2">
          <h2 class="font-weight-light">Créditos {{ this.payment.credit }}</h2>
          <div class="font-weight-light">{{ this.payment.status }}</div>
          <v-btn
            size="20"
            outline
            round
            color="success"
            @click="goPath('Payment', '')"
            >Inserir créditos</v-btn
          >
        </v-flex>

        <v-divider></v-divider>
        <v-list-tile
          v-for="item in itemsMenuAuth"
          :key="item.index"
          @click="goPath(item.path, item.idRpa)"
        >
          <v-list-tile-action>
            <v-icon :color="item.colorIcon">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title :class="item.classColorText">{{
              item.title
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile v-for="item in itemsMenuAuthSuport" :key="item.index">
          <v-list-tile-action>
            <v-icon :size="15" :color="item.colorIcon">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title :class="item.classColorText">{{
              item.title
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <loader :loader="this.loading" />
    <dialog-generic :data="dataDialog" />
    <dialog-report v-if="checkSessionAuth" :data="dataDialogReport" />
    <dialog-notification
      v-if="checkSessionAuth"
      :data="dataDialogNotification"
    />
    <router-view></router-view>
    <loader-play :loaderPlayerRpa="this.loading_play_rpa" />
  </v-content>
</template>
<script>
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
import MenuHeader from "@/components/organisms/menu/private/menuHeader";
import Loader from "@/components/organisms/loader";
import DialogReport from "@/components/organisms/dialog/dialogReportProblem";
import DialogNotification from "@/components/organisms/dialog/dialogNotification";
import DialogGeneric from "@/components/organisms/dialog/dialogGeneric";
import LoaderPlay from "@/components/organisms/loaderPlayRpa";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    MenuHeader,
    Loader,
    LoaderPlay,
    DialogReport,
    DialogNotification,
    DialogGeneric,
  },
  created() {
    if (this.auth.token == "") {
      this.checkSessionAuth = false;
    } else {
      this.checkSessionAuth = true;
      this.credits();
      this.payments();
    }
  },
  mounted() {
    EventBus.$on("checkSessionAuth", (event) => {
      this.checkSessionAuth = event;
      if (event) {
        this.credits();
        this.payments();
      }
    });
  },
  methods: {
    ...mapActions("payment", [
      "paymentGetCredits",
      "paymentReferences",
      "paymentVerify",
    ]),
    credits() {
      const data = {
        id_user: this.auth.user.id_user,
        token: this.auth.token,
      };
      this.paymentGetCredits(data)
        .then((res) => {
          if (res.status == 200) {
            const credit = res.data.map((el) => el.credit);
            this.payment.credit = credit.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
          }
          if (res.status == 204) {
            this.payment.credit = "0.00";
          }
        })
        .catch((err) => {
          if (err.response.status == 401) {
            EventBus.$emit("dialogGeneric", true);
          }
        });
    },
    payments() {
      const data = {
        id_user: this.auth.user.id_user,
        token: this.auth.token,
      };
      this.paymentReferences(data)
        .then((res) => {
          if (res.status == 200) {
            res.data.forEach((el) => {
              const dataPayment = {
                id_user: this.auth.user.id_user,
                token: this.auth.token,
                checkout: el.checkout,
                reference: el.reference,
              };
              this.paymentVerify(dataPayment).then((resp) => {
                if (resp.status == 200) {
                  if (resp.data.cod == 1)
                    this.payment.status =
                      el.credit.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      }) + ", aguardando processamento";
                }
              });
            });
          }
        })
        .catch((err) => {
          if (err.response.status == 401) {
            EventBus.$emit("dialogGeneric", true);
          }
        });
    },
    goPath(path, id) {
      if (path == "Notification") {
        EventBus.$emit("dialogNotification", true);
      } else if (path == "Report") {
        EventBus.$emit("dialogReport", true);
      } else {
        router.push({
          name: `${path}`,
          params: { Pid: this.auth.user.id_user, Rid: id },
        });
      }
    },
  },
  computed: {
    ...mapState("auth", ["auth"]),
    ...mapState(["loading"]),
    ...mapState(["loading_play_rpa"]),
  },
  data() {
    return {
      payment: {
        credit: "0.00",
        status: "",
      },
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290",
      },
      checkSessionAuth: false,
      icons: [
        "fab fa-facebook",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram",
      ],
      dataDialogReport: {
        size: "750",
        countInput: 0,
      },
      dataDialogNotification: {
        size: "750",
      },
      drawer: null,
      itemsMenuAuthSuport: [
        {
          icon: "fas fa-envelope",
          colorIcon: "grey",
          title: "suporte@hawinsoft.com.br",
          classColorText: "grey--text",
          path: "",
        },
      ],
      itemsMenuAuth: [
        {
          icon: "fas fa-home",
          colorIcon: "",
          title: "Página inicial",
          classColorText: "",
          path: "Home",
        },
        {
          icon: "fas fa-th-large",
          colorIcon: "",
          title: "Painel de bots",
          classColorText: "",
          path: "Rpa",
        },
        {
          icon: "fas fa-cogs",
          colorIcon: "",
          title: "Integrações",
          classColorText: "",
          path: "Api",
        },
        {
          icon: "fas fa-ticket-alt",
          colorIcon: "",
          title: "Ticket",
          classColorText: "",
          path: "Report",
        },
      ],
    };
  },
};
</script>
