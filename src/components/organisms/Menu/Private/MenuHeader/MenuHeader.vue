<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <div v-show="showMenuPrivate">
        <v-btn dark icon v-on="on">
          <v-icon size="20">fas fa-user</v-icon>
        </v-btn>
      </div>
      <div v-show="!showMenuPrivate">
        <v-btn outline @click="goLogin()">
          <v-icon left size="20">fas fa-sign-in-alt</v-icon>Entrar
        </v-btn>
      </div>
    </template>
    <!--list menu private-->
    <v-list dense v-if="this.auth.auth">
      <div class="text-xs-center mt-2">
        <v-img :src="require('@/assets/img/hawinsoft-id.png')" contain max-height="65"></v-img>
      </div>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>{{this.auth.email}}</v-list-tile-title>
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
      showMenuPrivate: false,
      itemsMenuAuth: [
        {
          icon: "fas fa-credit-card",
          colorIcon: "",
          title: "Inserir créditos",
          classColorText: "",
          path: "Home"
        },
        {
          icon: "fas fa-sign-out-alt",
          colorIcon: "",
          title: "Sair",
          classColorText: "",
          path: "Public"
        }
      ]
    };
  },
  computed: {
    ...mapState("auth", ["auth"])
  },
  created() {
    if (this.auth.auth) {
      this.showMenuPrivate = true;
      this.id = this.auth.id;
      this.email = this.auth.email;
      this.token = this.auth.token;
    } else {
      this.showMenuPrivate = false;
    }
  },
  mounted() {
    EventBus.$on("showMenuPrivate", event => {
      this.showMenuPrivate = event;
    });
  },
  methods: {
    ...mapActions("auth", ["logOut"]),
    ...mapActions("payment", ["getSessionIdPageSeguro"]),
    goLogin() {
      router.push({ name: "Login" });
    },
    logout() {
      this.showMenuPrivate = false;
      sessionStorage.hawinsoft = false;
      sessionStorage.hawinsoft_profile = "";
      this.logOut();
      router.push({ name: "Public" });
    },
    goPath(path) {
      if (path == "Public") {
        this.showMenuPrivate = false;
        sessionStorage.hawinsoft = false;
        sessionStorage.hawinsoft_profile = "";
        this.logOut();
        router.push({ name: "Public" });
      }
    }
  }
};
</script>

<style>
</style>
