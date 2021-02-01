<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogTermsUser" persistent :max-width="this.data.size">
        <v-card>
          <v-card-title>
            <span class="headline">Termos de uso</span>
          </v-card-title>
          <v-card-text>
            <h2 class="title font-weight-light mb-3">[ Termos ]</h2>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="close()">Ok, Entendi</v-btn>
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
      this.dialogTermsUser = false;
    }
  },
  mounted() {
    EventBus.$on("dialogTermsUser", event => {
      this.dialogTermsUser = event;
    });
  },
  data() {
    return {
      message: "",
      dialogTermsUser: false
    };
  }
};
</script>

<style>
</style>

