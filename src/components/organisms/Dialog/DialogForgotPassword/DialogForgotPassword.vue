<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogForgotPw" persistent :max-width="this.data.size">
        <v-card>
          <v-card-title>
            <span class="headline">Esqueci minha senha</span>
          </v-card-title>
          <v-card-text>
            <h2 class="title font-weight-light">A redefinição de sua senha será enviada por email.</h2>
            <v-form ref="form" v-model="validForgot" lazy-validation>
              <v-text-field
                class="mb-3 mt-3"
                prepend-icon="fas fa-envelope"
                name="email"
                label="Email"
                type="text"
                :rules="isEmailValidForgot"
                v-model="form.emailForgot"
              ></v-text-field>
            </v-form>
            <v-flex xs12>
              <v-alert :value="alertShowError" outline type="error">{{this.message}}</v-alert>
              <v-alert :value="alertShowSuccess" outline type="success">{{this.message}}</v-alert>
            </v-flex>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" outline @click="close()">Cancelar</v-btn>
            <v-btn :disabled="!validForgot" color="success" outline @click="sendForgotPw()">Confirmar</v-btn>
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
      this.dialogForgotPw = false;
    },
    sendForgotPw() {
      if (this.$refs.form.validate()) {
        this.alertShowSuccess = true;
        this.message = "Sucesso";
      }
    }
  },
  mounted() {
    EventBus.$on("dialogForgotPw", event => {
      this.dialogForgotPw = event;
    });
  },
  data() {
    return {
      alertShowError: false,
      alertShowSuccess: false,
      message: "",
      dialogForgotPw: false,
      validForgot: true,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        emailForgot: ""
      },
      isEmailValidForgot: [
        v => !!v || "Email é obrigatório",
        v => this.reg.test(this.form.emailForgot) || "Email inválido"
      ]
    };
  }
};
</script>

<style>
</style>