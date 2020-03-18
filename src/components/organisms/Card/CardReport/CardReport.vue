<template>
  <v-layout justify-center wrap>
    <v-flex xs12 sm6 class="mt-3">
      <v-card class="elevation-0">
        <v-card-text>
          <v-flex xs12 class="mt-3">
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

            <v-flex xs12 text-xs-center class="mt-5">
              <v-btn
                :disabled="!valid"
                color="success"
                block
                large
                flat
                outline
                round
                @click="submit()"
              >Enviar</v-btn>
            </v-flex>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 class="mt-3" text-xs-center>
      <p class="text-xs-center">
        <v-icon>email</v-icon>
      </p>
      <h2 class="font-weight-light primary--text">suporte@hawinsoft.com.br</h2>
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
