<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialogSession" persistent max-width="290">
      <v-card>
        <v-card-text>
          <v-img height="120px" contain :src="require('@/assets/img/hawinsoft-alert.png')"></v-img>
          <div class="py-4">
            <h1 class="title text-xs-center font-weight-light">Session expired!</h1>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" outline @click="sessionExpired()">
            <v-icon left>keyboard_backspace</v-icon>Log in
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
export default {
  methods: {
    ...mapActions("auth", ["logOut"]),
    sessionExpired() {
      EventBus.$emit("showMenuPrivate", false);
      sessionStorage.hawinsoft = false;
      this.dialogSession = false;
      this.logOut();
      router.push({ name: "Login" });
    }
  },
  mounted() {
    EventBus.$on("dialogSession", event => {
      this.dialogSession = event;
    });
  },
  data() {
    return {
      dialogSession: false
    };
  }
};
</script>

<style>
</style>
