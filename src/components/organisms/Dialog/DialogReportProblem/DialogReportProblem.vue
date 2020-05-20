<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogReport" persistent :max-width="this.data.size">
        <v-card>
          <v-card-title>
            <span class="headline">Reportar problema</span>
          </v-card-title>
          <v-card-text>
            <h2 class="title font-weight-light">Descreva resumidamente seu problema.</h2>
            <v-form ref="form" v-model="validReport" lazy-validation>
              <v-flex xs12>
                <v-text-field
                  v-model="subject"
                  :counter="30"
                  :rules="subjectRules"
                  label="Assunto"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  v-model="descrition"
                  label="Descrição do problema"
                  :rules="descritionRules"
                  :counter="300"
                ></v-textarea>
              </v-flex>
            </v-form>
            <v-flex xs12 text-xs-center>
              <h2 class="title font-weight-light mt-3">Ou</h2>
              <h2 class="title font-weight-light ma-3 primary--text">suporte@hawinsoft.com.br</h2>
            </v-flex>
            <v-flex xs12>
              <v-alert :value="alertShowError" outline type="error">{{this.message}}</v-alert>
              <v-alert :value="alertShowSuccess" outline type="success">{{this.message}}</v-alert>
            </v-flex>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" outline @click="close()">Cancelar</v-btn>
            <v-btn
              :disabled="!validReport"
              color="success"
              outline
              @click="sendReportProblem()"
            >Confirmar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-layout>
</template>

<script>
import { EventBus } from "@/services/event-bus.js";
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    close() {
      this.dialogReport = false;
    },
    sendReportProblem() {
      if (this.$refs.form.validate()) {
        this.alertShowSuccess = true;
        this.message = "Sucesso";
      }
    }
  },
  mounted() {
    EventBus.$on("dialogReport", event => {
      this.dialogReport = event;
    });
  },
  data() {
    return {
      dialogReport: false,
      alertShowError: false,
      alertShowSuccess: false,
      message: "",
      validReport: true,
      subject: "",
      subjectRules: [
        v => !!v || "Assunto é obrigatório",
        v =>
          (v && v.length <= 30) || "O assunto deve ter menos de 10 caracteres"
      ],
      descrition: "",
      descritionRules: [
        v => !!v || "Descrição é obrigatório",
        v =>
          (v && v.length <= 300) || "Descrição deve ter menos de 300 caracteres"
      ]
    };
  }
};
</script>

<style>
</style>