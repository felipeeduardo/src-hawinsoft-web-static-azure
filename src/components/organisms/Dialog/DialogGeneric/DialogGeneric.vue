<template>
  <v-layout row justify-center>
    <div>
      <v-dialog
        v-model="dialogGeneric"
        persistent
        :max-width="this.dialogData.size"
      >
        <v-card>
          <v-card-text>
            <v-img
              v-if="this.img"
              height="120px"
              contain
              :src="this.img"
            ></v-img>
            <div class="mt-4">
              <h1 class="title text-xs-center font-weight-light">
                {{ this.dialogData.title }}
              </h1>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="verify()">
              <v-icon left>{{ this.dialogData.iconButton }}</v-icon>
              {{ this.dialogData.textButton }}
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
  /*props: {
    data: {
      type: Object,
      default: null,
    },
  },*/
  methods: {
    ...mapActions("auth", ["logOut"]),
    sessionExpired() {
      EventBus.$emit("checkSessionAuth", false);
      sessionStorage.hawinsoft = false;
      sessionStorage.hawinsoft_profile = "";
      this.dialogGeneric = false;
      this.logOut();
      router.push({ name: "Login" });
    },
    verify() {
      if (this.dialogGeneric.sessionExpired) {
        this.sessionExpired();
      } else {
        this.dialogGeneric = false;
      }
    },
  },
  mounted() {
    EventBus.$on("dialogGeneric", (event, data) => {
      this.dialogGeneric = event;
      this.dialogData.type = data.type;
      this.dialogData.title = data.title;
      this.dialogData.textButton = data.textButton;
      this.dialogData.iconButton = data.iconButton;
      if (data.type == "success") {
        this.img = require("@/assets/img/hawinsoft-success.png");
      }
      if (data.type == "information") {
        this.img = require("@/assets/img/hawinsoft-information.png");
      }
      if (data.type == "error") {
        this.img = require("@/assets/img/hawinsoft-error.png");
      }
    });
  },
  data() {
    return {
      dialogGeneric: false,
      img: "",
      dialogData: {
        type: "",
        title: "",
        textButton: "",
        iconButton: "",
        sessionExpired: true,
        size: "290",
      },
    };
  },
};
</script>

<style>
</style>
