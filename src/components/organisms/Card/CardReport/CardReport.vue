<template>
  <v-layout justify-center wrap>
    <v-flex xs12>
      <v-card class="elevation-3">
        <div class="card-bord-top">
          <v-card-title>
            <span class="title font-weight-light">Report problem</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="subject"
                :counter="30"
                :rules="subjectRules"
                label="Subject"
                required
              ></v-text-field>

              <v-textarea
                v-model="descrition"
                label="Descrition"
                :rules="descritionRules"
                :counter="300"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" color="success" flat @click="submit()">
              <v-icon left>done</v-icon>Ok
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-flex>
    <v-flex xs12 sm7 class="py-4">
      <p class="text-xs-center">OR</p>
      <h3 class="text-xs-center" style="color:blue">support@hawinsofr.com.br</h3>
    </v-flex>
    <!-- snackbar-->
    <v-snackbar v-model="snackbar" :timeout="timeout" :top="y === 'top'" :color="snackcolor">
      {{ snacktext }}
      <v-btn flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    snackbar: false,
    y: "top",
    timeout: 6000,
    snacktext: "",
    snackcolor: "",
    subject: "",
    subjectRules: [
      v => !!v || "Subject is required",
      v => (v && v.length <= 30) || "Subject must be less than 10 characters"
    ],
    descrition: "",
    descritionRules: [
      v => !!v || "Descrition is required",
      v =>
        (v && v.length <= 300) || "Descrition must be less than 200 characters"
    ]
  }),
  methods: {
    submit() {
      this.snackbar = true;
      this.snacktext = "Problem sended  success !";
      this.snackcolor = "success";
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
