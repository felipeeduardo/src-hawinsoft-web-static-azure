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
                name="password"
                label="Confirm Password"
                id="password"
                type="password"
              ></v-text-field>
              <v-text-field prepend-icon="announcement" name="email" label="Project" type="text"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <vue-recaptcha
              ref="recaptcha"
              @verify="onVerify"
              @expired="onExpired"
              :sitekey="sitekey"
            >
              <v-btn color="success" flat>
                <v-icon>person_add</v-icon>
              </v-btn>
            </vue-recaptcha>
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
  data: {
    sitekey: "6LdgGlcUAAAAAFIsWvC1zj-34STRZkLGBRcTArdl"
  },
  methods: {
    onSubmit: function() {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function(response) {
      console.log("Verify: " + response);
    },
    onExpired: function() {
      console.log("Expired");
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    }
  }
};
</script>