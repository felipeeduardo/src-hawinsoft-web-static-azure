<template>
  <v-container>
    <dialog-generic :data="dataDialog" />
    <dialog-forgotpw :data="dataDialogForgotPw" />
    <v-layout justify-center wrap>
      <v-flex xs12 sm6>
        <v-img
          :src="require('@/assets/img/hawinsoft-login.jpg')"
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
            </v-form>
            <v-flex xs12 mt-2>
              <v-btn
                class="font-weight-light"
                color="blue darken-4"
                small
                flat
                @click="goForgotPassword()"
              >
                <v-icon small left>fas fa-lock</v-icon>Esqueci minha senha
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
            <v-btn color="primary" outline @click="goNewUse()"
              >Cadastre-se</v-btn
            >
            <v-btn
              :disabled="!valid"
              color="success"
              outline
              @click="validate()"
              >Entrar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import router from "@/router";
import DialogGeneric from "@/components/organisms/dialog/dialogGeneric";
import DialogForgotpw from "@/components/organisms/dialog/dialogForgotPassword";
import VueRecaptcha from "vue-recaptcha";
import { EventBus } from "@/services/event-bus.js";
export default {
  components: {
    VueRecaptcha,
    DialogGeneric,
    DialogForgotpw,
  },
  data() {
    return {
      dataDialogForgotPw: {
        size: "500",
        countInput: 0,
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
      sitekey: "6LesJKQUAAAAAPuojWPcTSEYQbDBOzmQtMTS8j_g",
      valid: true,
      recaptcha: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        email: "",
        password: "",
      },
      isEmailValid: [
        (v) => !!v || "Email é obrigatório",
        (v) => this.reg.test(this.form.email) || "Email inválido",
      ],
      isPasswordValid: [
        (v) => !!v || "Senha é obrigatório",
        (v) => v.length >= 8 || "A senha deve ter no máximo 8 caracteres",
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["logIn"]),
    goNewUse() {
      router.push({ name: "Create" });
    },
    goForgotPassword() {
      EventBus.$emit("dialogForgotPw", true);
    },
    onVerify: function (recaptchaToken) {
      if (recaptchaToken) {
        this.recaptcha = true;
      }
    },
    onExpired: function () {
      this.$refs.recaptcha.reset();
    },
    validate() {
      if (this.$refs.form.validate()) {
        //if (this.recaptcha) {
          this.logIn(this.form)
            .then((res) => {
              if (res.status == 200) {
                sessionStorage.hawinsoft = res.data.user.active;
                sessionStorage.hawinsoft_profile = res.data.user.id_user;
                EventBus.$emit("checkSessionAuth", true);
                router.push({ name: "Home" });
              }
            })
            .catch((err) => {
              if (err.response.status == 404) {
                this.dataDialog.type = "error";
                this.dataDialog.title = "Usuário ou senha inválido.";
                this.dataDialog.textButton = "Ok, Entendi";
                this.dataDialog.iconButton = "check";
                EventBus.$emit("dialogGeneric", true);
              } else {
                this.dataDialog.type = "information";
                this.dataDialog.title = "Serviço temporariamente indisponível.";
                this.dataDialog.textButton = "Ok, Entendi";
                this.dataDialog.iconButton = "check";
                EventBus.$emit("dialogGeneric", true);
              }
            });
        /*} else {
          this.dataDialog.type = "error";
          this.dataDialog.title = "ReCaptcha inválido.";
          this.dataDialog.textButton = "Ok, Entendi";
          this.dataDialog.iconButton = "check";
          EventBus.$emit("dialogGeneric", true);
        }*/
      }
    },
  },
};
</script>