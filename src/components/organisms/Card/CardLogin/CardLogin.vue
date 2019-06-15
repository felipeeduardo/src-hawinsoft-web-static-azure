<template>
  <v-container>
    <v-layout justify-center wrap>
      <v-flex xs12 sm5>
        <v-card class="elevation-3">
          <v-card-title>
            <span class="title font-weight-light">Login</span>
          </v-card-title>
          <v-card-text>
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
                label="Password"
                id="password"
                type="password"
                required
                maxlength="6"
                :counter="6"
                v-model="form.password"
                :rules="isPasswordValid"
              ></v-text-field>
            </v-form>
            <v-flex xs12 mt-1>
              <span class="font-weight-light">I forgot my password</span>
            </v-flex>
            <v-flex xs12 mt-3>
              <vue-recaptcha @verify="onVerify" @expired="onExpired" :sitekey="sitekey"></vue-recaptcha>
            </v-flex>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="goNewUse()">
              <v-icon left>person_add</v-icon>Register
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" color="success" flat @click="validate()">
              <v-icon left>done</v-icon>Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- snackbar-->
    <v-snackbar v-model="snackbar" :timeout="timeout" :top="y === 'top'" :color="snackcolor">
      {{ snacktext }}
      <v-btn flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import router from "@/router";
import VueRecaptcha from "vue-recaptcha";
import http from "@/services/httpClient";
export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
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
        v => !!v || "Email is required",
        v => this.reg.test(this.form.email) || "Invalid email"
      ],
      isPasswordValid: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must be than 8 characters"
      ]
    };
  },
  methods: {
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
    validate() {
      sessionStorage.token_hawinsoft = "1234";
      sessionStorage.id_hawinsoft = 123;
      if (this.$refs.form.validate()) {
        if (this.recaptcha) {
          http
            .login(this.form)
            .then(res => {
              if (res.data.auth) {
                this.snackbar = false;
                sessionStorage.token_hawinsoft = res.data.token;
                sessionStorage.id_hawinsoft = res.data.id;
                router.push({ name: "Home" });
              } else {
                this.snackbar = true;
                this.snacktext = "Invalid user or password !";
                this.snackcolor = "error";
              }
            })
            .catch(err => {
              console.log("err", err);
            });
        }
      } else {
        this.snackbar = true;
        this.snacktext = "Invalid Recaptcha !";
        this.snackcolor = "error";
      }
    }
  }
};
</script>