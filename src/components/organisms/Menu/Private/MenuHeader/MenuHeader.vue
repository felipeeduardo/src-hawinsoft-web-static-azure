<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <div v-show="showMenuPrivate">
        <v-btn dark icon @click="goPayment()">
          <v-icon>payment</v-icon>
        </v-btn>
        <v-btn dark icon v-on="on">
          <v-icon>person_pin</v-icon>
        </v-btn>
      </div>
      <div v-show="!showMenuPrivate">
        <v-btn outline @click="goLogin()">LOG IN</v-btn>
      </div>
    </template>
    <v-list v-if="showMenuPrivate">
      <div class="text-xs-center">
        <v-img :src="require('@/assets/img/hawinsoft-id.png')" contain max-height="60"></v-img>
      </div>
      <v-list-tile :style="{ cursor: 'pointer'}">
        <v-list-tile-title>{{this.auth.email}}</v-list-tile-title>
      </v-list-tile>
      <v-divider light></v-divider>
      <v-list-tile :style="{ cursor: 'pointer'}">
        <v-list-tile-title @click="goPayment()">
          <v-icon>payment</v-icon>Inserir créditos
        </v-list-tile-title>
      </v-list-tile>
      <v-list-tile :style="{ cursor: 'pointer'}">
        <v-list-tile-title @click="logout()">
          <v-icon>exit_to_app</v-icon>Sair
        </v-list-tile-title>
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
      showMenuPrivate: false
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
    goMessage() {
      router.push({ name: "Message" });
    },
    goPayment() {
      this.getSessionIdPageSeguro();
      router.push({ name: "Payment" });
    },
    logout() {
      this.showMenuPrivate = false;
      sessionStorage.hawinsoft = false;
      sessionStorage.hawinsoft_profile = "";
      this.logOut();
      router.push({ name: "Public" });
    }
  }
};
</script>

<style>
</style>
