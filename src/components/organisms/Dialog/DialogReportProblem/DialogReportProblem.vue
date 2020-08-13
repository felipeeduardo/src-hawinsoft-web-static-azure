<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogReport" :max-width="this.data.size">
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Relatar problema</div>
              <span>Descreva resumidamente seu problema.</span>
            </div>
          </v-card-title>
          <v-card-text>
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
            <v-flex xs12>
              <v-alert :value="alertShowError" outline type="error">{{this.message}}</v-alert>
              <v-alert :value="alertShowSuccess" outline type="success">{{this.message}}</v-alert>
            </v-flex>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
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
import { mapState, mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    ...mapActions("user", ["newReport"]),
    sendReportProblem() {
      if (this.$refs.form.validate()) {
        const data = {
          token: this.auth.token,
          id_user: this.auth.user.id_user,
          id_status_problem: 1,
          subject: this.subject,
          description: this.descrition,
        };
        this.newReport(data)
          .then((res) => {
            if (res.status == 204) {
              this.alertShowSuccess = true;
              this.message =
                "Seu problema foi enviado com sucesso, em breve estaremos entrando em contato.";
            }
          })
          .catch((err) => {
            if (err.response.status == 401) {
              EventBus.$emit("dialogGeneric", true);
            }
          });
      }
    },
  },
  mounted() {
    EventBus.$on("dialogReport", (event) => {
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
        (v) => !!v || "Assunto é obrigatório",
        (v) =>
          (v && v.length <= 30) || "O assunto deve ter menos de 10 caracteres",
      ],
      descrition: "",
      descritionRules: [
        (v) => !!v || "Descrição é obrigatório",
        (v) =>
          (v && v.length <= 300) ||
          "Descrição deve ter menos de 300 caracteres",
      ],
    };
  },
};
</script>

<style>
</style>