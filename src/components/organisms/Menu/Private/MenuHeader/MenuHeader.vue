<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <div v-show="showMenuPrivate">
        <v-btn dark icon v-on="on">
          <v-icon>person</v-icon>
        </v-btn>
      </div>
      <div v-show="!showMenuPrivate">
        <v-btn outline @click="goLogin()">LOG IN</v-btn>
      </div>
    </template>
    <v-list v-if="showMenuPrivate">
      <v-list-tile>
        <v-list-tile-title>
          <v-icon color="primary">person</v-icon>
          {{email}}
        </v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title @click="logout()">
          <v-icon color="primary">exit_to_app</v-icon>Sair
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import { EventBus } from "@/services/event-bus.js";
import router from "@/router";
export default {
  data() {
    return {
      showMenuPrivate: false,
      id: "",
      email: "",
      token: ""
    };
  },
  created() {
    if (
      sessionStorage.getItem("id_hawinsoft") ||
      sessionStorage.getItem("token_hawinsoft") ||
      sessionStorage.getItem("email_hawinsoft")
    ) {
      this.showMenuPrivate = true;
      this.id = sessionStorage.getItem("id_hawinsoft");
      this.email = sessionStorage.getItem("email_hawinsoft");
      this.token = sessionStorage.getItem("token_hawinsoft");
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
    goLogin() {
      router.push({ name: "Login" });
    },
    logout() {
      sessionStorage.id_hawinsoft = "";
      sessionStorage.token_hawinsoft = "";
      this.showMenuPrivate = false;
      router.push({ name: "Public" });
    }
  }
};
</script>

<style>
</style>
