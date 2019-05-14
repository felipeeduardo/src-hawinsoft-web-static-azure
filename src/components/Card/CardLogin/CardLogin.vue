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
            <v-flex xs12>
              <span class="font-weight-light">I forgot my password</span>
            </v-flex>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="goNewUse()">
              <v-icon>person_add</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" color="success" flat @click="validate">
              <v-icon>done</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
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