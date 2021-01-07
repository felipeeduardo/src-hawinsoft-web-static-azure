<template>
  <v-container grid-list-md>
    <dialog-backlog :data="dataDialogBacklog" />
    <dialog-disabled :data="dialogEnabledOrDisabledRpa" />
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-robot</v-icon>{{ this.botName }}
    </h1>
    <v-layout justify-center wrap class="mt-3">
      <v-flex xs12 sm6>
        <v-card class="elevation-0 grey lighten-5 heightCard">
          <v-card-text>
            <v-bottom-nav
              :value="true"
              top
              color="transparent"
              class="elevation-0 mt-2"
            >
              <v-btn @click="playRpa()">
                <span class="green--text">Iniciar</span>
                <v-icon medium color="green darken-2">play_arrow</v-icon>
              </v-btn>
              <!--<v-btn>
                <span class="error--text">Parar</span>
                <v-icon medium color="error">stop</v-icon>
              </v-btn>-->
              <v-btn @click="uploadBacklogBot()">
                <span class="primary--text">Backlog</span>
                <v-icon medium color="primary">cloud_upload</v-icon>
              </v-btn>
              <v-btn @click="deleteRpa()">
                <span class="error--text">Excluir</span>
                <v-icon medium color="error">delete</v-icon>
              </v-btn>
            </v-bottom-nav>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card class="elevation-0 heightCard" color="#6dafd5" dark>
          <v-card-text>
            <p class="title font-weight-light">Backlog</p>
            <h1 class="text-xs-center ma-2">{{ this.qtdBacklog }}</h1>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card class="elevation-0 heightCard" color="#4b82bc" dark>
          <v-card-text>
            <p class="title font-weight-light">Processados</p>
            <h1 class="text-xs-center ma-2">{{ this.qtdBacklogProcessed }}</h1>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2>
        <v-card class="elevation-0 heightCard" color="#DAA520" dark>
          <v-card-text>
            <p class="title font-weight-light">Tempo Médio</p>
            <h1 class="text-xs-center ma-2">{{ this.timerMedium }}</h1>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="elevation-0 grey lighten-5" :min-height="390">
          <v-card-title>
            <h1 class="title font-weight-light">JSON</h1>
          </v-card-title>
          <v-card-text>
            <json-viewer
              :value="this.steps"
              :expand-depth="2"
              copyable
            ></json-viewer>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="elevation-0 grey lighten-5">
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
import DialogBacklog from "@/components/organisms/dialog/dialogImportBacklog";
import DialogDisabled from "@/components/organisms/dialog/dialogDisabledOEnabledRpa";
import JsonViewer from "vue-json-viewer";
export default {
  components: {
    DialogBacklog,
    JsonViewer,
    GChart,
    DialogDisabled,
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  created() {
    this.dialogEnabledOrDisabledRpa.id_user = this.auth.user.id_user;
    this.dialogEnabledOrDisabledRpa.id_rpa = this.$route.params.Rid;
    this.dialogEnabledOrDisabledRpa.token = this.auth.token;
    const data = {
      id_user: this.auth.user.id_user,
      id_rpa: this.$route.params.Rid,
      token: this.auth.token,
    };
    this.UniqueRpaUser(data)
      .then((res) => {
        res.data.forEach((element) => {
          this.botName = element.name;
          this.dialogEnabledOrDisabledRpa.nameRpa = element.name;
          this.dataDialogBacklog.nameRpa = element.name;
          this.steps = JSON.parse(element.steps);
          this.steps.Steps.forEach((el) => {
            if (el.BotEvent == "input") this.dataDialogBacklog.countInput++;
          });
        });
      })
      .catch((err) => {
        if (err.response.status == 401) {
          EventBus.$emit("dialogGeneric", true, this.dataDialog);
        }
      });
    //CHARTS
    this.ResultRpaUserChart(data)
      .then((res) => {
        if (res.status != 204) {
          res.data.forEach((element) => {
            if (element != "") {
              this.chartData = [
                [
                  "Bot",
                  "Sucesso",
                  { role: "annotation" },
                  "Falha",
                  { role: "annotation" },
                ],
                [
                  element.name,
                  element.success,
                  element.success,
                  element.fail,
                  element.fail,
                ],
              ];
              this.totalExec = element.success + element.fail;
            }
          });
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          EventBus.$emit("dialogGeneric", true, this.dataDialog);
        }
      });
    //CARDS
    this.GetbacklogAndProcessed(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((el) => {
            this.qtdBacklog = el.backlog == null ? 0 : el.backlog;
            this.qtdBacklogProcessed = el.done == null ? 0 : el.done;
          });
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          EventBus.$emit("dialogGeneric", true, this.dataDialog);
        }
      });
    //TIMER RESULT
    this.GetRpaTimerMedio(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((el) => {
            this.timerMedium = el.timer_medio == null ? 0 : el.timer_medio;
          });
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          EventBus.$emit("dialogGeneric", true, this.dataDialog);
        }
      });
  },
  data() {
    return {
      steps: {},
      qtdBacklog: 0,
      qtdBacklogProcessed: 0,
      timerMedium: 0,
      dialogEnabledOrDisabledRpa: {
        id_user: "",
        id_rpa: "",
        token: "",
        nameRpa: "",
        size: "400",
        countInput: 0,
        active: true,
      },
      dataDialogBacklog: {
        nameRpa: "",
        size: "550",
        countInput: 0,
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
      botName: "",
      countInput: 0,
      count: 0,
      //CHAT
      totalExec: 0,
      chartData: [
        ["Bot", "Sucesso", "Falha"],
        ["", 0, 0],
      ],
      chartOptions: {
        title: "Métricas Bot",
        height: 360,
        legend: { position: "top", maxLines: 2 },
        annotations: {
          textStyle: {
            fontSize: 15,
          },
        },
        colors: ["#43CD80", "#FF4500"],
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
        onmouseout: () => {},
      },
      //END CHATS
    };
  },
  methods: {
    ...mapActions("rpa", [
      "RpaBrowserRemore",
      "UniqueRpaUser",
      "ResultRpaUserChart",
      "GetbacklogAndProcessed",
      "GetRpaTimerMedio",
    ]),
    uploadBacklogBot() {
      EventBus.$emit("dialogImport", true);
    },
    playRpa() {
      if (this.qtdBacklog == 0) {
        const data = {
          type: "error",
          title: "Não é possível iniciar sem backlog.",
          textButton: "Ok, Entendi",
          iconButton: "",
          sessionExpired: false,
        };
        EventBus.$emit("dialogGeneric", true, data);
      } else {
        const data = {
          id_user: this.auth.user.id_user,
          id_rpa: this.$route.params.Rid,
          token: this.auth.token,
        };
        this.RpaBrowserRemore(data)
          .then((res) => {})
          .catch((err) => {
            if (ponserr.rese.status == 401) {
              EventBus.$emit("dialogGeneric", true, this.dataDialog);
            }
            if (ponserr.rese.status == 500) {
              const data500 = {
                type: "error",
                title:
                  "Serviço temporariamente indisponível, tente novamente mais tarde.",
                textButton: "Ok, Entendi",
                iconButton: "",
                sessionExpired: false,
              };
              EventBus.$emit("dialogGeneric", true, data500);
            }
          });
      }
    },
    ResultsRpa() {
      router.push({ name: "RpaResults" });
    },
    goPanel() {
      router.push({ name: "Rpa" });
    },
    deleteRpa() {
      EventBus.$emit("dialogEnabledOrDisabledRpa", true);
    },
  },
};
</script>
<style scoped>
.heightCard {
  height: 100px;
}
</style>