<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogInative" persistent :max-width="this.data.size">
        <v-card>
          <v-card-title>
            <span class="headline">Inativo</span>
          </v-card-title>
          <v-card-text>
            <h2 class="title font-weight-light mb-3">Para obter detalhes é preciso ativá-lo, deseja reativar ?</h2>
            <v-flex xs12>
              <v-alert :value="alertShowError" outline type="error">{{this.message}}</v-alert>
              <v-alert :value="alertShowSuccess" outline type="success">{{this.message}}</v-alert>
            </v-flex>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" outline @click="close()">Não</v-btn>
            <v-btn color="success" outline @click="activeRpa()">Sim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-layout>
</template>

<script>
import { EventBus } from "@/services/event-bus.js";
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    close() {
      this.dialogInative = false;
    }
  },
  mounted() {
    EventBus.$on("dialogInative", event => {
      this.dialogInative = event;
    });
  },
  data() {
    return {
      alertShowError: false,
      alertShowSuccess: false,
      message: "",
      dialogInative: false
    };
  }
};
</script>

<style>
</style>