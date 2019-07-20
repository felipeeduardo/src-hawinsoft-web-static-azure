<template>
  <v-layout row wrap class="mt-3">
    <dialog-generic :data="data" />
    <v-flex xs12>
      <v-btn color="success" outline @click="playRpa()">
        <v-icon left>play_arrow</v-icon>Iniciar
      </v-btn>
      <v-btn color="error" outline @click="stopRpa()">
        <v-icon left>stop</v-icon>Parar
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
      this.data.title = "Robô iniciado";
      EventBus.$emit("dialogGeneric", true);
    },
    stopRpa() {
      this.data.title = "Robô parado";
      EventBus.$emit("dialogGeneric", true);
    }
  }
};
</script>

<style>
</style>
