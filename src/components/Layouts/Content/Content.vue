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
          <h2 class="font-weight-light">Créditos R$ 0.00</h2>
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
import LoaderPlay from "@/components/organisms/loaderPlayRpa";
import { mapState } from "vuex";
export default {
  components: {
    MenuHeader,
    Loader,
    LoaderPlay,
    DialogReport,
    DialogNotification,
  },
  created() {
    if (this.auth.token == "") this.checkSessionAuth = false;
    else this.checkSessionAuth = true;
  },
  mounted() {
    EventBus.$on("checkSessionAuth", (event) => {
      this.checkSessionAuth = event;
    });
  },
  methods: {
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
          icon: "fas fa-robot",
          colorIcon: "",
          title: "Robotic process automation",
          classColorText: "",
          path: "Rpa",
        },
        {
          icon: "fas fa-cogs",
          colorIcon: "",
          title: "Integrações - Rest API",
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
