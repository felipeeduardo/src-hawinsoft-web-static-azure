<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogImport" :max-width="this.data.size">
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ this.data.nameRpa }}</div>
              <span>Upload Backlog</span>
            </div>
          </v-card-title>
          <v-card-text>
            <h3 class="font-weight-light" v-if="this.data.countInput > 1">
              O backlog deve conter apenas
              <b>{{ this.data.countInput }} colunas</b> separados por
              <b>| (pipe)</b> e finalizados com
              <b>; (ponto e vírgula)</b>
            </h3>
            <h3 class="font-weight-light" v-if="this.data.countInput <= 1">
              O backlog deve conter apenas
              <b>{{ this.data.countInput }} coluna</b>
              finalizados com
              <b>; (ponto e vírgula)</b>
            </h3>
            <v-flex xs12 mb-4 mt-3 text-xs-center>
              <h3 class="font-weight-light">
                Upload limite:
                <b>30 linhas por backlog (.txt).</b>
              </h3>
              <upload-button
                outline
                color="primary"
                @file-update="fileImport"
                title="Upload"
                accept=".txt"
              ></upload-button>
            </v-flex>
            <v-flex xs12>
              <v-textarea
                readonly
                outline
                label="Preview"
                v-model="this.preview"
                v-show="this.dataPreview != ''"
              ></v-textarea>
            </v-flex>
            <v-flex xs12>
              <v-alert :value="alertShowSuccess" outline type="success">{{
                this.messageSuccess
              }}</v-alert>
              <v-alert :value="alertShowError" outline type="error">{{
                this.messageErr
              }}</v-alert>
            </v-flex>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="btConfirm"
              color="success"
              flat
              @click="confirmImport()"
              >Confirmar, {{ this.qtdRow }} item(s)</v-btn
            >
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
    UploadButton,
  },
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
    ...mapActions("rpa", ["uploadBacklog"]),
    close() {
      this.dialogImport = false;
    },
    fileImport(file) {
      const reader = new FileReader();
      const read = new Promise((resolve, reject) => {
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsText(file);
      });
      read.then((res) => {
        res.split(";").forEach((element) => {
          let row = element.replace("\n", "").replace("\r", "");
          if (row != "") {
            this.btConfirm = false;
            this.qtdRow++;
            if (this.qtdRow <= 30) {
              this.dataPreview.push(row);
              this.preview += row + "\n";
            }
          }
        });
      });
    },
    confirmImport() {
      if (this.dataPreview != "") {
        this.dataPreview.forEach((element) => {
          this.qtdRowPipe = 0;
          this.dataUploadBacklog.token = this.auth.token;
          this.dataUploadBacklog.id_user = this.auth.user.id_user;
          this.dataUploadBacklog.id_rpa = parseInt(this.$route.params.Rid);
          this.dataUploadBacklog.backlog_data = element;
          //qtd columns
          element.split("|").forEach(() => {
            this.qtdRowPipe++;
          });
          //verify
          if (this.qtdRowPipe == this.data.countInput) {
            this.qtdUploadSuccess++;
            this.dialogImport = false;
            this.uploadBacklog(this.dataUploadBacklog)
              .then((res) => {
                if (res.status == 204) {
                  this.count++;
                  this.alertShowSuccess = true;
                  this.btConfirm = true;
                  this.messageSuccess =
                    "Backlog com " +
                    this.qtdUploadSuccess +
                    " item(s) válido importado.";
                    this.dialogImport = false;
                }
              })
              .catch((err) => {
                if (err.response.status == 401) {
                  EventBus.$emit("dialogGeneric", true, this.dataDialog);
                } else {
                  this.alertShowError = true;
                  this.messageErr = "Erro em sua requisição.";
                }
              });
          } else {
            this.qtdUploadErr++;
            this.alertShowError = true;
            this.messageErr =
              this.qtdUploadErr +
              " linha(s) com quantidade de colunas inválidas.";
          }
        });
      } else {
        this.alertShowError = true;
        this.messageErr = "Backlog vazio.";
      }
    },
  },
  mounted() {
    EventBus.$on("dialogImport", (event) => {
      this.dialogImport = event;
    });
  },
  data() {
    return {
      alertShowError: false,
      alertShowSuccess: false,
      dialogImport: false,
      btConfirm: true,
      qtdUploadSuccess: 0,
      qtdUploadErr: 0,
      qtdRow: 0,
      qtdRowPipe: 0,
      preview: "",
      dataPreview: [],
      messageSuccess: "",
      messageErr: "",
      dataUploadBacklog: {
        token: "",
        id_user: "",
        id_rpa: "",
        backlog_data: "",
      },
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290",
      },
    };
  },
};
</script>

<style>
</style>