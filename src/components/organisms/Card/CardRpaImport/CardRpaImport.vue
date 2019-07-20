<template>
  <v-layout row wrap class="py-3">
    <dialog-generic :data="dataDialog" />
    <v-flex xs12 sm4>
      <v-card class="elevation-3">
        <div class="card-bord-top">
          <v-card-text style="height:309px">
            <v-img height="157px" contain :src="require('@/assets/img/hawinsoft-import-data.png')"></v-img>
            <h1 class="title font-weight-light py-2">Exemplpo de arquivo</h1>
            <v-img contain :src="require('@/assets/img/hawinsoft-ex-import.png')"></v-img>
            <h1 class="title font-weight-light py-2">*Limite de linhas 300</h1>
          </v-card-text>
          <v-divider light></v-divider>
          <!--button upload-->
          <upload-button
            class="px-2 py-2"
            color="success"
            block
            @file-update="fileImport"
            title="Importar arquivo"
            accept=".txt"
          ></upload-button>
        </div>
      </v-card>
    </v-flex>
    <v-flex xs12 sm8>
      <v-card class="elevation-3">
        <div class="card-bord-top">
          <v-card-text style="height:320px">
            <v-layout row wrap>
              <v-flex xs12>
                <v-textarea outline label="Visualizar" v-model="preview"></v-textarea>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2" color="red--text">Sucesso</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2">{{this.qtdSuccess}}</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2" color="success">Erro</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2">{{this.qtdError}}</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2" color="success">Total</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2">{{this.qtdTotal}}</h3>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" flat @click="confirmImport()">
              <v-icon left>done</v-icon>Confirmar importação
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import UploadButton from "vuetify-upload-button";
import { EventBus } from "@/services/event-bus.js";
import DialogGeneric from "@/components/organisms/Dialog/DialogGeneric";
export default {
  components: {
    UploadButton,
    DialogGeneric
  },
  computed: {
    ...mapState("auth", ["auth"])
  },
  methods: {
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
            .catch(err => {
              //erro 500 -> auth expired
              EventBus.$emit("dialogGeneric", true);
            });
        });
      } else {
        //arquivo vazio
      }
    }
  },
  data() {
    return {
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
      preview: "",
      count: 0,
      qtdSuccess: 0,
      qtdTotal: 0,
      qtdError: 0
    };
  }
};
</script>
