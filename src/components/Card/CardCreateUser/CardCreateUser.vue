<template>
  <v-container>
    <v-layout justify-center wrap>
      <v-flex xs12 sm5>
        <v-card class="elevation-4">
          <v-card-title>
            <span class="title font-weight-light">New user</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="mail" name="email" label="Email" type="text"></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="confpassword"
                label="Confirm Password"
                id="confpassword"
                type="password"
              ></v-text-field>
              <v-text-field prepend-icon="announcement" name="email" label="Project" type="text"></v-text-field>
              <v-flex xs12>
                <vue-recaptcha :sitekey="sitekey"></vue-recaptcha>
              </v-flex>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat block>
              <v-icon>person_add</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

        <!--<v-alert :value="true" type="error">This is a error alert.</v-alert>-->
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
      sitekey: "6LeZ5KEUAAAAACpusBSqlh7MWDGXuIp42Ogkg16z"
    };
  }
};
</script>