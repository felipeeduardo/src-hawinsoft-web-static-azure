<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogGeneric" persistent :max-width="this.data.size">
        <v-card>
          <v-card-text>
            <v-img v-if="this.img" height="120px" contain :src="this.img"></v-img>
            <div class="mt-4">
              <h1 class="title text-xs-center font-weight-light">{{this.data.title}}</h1>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="verify()">
              <v-icon left>{{this.data.iconButton}}</v-icon>
              {{this.data.textButton}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapActions("auth", ["logOut"]),
    sessionExpired() {
      EventBus.$emit("showMenuPrivate", false);
      sessionStorage.hawinsoft = false;
      sessionStorage.hawinsoft_profile = "";
      this.dialogGeneric = false;
      this.logOut();
      router.push({ name: "Login" });
    },
    verify() {
      if (this.data.sessionExpired) {
        this.sessionExpired();
      } else {
        this.dialogGeneric = false;
      }
    }
  },
  mounted() {
    EventBus.$on("dialogGeneric", event => {
      this.dialogGeneric = event;
      if (this.data.type == "success") {
        this.img = require("@/assets/img/hawinsoft-success.png");
      }
      if (this.data.type == "information") {
        this.img = require("@/assets/img/hawinsoft-information.png");
      }
      if (this.data.type == "error") {
        this.img = require("@/assets/img/hawinsoft-error.png");
      }
    });
  },
  data() {
    return {
      dialogGeneric: false,
      img: ""
    };
  }
};
</script>

<style>
</style>
