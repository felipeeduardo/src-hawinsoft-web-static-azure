<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <div v-show="checkSessionAuth">
        <v-btn dark icon @click="goPath('Notification')">
          <v-icon size="20">fas fa-bell</v-icon>
        </v-btn>
        <v-btn dark icon v-on="on">
          <v-icon size="20">fas fa-user</v-icon>
        </v-btn>
      </div>
      <div v-show="!checkSessionAuth">
        <v-btn outline @click="goLogin()">
          Entrar
        </v-btn>
      </div>
    </template>
    <!--list menu private-->
    <v-list dense v-if="checkSessionAuth">
      <div class="text-xs-center mt-2">
        <v-img :src="require('@/assets/img/hawinsoft-id.png')" contain max-height="65"></v-img>
      </div>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>{{this.auth.user.email}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider light></v-divider>
      <v-list-tile v-for="item in itemsMenuAuth" :key="item.index" @click="goPath(item.path)">
        <v-list-tile-action>
          <v-icon size="18" :color="item.colorIcon">{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title :class="item.classColorText">{{item.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
import router from "@/router";
export default {
  data() {
    return {
      checkSessionAuth: false,
      itemsMenuAuth: [
        {
          icon: "fas fa-credit-card",
          colorIcon: "",
          title: "Inserir créditos",
          classColorText: "",
          path: "Payment",
        },
        {
          icon: "fas fa-sign-out-alt",
          colorIcon: "",
          title: "Sair",
          classColorText: "",
          path: "Public",
        },
      ],
    };
  },
  computed: {
    ...mapState("auth", ["auth"]),
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
    ...mapActions("auth", ["logOut"]),
    ...mapActions("payment", ["getSessionIdPageSeguro"]),
    goLogin() {
      router.push({ name: "Login" });
    },
    logout() {
      EventBus.$emit("checkSessionAuth", false);
      this.checkSessionAuth = false;
      sessionStorage.hawinsoft = false;
      sessionStorage.hawinsoft_profile = "";
      this.logOut();
      router.push({ name: "Public" });
    },
    goPath(path) {
      if (path == "Public") {
        EventBus.$emit("checkSessionAuth", false);
        sessionStorage.hawinsoft = false;
        sessionStorage.hawinsoft_profile = "";
        this.logOut();
        router.push({ name: "Public" });
      }
      if (path == "Notification") {
        EventBus.$emit("dialogNotification", true);
      }else{
        router.push({ name: path });
      }
    },
  },
};
</script>

<style>
</style>
