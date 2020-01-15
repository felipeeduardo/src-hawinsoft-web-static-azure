<template>
  <v-container grid-list-md>
    <dialog-generic :data="dataDialog" />
    <h1 class="title font-weight-light">
      <v-icon>memory</v-icon>Robotic process automation
    </h1>
    <v-layout justify-center wrap class="mt-3">
      <v-flex xs12 sm4 text-xs-center>
        <v-card height="380">
          <v-card-text>
            <v-flex xs12>
              <v-img :src="require('@/assets/img/hawinsoft-bot.png')" contain height="180"></v-img>
            </v-flex>
            <v-flex xs12>
              <h1 class="title font-weight-light" color="grey--text">{{this.pageTitle}}</h1>
            </v-flex>
            <v-flex xs12>
              <!--button upload-->
              <upload-button
                color="success"
                flat
                round
                block
                large
                @file-update="fileImport"
                title="Importar"
                accept=".txt"
              ></upload-button>
              <v-btn color="success" large flat outline round @click="playRpa()">Iniciar</v-btn>
              <v-btn color="error" large flat outline round @click="stopRpa()">Parar</v-btn>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4>
        <v-card height="380">
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12>
                <v-textarea outline label="Visualizar" v-model="preview"></v-textarea>
              </v-flex>
              <v-flex xs10>
                <h3 class="font-weight-light" color="red--text">Sucesso</h3>
              </v-flex>
              <v-flex xs2>
                <h3 class="font-weight-light">{{this.qtdSuccess}}</h3>
              </v-flex>
              <v-flex xs10>
                <h3 class="font-weight-light" color="success">Erro</h3>
              </v-flex>
              <v-flex xs2>
                <h3 class="font-weight-light">{{this.qtdError}}</h3>
              </v-flex>
              <v-flex xs10>
                <h3 class="font-weight-light" color="success">Total</h3>
              </v-flex>
              <v-flex xs2>
                <h3 class="font-weight-light">{{this.qtdTotal}}</h3>
              </v-flex>
              <v-flex xs12 text-xs-center>
                <v-btn
                  class="mt-3"
                  color="success"
                  large
                  flat
                  outline
                  round
                  @click="confirmImport()"
                >Confirmar importação</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4>
        <v-card height="380" class="scroll-y">
          <v-card-text>
            <time-line :data="listSteps" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 text-xs-center class="mt-4">
        <v-btn class="sizeBtnResult" color="primary" large flat outline round @click="ResultsRpa()">ver Resultados</v-btn>
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
import TimeLine from "@/components/organisms/TimeLine";
export default {
  components: {
    DialogGeneric,
    UploadButton,
    TimeLine
  },
  computed: {
    ...mapState("product", ["product"]),
    ...mapState("auth", ["auth"])
  },
  created() {
    const selected = this.product.filter(
      rpa => rpa.id_rpa_type == this.$route.params.Rid
    );
    this.pageTitle = selected[0].name_rpa;
    //profile access -> 3 access basic
    this.profile = this.auth.id_user_profile == 3 ? false : true;
    if (!this.profile) {
      this.cards[0].path = "";
      this.cards[0].hoveText = "Desabled";
      this.cards[0].hoveTextColor = "red--text";
    }
  },
  data() {
    return {
      dataDialog: {
        // success | information | error
        type: "",
        title: "",
        textButton: "OK",
        iconButton: "check",
        sessionExpired: false,
        size: "290"
      },
      listSteps: [
        {
          idStep: "1",
          eventBot: "input",
          dataBot: "input teste"
        },
        { idStep: "2", eventBot: "click", dataBot: "" },
        { idStep: "3", eventBot: "getText", dataBot: "" }
      ],
      data: [],
      dataImport: {
        token: "",
        id_user: "",
        id_rpa_type: "",
        import_data: ""
      },
      pageTitle: "",
      profile: "",
      preview: "",
      count: 0,
      qtdSuccess: 0,
      qtdTotal: 0,
      qtdError: 0
    };
  },
  methods: {
    playRpa() {
      this.dataDialog.type = "information";
      this.dataDialog.title = "Robô iniciado";
      EventBus.$emit("dialogGeneric", true);
    },
    stopRpa() {
      this.dataDialog.type = "success";
      this.dataDialog.title = "Robô parado";
      EventBus.$emit("dialogGeneric", true);
    },
    ResultsRpa() {
      router.push({ name: "RpaResults" });
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
<style scoped>
.sizeBtnResult {
  width: 95%;
}
</style>
