<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogImport" persistent :max-width="this.data.size">
        <v-card>
          <v-card-title>
            <span class="headline">Upload backlog</span>
          </v-card-title>
          <v-card-text>
            <h3 class="font-weight-light" v-if="this.data.countInput >1">
              O backlog deve conter apenas
              <b>{{this.data.countInput}} colunas</b> separados por
              <b>| (pipe)</b> e finalizados com
              <b>; (ponto e vírgula)</b>
            </h3>
            <h3 class="font-weight-light" v-if="this.data.countInput <= 1">
              O backlog deve conter apenas
              <b>{{this.data.countInput}} coluna</b>
              finalizados com
              <b>; (ponto e vírgula)</b>
            </h3>
            <v-flex xs12 mb-4 mt-4 text-xs-center>
              <upload-button
                round
                block
                outline
                color="primary"
                @file-update="fileImport"
                title="Upload"
                accept=".txt"
              ></upload-button>
            </v-flex>
            <v-flex xs12>
              <v-textarea readonly outline label="Preview" v-model="this.preview"></v-textarea>
            </v-flex>
            <v-flex xs12>
              <v-alert :value="alertShowError" type="error">{{this.message}}</v-alert>
              <v-alert :value="alertShowSuccess" type="success">{{this.message}}</v-alert>
            </v-flex>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" flat @click="close()">Cancelar</v-btn>
            <v-btn color="success" flat @click="confirmImport()">Confirmar, {{this.qtdRow}} item(s)</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-layout>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
import UploadButton from "vuetify-upload-button";
export default {
  components: {
    UploadButton
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapState("auth", ["auth"])
  },
  methods: {
    ...mapActions("rpa", ["importDataRpa"]),
    close() {
      this.dialogImport = false;
    },
    fileImport(file) {
      const reader = new FileReader();
      const read = new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsText(file);
      });
      read.then(res => {
        res.split(";").forEach(element => {
          let row = element.replace("\n", "").replace("\r", "");
          if (row != "") {
            this.qtdRow++;
            if (this.qtdRow <= 10) {
              this.dataPreview.push(row);
              this.preview += row + "\n";
            }
          }
        });
      });
    },
    confirmImport() {
      if (this.dataPreview != "") {
        this.dataPreview.forEach(element => {
          this.dataImport.token = this.auth.token;
          this.dataImport.id_user = this.auth.id;
          this.dataImport.id_rpa_type = this.$route.params.Rid;
          this.dataImport.import_data = element + ";";
          this.importDataRpa(this.dataImport)
            .then(res => {
              if (res.status == 201) {
                this.count++;
                this.alertShowSuccess = true;
                this.message = "Importado com sucesso.";
              }
            })
            .catch(() => {
              //erro 500 -> auth expired
              this.alertShowError = true;
              this.message = "Erro em sua requisição.";
            });
        });
      } else {
        this.alertShowError = true;
        this.message = "Backlog vazio.";
      }
    }
  },
  mounted() {
    EventBus.$on("dialogImport", event => {
      this.dialogImport = event;
    });
  },
  data() {
    return {
      alertShowError: false,
      alertShowSuccess: false,
      dialogImport: false,
      qtdRow: 0,
      preview: "",
      dataPreview: [],
      message: "",
      dataImport: {
        token: "",
        id_user: "",
        id_rpa_type: "",
        import_data: ""
      }
    };
  }
};
</script>

<style>
</style>