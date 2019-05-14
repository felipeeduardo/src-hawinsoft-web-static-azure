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
                name="confpassword"
                label="Confirm Password"
                id="confpassword"
                type="password"
                required
                maxlength="8"
                :counter="8"
                v-model="form.confpassword"
                :rules="isConfPasswordValid"
              ></v-text-field>
              <v-text-field
                prepend-icon="business"
                name="project"
                label="Company or project"
                type="text"
                required
                v-model="form.project"
                :rules="isProjectValid"
              ></v-text-field>
              <v-checkbox v-model="form.checkbox" :rules="isCheck" label="Do you agree?" required></v-checkbox>
              <br>
              <v-flex xs12>
                <vue-recaptcha @verify="onVerify" @expired="onExpired" :sitekey="sitekey"></vue-recaptcha>
              </v-flex>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" color="success" flat @click="validate">
              <v-icon>done</v-icon>Register
            </v-btn>
          </v-card-actions>
          <v-snackbar v-model="snackbar" :color="color" :timeout="timeout" :top="y === 'top'">
            {{ text }}
            <v-btn dark flat @click="snackbar = false">Close</v-btn>
          </v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
      valid: true,
      sitekey: "6LeZ5KEUAAAAACpusBSqlh7MWDGXuIp42Ogkg16z",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        email: "",
        password: "",
        confpassword: "",
        project: "",
        checkbox: false
      },
      snackbar: false,
      color: "success",
      timeout: 6000,
      text: null,
      y: "top",

      isEmailValid: [
        v => !!v || "Email is required",
        v => this.reg.test(this.form.email) || "Invalid email"
      ],
      isPasswordValid: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be than 8 characters"
      ],
      isConfPasswordValid: [
        v => !!v || "Confirm password is required",
        v => v.length >= 8 || "Confirm password must be than 8 characters"
      ],
      isProjectValid: [v => !!v || "Project is required"],
      isCheck: [v => !!v || "You must agree to continue"]
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
    validate() {
      if (this.$refs.form.validate()) {
        this.text = "Successfully submitted registration";
        this.snackbar = true;
      }
    }
  }
};
</script>