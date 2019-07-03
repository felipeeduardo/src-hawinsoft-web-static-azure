<template>
  <v-layout justify-center wrap>
    <v-flex xs12 sm5>
      <v-card class="elevation-3">
        <div class="card-bord-top">
          <v-card-title>
            <span class="title font-weight-light">{{this.cardTitle}}</span>
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
                :disabled="true"
              ></v-text-field>
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
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("product", ["product"]),
    ...mapState("auth", ["auth"])
  },
  created() {
    const selected = this.product.filter(
      rpa => rpa.id_user_product == this.$route.params.Rid
    );
    this.cardTitle = selected[0].name_rpa;
    this.form.company = this.auth.company;
  },
  data() {
    return {
      cardTitle: "",
      valid: true,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        id_user_profile: 3,
        email: "",
        password: "",
        confirmpassword: "",
        company: ""
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
        v => v.length >= 8 || "Password must be than 8 characters"
      ],
      isConfirmPasswordValid: [
        v => !!v || "Confirm password is required",
        v => v.length >= 8 || "Confirm password must be than 8 characters",
        v =>
          this.form.password === this.form.confirmpassword ||
          "password and confirm password divergent"
      ]
    };
  },
  methods: {
    ...mapActions("user", ["newUser"]),
    validate(event) {
      if (this.$refs.form.validate()) {
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
