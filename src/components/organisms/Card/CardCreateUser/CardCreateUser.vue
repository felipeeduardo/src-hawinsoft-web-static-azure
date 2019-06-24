<template>
  <v-container>
    <v-layout justify-center wrap>
      <v-flex xs12 sm5>
        <v-card class="elevation-4">
          <v-card-title>
            <span class="title font-weight-light">New user</span>
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
                label="Password"
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
                label="Confirm Password"
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
                label="Company or project"
                type="text"
                required
                v-model="form.company"
                :rules="isCompanyValid"
              ></v-text-field>
              <v-checkbox v-model="checkbox" :rules="isCheck" label="Do you agree?" required></v-checkbox>
              <v-flex xs12 mt-3>
                <vue-recaptcha @verify="onVerify" @expired="onExpired" :sitekey="sitekey"></vue-recaptcha>
              </v-flex>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" color="success" flat @click="validate">
              <v-icon left>done</v-icon>Register
            </v-btn>
          </v-card-actions>
          <!-- snackbar-->
          <v-snackbar v-model="snackbar" :timeout="timeout" :top="y === 'top'" :color="snackcolor">
            {{ snacktext }}
            <v-btn flat @click="snackbar = false">Close</v-btn>
          </v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import http from "@/services/httpClient";
import router from "@/router";
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
        v => !!v || "Email is required",
        v => this.reg.test(this.form.email) || "Invalid email"
      ],
      isPasswordValid: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be than 8 characters"
      ],
      isConfirmPasswordValid: [
        v => !!v || "Confirm password is required",
        v => v.length >= 8 || "Confirm password must be than 8 characters",
        v =>
          this.form.password === this.form.confirmpassword ||
          "password and confirm password divergent"
      ],
      isCompanyValid: [v => !!v || "Project is required"],
      isCheck: [v => !!v || "You must agree to continue"]
    };
  },
  methods: {
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
          http
            .newUser(this.form)
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
        this.snacktext = "Invalid Recaptcha !";
        this.snackcolor = "error";
      }
    }
  }
};
</script>