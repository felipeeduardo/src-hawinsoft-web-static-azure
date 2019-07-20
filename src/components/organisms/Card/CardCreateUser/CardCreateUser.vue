<template>
  <v-container>
    <v-layout justify-center wrap>
      <v-flex xs12 sm5>
        <v-card class="elevation-4">
          <div class="card-bord-top">
            <v-card-title>
              <span class="title font-weight-light">Novo usuário</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  prepend-icon="mail"
                  name="email"
                  label="Email"
                  type="text"
                  required
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
                <v-text-field
                  prepend-icon="lock"
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
                  prepend-icon="business"
                  name="company"
                  label="Empresa ou projeto"
                  type="text"
                  required
                  v-model="form.company"
                  :rules="isCompanyValid"
                ></v-text-field>
                <v-checkbox v-model="checkbox" :rules="isCheck" label="você concorda?" required></v-checkbox>
                <v-flex xs12 mt-3>
                  <vue-recaptcha @verify="onVerify" @expired="onExpired" :sitekey="sitekey"></vue-recaptcha>
                </v-flex>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" color="success" flat @click="validate">
                <v-icon left>done</v-icon>Registrar
              </v-btn>
            </v-card-actions>
            <!-- snackbar-->
            <v-snackbar
              v-model="snackbar"
              :timeout="timeout"
              :top="y === 'top'"
              :color="snackcolor"
            >
              {{ snacktext }}
              <v-btn flat @click="snackbar = false">Fechar</v-btn>
            </v-snackbar>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import VueRecaptcha from "vue-recaptcha";
import router from "@/router";
//import mail from "@/services/mail"
export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
      valid: true,
      recaptcha: false,
      sitekey: "6LeZ5KEUAAAAACpusBSqlh7MWDGXuIp42Ogkg16z",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        id_user_profile: 2,
        email: "",
        password: "",
        confirmpassword: "",
        company: ""
      },
      checkbox: false,
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
      ],
      isConfirmPasswordValid: [
        v => !!v || "Confirmação de senha é obrigatório",
        v => v.length >= 8 || "A Confirmação de senha deve ter no máximo 8 caracteres",
        v =>
          this.form.password === this.form.confirmpassword ||
          "Senha e confirmação de senha divergente"
      ],
      isCompanyValid: [v => !!v || "Empresa ou projeto é obrigatório"],
      isCheck: [v => !!v || "Você deve concordar em continuar"]
    };
  },
  methods: {
    ...mapActions("user", ["newUser"]),
    onVerify: function(recaptchaToken) {
      if (recaptchaToken) {
        this.recaptcha = true;
      }
    },
    onExpired: function() {
      console.log("Expired");
      this.$refs.recaptcha.reset();
    },
    validate(event) {
      if (this.$refs.form.validate()) {
        if (this.recaptcha) {
          this.newUser(this.form)
            .then(res => {
              if (res.data.message == "success") {
                this.snackbar = false;

                router.push({ name: "Success" });
              } else {
                this.snackbar = true;
                this.snacktext = "Erro !";
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