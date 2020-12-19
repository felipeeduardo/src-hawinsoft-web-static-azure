<template>
  <v-container>
    <dialog-terms :data="dataDialogTerms" />
    <v-layout justify-center wrap>
      <v-flex xs12 sm6>
        <v-img
          :src="require('@/assets/img/hawinsoft-register.jpg')"
          contain
          max-height="600"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="elevation-0 pt-3">
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="fas fa-envelope"
                name="email"
                label="Email"
                type="text"
                required
                :rules="isEmailValid"
                v-model="form.email"
              ></v-text-field>
              <v-text-field
                prepend-icon="fas fa-lock"
                name="password"
                label="Senha"
                id="password"
                type="password"
                required
                maxlength="8"
                :counter="8"
                v-model="form.password"
                :rules="isPasswordValid"
              ></v-text-field>
              <v-text-field
                prepend-icon="fas fa-lock"
                name="confirmpassword"
                label="Confirmação de senha"
                id="confirmpassword"
                type="password"
                required
                maxlength="8"
                :counter="8"
                v-model="form.confirmpassword"
                :rules="isConfirmPasswordValid"
              ></v-text-field>
              <v-text-field
                prepend-icon="fas fa-building"
                name="company"
                label="Empresa ou projeto"
                type="text"
                required
                v-model="form.company"
                :rules="isCompanyValid"
              ></v-text-field>
              <!--<v-checkbox v-model="checkbox" :rules="isCheck" label="você concorda?" required></v-checkbox>-->
            </v-form>
            <v-flex xs12 mt-2>
              <v-btn
                class="font-weight-light"
                color="blue darken-4"
                small
                flat
                @click="goForgotPassword()"
              >
                <v-icon small left>fas fa-file-contract</v-icon>Termos de uso
              </v-btn>
            </v-flex>
            <v-flex xs12 mt-3>
              <vue-recaptcha
                @verify="onVerify"
                @expired="onExpired"
                :sitekey="sitekey"
              ></vue-recaptcha>
            </v-flex>
          </v-card-text>
          <v-divider light></v-divider>
          <v-card-actions class="pa-3">
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              color="success"
              flat
              outline
              @click="validateNew()"
              >Registrar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import DialogTerms from "@/components/organisms/dialog/dialogTermsUser";
import VueRecaptcha from "vue-recaptcha";
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
//import mail from "@/services/mail"
export default {
  components: {
    VueRecaptcha,
    DialogTerms,
  },
  data() {
    return {
      dataDialogTerms: {
        size: "500",
      },
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290",
      },
      valid: true,
      recaptcha: false,
      sitekey: "6LeZ5KEUAAAAACpusBSqlh7MWDGXuIp42Ogkg16z",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        id_user_profile: 2,
        email: "",
        password: "",
        confirmpassword: "",
        company: "",
      },
      checkbox: false,
      isEmailValid: [
        (v) => !!v || "Email é obrigatório",
        (v) => this.reg.test(this.form.email) || "Email inválido",
      ],
      isPasswordValid: [
        (v) => !!v || "Senha é obrigatório",
        (v) => v.length >= 8 || "A senha deve ter no máximo 8 caracteres",
      ],
      isConfirmPasswordValid: [
        (v) => !!v || "Confirmação de senha é obrigatório",
        (v) =>
          v.length >= 8 ||
          "A Confirmação de senha deve ter no máximo 8 caracteres",
        (v) =>
          this.form.password === this.form.confirmpassword ||
          "Senha e confirmação de senha divergente",
      ],
      isCompanyValid: [(v) => !!v || "Empresa ou projeto é obrigatório"],
      isCheck: [(v) => !!v || "Você deve concordar em continuar"],
    };
  },
  methods: {
    ...mapActions("user", ["newUser"]),
    onVerify: function (recaptchaToken) {
      if (recaptchaToken) {
        this.recaptcha = true;
      }
    },
    onExpired: function () {
      this.$refs.recaptcha.reset();
    },
    goForgotPassword() {
      EventBus.$emit("dialogTermsUser", true);
    },
    validateNew() {
      if (this.$refs.form.validate()) {
        if (this.recaptcha) {
          this.newUser(this.form)
            .then((res) => {
              if (res.status == 200) {
                if (res.data.cod == 0) {
                  const data = {
                    type: "success",
                    title: "Cadastro efetuado com sucesso.",
                    textButton: "Ok, Entendi",
                    iconButton: "check",
                    sessionExpired: false,
                  };
                  EventBus.$emit("dialogGeneric", true, data);
                } else {
                  const data = {
                    type: "error",
                    title: "Usuário já cadastrado.",
                    textButton: "Ok, Entendi",
                    iconButton: "check",
                    sessionExpired: false,
                  };
                  EventBus.$emit("dialogGeneric", true, data);
                }
              } else {
                const data = {
                  type: "error",
                  title: "Erro.",
                  textButton: "Ok, Entendi",
                  iconButton: "check",
                  sessionExpired: false,
                };
                EventBus.$emit("dialogGeneric", true, data);
              }
            })
            .catch((err) => {
              console.log("err", err);
            });
        } else {
          const data = {
            type: "error",
            title: "ReCaptcha inválido.",
            textButton: "Ok, Entendi",
            iconButton: "check",
            sessionExpired: false,
          };
          EventBus.$emit("dialogGeneric", true, data);
        }
      }
    },
  },
};
</script>
<style>
.card-bord-top {
  border-top-style: solid;
  border-top-color: #357ca5;
}
</style>