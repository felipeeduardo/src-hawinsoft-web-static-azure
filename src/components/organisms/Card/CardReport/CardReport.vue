<template>
  <v-layout justify-center wrap>
    <v-flex xs12 class="mt-3">
      <v-card class="elevation-3">
        <div class="card-bord-top">
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="subject"
                :counter="30"
                :rules="subjectRules"
                label="Assunto"
                required
              ></v-text-field>

              <v-textarea
                v-model="descrition"
                label="Descrição do problema"
                :rules="descritionRules"
                :counter="300"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" color="success" flat @click="submit()">
              <v-icon left>done</v-icon>Enviar
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
      <div class="py-4">
        <p class="text-xs-center">OU</p>
        <h3 class="text-xs-center" style="color:blue">support@hawinsoft.com.br</h3>
      </div>
    </v-flex>
    <!-- snackbar-->
    <v-snackbar v-model="snackbar" :timeout="timeout" :top="y === 'top'" :color="snackcolor">
      {{ snacktext }}
      <v-btn flat @click="snackbar = false">Fechar</v-btn>
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
      v => !!v || "Assunto é obrigatório",
      v => (v && v.length <= 30) || "O assunto deve ter menos de 10 caracteres"
    ],
    descrition: "",
    descritionRules: [
      v => !!v || "Descrição é obrigatório",
      v =>
        (v && v.length <= 300) || "Descrição deve ter menos de 300 caracteres"
    ]
  }),
  methods: {
    submit() {
      this.snackbar = true;
      this.snacktext = "Problema enviado com sucesso";
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
