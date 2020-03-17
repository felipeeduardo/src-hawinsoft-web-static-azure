<template>
  <v-container>
    <v-layout justify-center wrap>
      <v-flex xs12 sm6>
        <v-flex xs12 class="mt-2 text-center" text-xs-center>
          <h1 class="font-weight-light primary--text">HAWINSOFT</h1>
          <h2 class="font-weight">
            Web scraping
            <v-icon color="success">sync_alt</v-icon>Browser remote
          </h2>
        </v-flex>
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
        <v-flex xs12 mt-3>
          <span class="font-weight-light">Esqueci a minha senha</span>
        </v-flex>
        <v-flex xs12 mt-3>
          <vue-recaptcha @verify="onVerify" @expired="onExpired" :sitekey="sitekey"></vue-recaptcha>
        </v-flex>
        <v-flex xs12 mt-3>
          <v-btn
            :disabled="!valid"
            color="success"
            block
            large
            outline
            round
            @click="validate()"
          >Entrar</v-btn>
        </v-flex>
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
import { mapActions } from "vuex";
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
    validate() {
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
              // eslint-disable-next-line no-console
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