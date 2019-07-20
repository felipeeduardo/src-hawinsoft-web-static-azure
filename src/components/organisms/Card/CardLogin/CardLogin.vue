<template>
  <v-container>
    <v-layout justify-center wrap>
      <v-flex xs12 sm5>
        <v-card class="elevation-3">
          <div class="card-bord-top">
            <v-card-text>
              <v-img class="mb-3" height="120px" contain :src="require('@/assets/img/hawinsoft-add-user.png')"></v-img>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  prepend-icon="mail"
                  name="email"
                  label="Email"
                  type="text"
                  :rules="isEmailValid"
                  v-model="form.email"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
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
              <v-flex xs12 mt-1>
                <span class="font-weight-light">Esqueci a minha senha</span>
              </v-flex>
              <v-flex xs12 mt-3>
                <vue-recaptcha @verify="onVerify" @expired="onExpired" :sitekey="sitekey"></vue-recaptcha>
              </v-flex>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="primary" @click="goNewUse()">
                <v-icon left>person_add</v-icon>Registre-se
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" color="success" flat @click="validate()">
                <v-icon left>done</v-icon>Entrar
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- snackbar-->
    <v-snackbar v-model="snackbar" :timeout="timeout" :top="y === 'top'" :color="snackcolor">
      {{ snacktext }}
      <v-btn flat @click="snackbar = false">Fechar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "@/router";
import VueRecaptcha from "vue-recaptcha";
import { EventBus } from "@/services/event-bus.js";
export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
      showMenuPrivate: false,
      sitekey: "6LesJKQUAAAAAPuojWPcTSEYQbDBOzmQtMTS8j_g",
      valid: true,
      recaptcha: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        email: "",
        password: ""
      },
      snackbar: false,
      y: "top",
      timeout: 6000,
      snacktext: "",
      snackcolor: "",
      isEmailValid: [
        v => !!v || "Email é obrigatório",
        v => this.reg.test(this.form.email) || "Email inválido"
      ],
      isPasswordValid: [
        v => !!v || "Senha é obrigatório",
        v => v.length >= 8 || "A senha deve ter no máximo 8 caracteres"
      ]
    };
  },
  methods: {
    ...mapActions("auth", ["logIn"]),
    onVerify: function(recaptchaToken) {
      if (recaptchaToken) {
        this.recaptcha = true;
      }
    },
    onExpired: function() {
      this.$refs.recaptcha.reset();
    },
    goNewUse() {
      router.push({ name: "Create" });
    },
    validate(event) {
      if (this.$refs.form.validate()) {
        if (this.recaptcha) {
          this.logIn(this.form)
            .then(res => {
              if (res.data.auth) {
                this.snackbar = false;
                sessionStorage.hawinsoft = res.data.auth;
                sessionStorage.hawinsoft_profile = res.data.id_user_profile;
                EventBus.$emit("showMenuPrivate", true);
                router.push({ name: "Home" });
              } else {
                this.snackbar = true;
                this.snacktext = "Usuário ou senha inválido!";
                this.snackcolor = "error";
              }
            })
            .catch(err => {
              console.log("err", err);
            });
        }
      } else {
        this.snackbar = true;
        this.snacktext = "Recaptcha inválido!";
        this.snackcolor = "error";
      }
    }
  }
};
</script>
<style>
.card-bord-top {
  border-top-style: solid;
  border-top-color: #357ca5;
}
</style>