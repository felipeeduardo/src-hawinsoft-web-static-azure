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
                maxlength="8"
                :counter="8"
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
              <v-icon left >person_add</v-icon> Register
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" color="success" flat @click="validate">
              <v-icon left>done</v-icon> Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import router from "@/router";
import VueRecaptcha from "vue-recaptcha";
export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
      sitekey: "6LesJKQUAAAAAPuojWPcTSEYQbDBOzmQtMTS8j_g",
      valid: true,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        email: "",
        password: ""
      },
      isEmailValid: [
        v => !!v || "Email is required",
        v => this.reg.test(this.form.email) || "Invalid email"
      ],
      isPasswordValid: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be than 8 characters"
      ]
    };
  },
  methods: {
    onVerify: function(recaptchaToken) {
      //console.log("Verify: " + recaptchaToken);

      const self = this;
      self.status = "submitting";
      self.$refs.recaptcha.reset();

      axios
        .post("https://vue-recaptcha-demo.herokuapp.com/signup", this.form)
        .then(response => {
          self.sucessfulServerResponse = response.data.message;
        })
        .catch(err => {
          self.serverError = getErrorMessage(err);

          //helper to get a displayable message to the user
          function getErrorMessage(err) {
            let responseBody;
            responseBody = err.response;
            if (!responseBody) {
              responseBody = err;
            } else {
              responseBody = err.response.data || responseBody;
            }
            return responseBody.message || JSON.stringify(responseBody);
          }
        })
        .then(() => {
          self.status = "";
        });
    },
    onExpired: function() {
      console.log("Expired");
      this.$refs.recaptcha.reset();
    },
    goNewUse() {
      router.push({ name: "Create" });
    },
    validate() {
      if (this.$refs.form.validate()) {
        router.push({ name: "Home" });
      }
    }
  }
};
</script>