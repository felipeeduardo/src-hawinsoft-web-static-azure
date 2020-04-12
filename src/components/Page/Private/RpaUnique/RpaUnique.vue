<template>
  <v-container grid-list-md>
    <dialog-generic :data="dataDialog" />
    <h1 class="title font-weight-light">
      <v-icon class="mr-1">memory</v-icon>Robotic process automation
    </h1>
    <v-layout justify-center wrap class="mt-3">
      <v-flex xs12>
        <v-card class="elevation-0">
          <v-card-text>
            <h1 class="title font-weight-light">{{this.pageTitle}}</h1>
            <v-divider class="mt-3"></v-divider>
            <!--UPLOAD DATA-->
            <v-flex xs12 mt-2 text-xs-center>
              <span class="font-weight-light">
                *Sua importação terá apenas
                <b>{{this.countInput}}</b> coluna(s) separado(s) por
                <b>;</b> (ponto e vírgula)
              </span>
            </v-flex>
            <v-flex xs12 mt-1 text-xs-center>
              <upload-button
                round
                outline
                color="primary"
                @file-update="fileImport"
                title="Importar"
                accept=".txt"
              ></upload-button>
            </v-flex>
            <v-flex xs12 text-xs-center>
              <span class="font-weight-light">Sucesso:</span>
              <span class="font-weight-light ml-2">{{this.qtdSuccess}}</span>
              <span class="font-weight-light ml-3">Erro:</span>
              <span class="font-weight-light ml-2">{{this.qtdError}}</span>
              <span class="font-weight-light ml-3">Total:</span>
              <span class="font-weight-light ml-2">{{this.qtdTotal}}</span>
            </v-flex>
            <v-layout justify-center wrap>
              <v-flex xs12 sm6>
                <!--MENU CONTROL-->
                <v-list>
                  <v-list-tile @click="confirmImport()">
                    <v-list-tile-action>
                      <v-icon color="primary">check</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="'Confirmar importação'"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile @click="playRpa()">
                    <v-list-tile-action>
                      <v-icon color="success">play_arrow</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="'Iniciar'"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
              <v-flex xs12 sm6>
                <v-list>
                  <v-list-tile @click="ResultsRpa()">
                    <v-list-tile-action>
                      <v-icon color="primary">bar_chart</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="'Resultados'"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile @click="deleteRpa()">
                    <v-list-tile-action>
                      <v-icon color="error">delete</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="'Excluir'"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
            </v-layout>
            <v-flex xs12 mt-3>
              <json-viewer :value="this.steps" :expand-depth="3" copyable boxed sort></json-viewer>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
import router from "@/router";
import UploadButton from "vuetify-upload-button";
import DialogGeneric from "@/components/organisms/Dialog/DialogGeneric";
import JsonViewer from "vue-json-viewer";
export default {
  components: {
    DialogGeneric,
    UploadButton,
    JsonViewer
  },
  computed: {
    ...mapState("product", ["product"]),
    ...mapState("auth", ["auth"])
  },
  created() {
    const data = {
      id_user: this.auth.id,
      id_rpa: this.$route.params.Rid,
      token: this.auth.token
    };
    this.UniqueRpaUser(data)
      .then(res => {
        res.data.forEach(element => {
          this.pageTitle = element.name;
          this.steps = JSON.parse(element.steps);
          this.steps.Steps.forEach(el => {
            if (el.BotEvent == "input") this.countInput++;
          });
        });
      })
      .catch(() => {
        //erro 500 -> auth expired
        EventBus.$emit("dialogGeneric", true);
      });
  },
  data() {
    return {
      steps: {},
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290"
      },
      data: [],
      dataImport: {
        token: "",
        id_user: "",
        id_rpa_type: "",
        import_data: ""
      },
      pageTitle: "",
      preview: "",
      countInput: 0,
      count: 0,
      qtdSuccess: 0,
      qtdTotal: 0,
      qtdError: 0
    };
  },
  methods: {
    ...mapActions("rpa", [
      "RpaBrowserRemore",
      "UniqueRpaUser",
      "deleteRpaUser"
    ]),
    playRpa() {
      const data = {
        id_user: this.auth.id,
        id_rpa: this.$route.params.Rid,
        token: this.auth.token
      };
      this.RpaBrowserRemore(data)
        .then(res => {
          // eslint-disable-next-line no-console
          console.log("browserRemote -> res", res);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log("err", err);
        });
    },
    ResultsRpa() {
      router.push({ name: "RpaResults" });
    },
    goPanel() {
      router.push({ name: "Rpa" });
    },
    deleteRpa() {
      const data = {
        id_user: this.auth.id,
        id_rpa: this.$route.params.Rid,
        token: this.auth.token
      };
      this.deleteRpaUser(data)
        .then(res => {
          if (res.status == 201) router.push({ name: "Rpa" });
        })
        .catch(() => {
          //erro 500 -> auth expired
          EventBus.$emit("dialogGeneric", true);
        });
    },
    ...mapActions("rpa", ["importDataRpa"]),
    fileImport(file) {
      const reader = new FileReader();
      const read = new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsText(file);
      });
      read.then(res => {
        res.split(";").forEach(element => {
          let line = element.replace("\n", "").replace("\r", "");
          if (line != "") {
            this.qtdTotal++;
            if (this.qtdTotal <= 300) {
              if (line.length == 11) {
                this.qtdSuccess++;
              } else {
                this.qtdError++;
              }
              this.data.push(line);
              this.preview += line + "\n";
            }
          }
        });
      });
    },
    confirmImport() {
      if (this.data != "") {
        this.data.forEach(element => {
          this.dataImport.token = this.auth.token;
          this.dataImport.id_user = this.auth.id;
          this.dataImport.id_rpa_type = this.$route.params.Rid;
          this.dataImport.import_data = element + ";";
          this.importDataRpa(this.dataImport)
            .then(res => {
              if (res.status == 201) {
                this.count++;
                if (this.qtdSuccess == this.count) {
                  this.dataDialog.type = "success";
                  this.dataDialog.title = "Importado com sucesso";
                  this.dataDialog.textButton = "OK";
                  this.dataDialog.iconButton = "check";
                  this.dataDialog.sessionExpired = false;

                  EventBus.$emit("dialogGeneric", true);
                }
              }
            })
            .catch(() => {
              //erro 500 -> auth expired
              EventBus.$emit("dialogGeneric", true);
            });
        });
      } else {
        //arquivo vazio
        this.dataDialog.type = "error";
        this.dataDialog.title = "Dados para importação invalido.";
        this.dataDialog.textButton = "Ok, Entendi";
        this.dataDialog.iconButton = "check";
        EventBus.$emit("dialogGeneric", true);
      }
    }
  }
};
</script>