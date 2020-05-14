<template>
  <v-container grid-list-md>
    <dialog-generic :data="dataDialog" />
    <dialog-import :data="dataDialogImport" />
    <dialog-remove :data="dataDialogRemoveRpa" />
    <h1 class="title font-weight-light">
      <v-icon class="mr-1">memory</v-icon>Robotic process automation
    </h1>
    <v-layout justify-center wrap class="mt-3">
      <v-flex xs12 sm6>
        <v-card class="elevation-0 heightCard">
          <v-card-title>
            <h1 class="title">{{this.botName}}</h1>
          </v-card-title>
          <v-card-text>
            <v-layout justify-space-around ma-1>
              <v-btn color="primary" block medium round flat @click="uploadBacklogBot()">
                <v-icon medium color="primary">cloud_upload</v-icon>
              </v-btn>
              <v-btn color="success" block medium round flat @click="playRpa()">
                <v-icon medium color="green darken-2">play_arrow</v-icon>
              </v-btn>
              <!--<v-btn color="primary" block medium round flat @click="ResultsRpa()">
                <v-icon medium color="primary">bar_chart</v-icon>
              </v-btn>-->
              <v-btn color="error" block medium round flat @click="deleteRpa()">
                <v-icon medium color="error">delete</v-icon>
              </v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card class="elevation-0 heightCard" color="#6dafd5" dark>
          <v-card-title>
            <h1 class="title font-weight-light">Backlog</h1>
          </v-card-title>
          <v-card-text>
            <h1 class="text-xs-center ma-2">123</h1>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card class="elevation-0 heightCard" color="#4b82bc" dark>
          <v-card-title>
            <h1 class="title font-weight-light">Processados</h1>
          </v-card-title>
          <v-card-text>
            <h1 class="text-xs-center ma-2">{{this.totalExec}}</h1>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card class="elevation-0 heightCard" color="#DAA520" dark>
          <v-card-title>
            <h1 class="title font-weight-light">Tempo Médio</h1>
          </v-card-title>
          <v-card-text>
            <h1 class="text-xs-center ma-2">{{this.totalExec}}</h1>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="elevation-0" :min-height="390">
          <v-card-title>
            <h1 class="title font-weight-light">JSON</h1>
          </v-card-title>
          <v-card-text>
            <json-viewer :value="this.steps" :expand-depth="2" copyable></json-viewer>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="elevation-0">
          <v-card-text>
            <GChart
              :settings="{ packages: ['corechart', 'table', 'map'] }"
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions"
              :events="chartEvents"
              ref="gChart"
              :resizeDebounce="500"
            />
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
import { GChart } from "vue-google-charts";
import DialogGeneric from "@/components/organisms/Dialog/DialogGeneric";
import DialogImport from "@/components/organisms/Dialog/DialogImportData";
import DialogRemove from "@/components/organisms/Dialog/DialogRemoveRpa";
import JsonViewer from "vue-json-viewer";
export default {
  components: {
    DialogGeneric,
    DialogImport,
    JsonViewer,
    GChart,
    DialogRemove
  },
  computed: {
    ...mapState("auth", ["auth"])
  },
  created() {
    this.dataDialogRemoveRpa.id_user = this.auth.id;
    this.dataDialogRemoveRpa.id_rpa = this.$route.params.Rid;
    this.dataDialogRemoveRpa.token = this.auth.token;
    const data = {
      id_user: this.auth.id,
      id_rpa: this.$route.params.Rid,
      token: this.auth.token
    };
    this.UniqueRpaUser(data)
      .then(res => {
        res.data.forEach(element => {
          this.botName = element.name;
          this.dataDialogRemoveRpa.nameRpa = element.name;
          this.steps = JSON.parse(element.steps);
          this.steps.Steps.forEach(el => {
            if (el.BotEvent == "input") this.dataDialogImport.countInput++;
          });
        });
      })
      .catch(() => {
        //erro 500 -> auth expired
        EventBus.$emit("dialogGeneric", true);
      });

    this.resultRpaUserChart(data)
      .then(res => {
        res.data.forEach(element => {
          if (element != "") {
            this.chartData = [
              ["Bot", "Sucesso", "Falha"],
              [element.name, element.success, element.fail]
            ];
            this.totalExec = element.success + element.fail;
          }
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
      dataDialogRemoveRpa: {
        id_user: "",
        id_rpa: "",
        token: "",
        nameRpa: "",
        size: "400",
        countInput: 0
      },
      dataDialogImport: {
        size: "500",
        countInput: 0
      },
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290"
      },
      botName: "",
      countInput: 0,
      count: 0,
      //CHAT
      totalExec: 0,
      chartData: [
        ["Bot", "Sucesso", "Falha"],
        ["", 0, 0]
      ],
      chartOptions: {
        title: "Métricas Bot",
        height: 360,
        legend: { position: "top", maxLines: 2 },
        annotations: {
          textStyle: {
            fontSize: 15
          }
        },
        colors: ["#43CD80", "#FF4500"]
      },
      chartEvents: {
        select: () => {
          const chart = this.$refs.gChart.chartObject;
          const selection = chart.getSelection();
          if (selection[0].column == 1) {
            router.push({ name: "RpaResultsSuccess" });
          } else {
            router.push({ name: "RpaResultsFail" });
          }
        },
        onmouseover: () => {},
        onmouseout: () => {}
      }
      //END CHATS
    };
  },
  methods: {
    ...mapActions("rpa", [
      "RpaBrowserRemore",
      "UniqueRpaUser",
      "deleteRpaUser",
      "resultRpaUserChart"
    ]),
    uploadBacklogBot() {
      EventBus.$emit("dialogImport", true);
    },
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
      EventBus.$emit("dialogRemoveRpa", true);
    }
  }
};
</script>
<style scoped>
.heightCard {
  height: 160px;
}
</style>