<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <div v-if="showMenuPrivate">
        <v-btn dark icon v-on="on">
          <v-icon>person</v-icon>
        </v-btn>
      </div>
      <div v-if="!showMenuPrivate">
        <v-btn outline @click="goLogin()">LOG IN</v-btn>
      </div>
    </template>

    <v-list v-if="showMenuPrivate">
      <v-list-tile>
        <v-list-tile-title>
          <v-icon color="primary">person</v-icon>
          {{id}}
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
import router from "@/router";
export default {
  showMenuPrivate: false,
  id: "",
  token: "",
  beforeCreate() {
    if (
      sessionStorage.getItem("id_hawinsoft") != "" &&
      sessionStorage.getItem("token_hawinsoft") != ""
    ) {
      this.showMenuPrivate = true;
      this.id = sessionStorage.getItem("id_hawinsoft");
      this.token = sessionStorage.getItem("token_hawinsoft");
    } else {
      this.showMenuPrivate = false;
      router.push({ name: "Public" });
    }
  },
  methods: {
    goLogin() {
      router.push({ name: "Login" });
    },
    logout() {
      sessionStorage.id_hawinsoft = "";
      sessionStorage.token_hawinsoft = "";
      router.push({ name: "Public" });
    }
  }
};
</script>

<style>
</style>
