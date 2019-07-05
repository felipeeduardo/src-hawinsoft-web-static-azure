<template>
  <v-layout row wrap class="mt-3">
    <dialog-generic :data="data" />
    <v-flex xs12>
      <v-btn color="success" outline @click="playRpa()">
        <v-icon left>play_arrow</v-icon>Play
      </v-btn>
      <v-btn color="error" outline @click="stopRpa()">
        <v-icon left>stop</v-icon>Stop
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { EventBus } from "@/services/event-bus.js";
import DialogGeneric from "@/components/organisms/Dialog/DialogGeneric";
export default {
  components: {
    DialogGeneric
  },
  data() {
    return {
      data: {
        // success | information | error
        type: "success",
        title: "",
        textButton: "OK",
        iconButton: "check",
        sessionExpired: false,
        size: "290"
      }
    };
  },
  methods: {
    playRpa() {
      this.data.title = "Robot started";
      EventBus.$emit("dialogGeneric", true);
    },
    stopRpa() {
      this.data.title = "Robot stoped";
      EventBus.$emit("dialogGeneric", true);
    }
  }
};
</script>

<style>
</style>
