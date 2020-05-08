<template>
  <v-container grid-list-md>
    <dialog-generic :data="data" />
    <h1 class="title font-weight-light">
      <v-icon class="mr-1">memory</v-icon>Robotic process automation
    </h1>
    <v-layout justify-center wrap class="mt-3">
      <v-flex xs12>
        <v-card class="elevation-0">
          <v-card-title>
            <h1 class="title font-weight-light">{{this.cardTitle}}</h1>
          </v-card-title>
          <v-card-text>
            <GChart
              :settings="{ packages: ['corechart', 'table', 'map'] }"
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions"
              :events="chartEvents"
              ref="gChart"
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { EventBus } from "@/services/event-bus.js";
import DialogGeneric from "@/components/organisms/Dialog/DialogGeneric";
import { GChart } from "vue-google-charts";
import router from "@/router";
export default {
  components: {
    DialogGeneric,
    GChart
  },
  computed: {
    ...mapState("auth", ["auth"])
  },
  created() {
    const data = {
      token: this.auth.token,
      id_user: this.auth.id,
      id_rpa: this.$route.params.Rid
    };
    this.resultRpaUserChart(data)
      .then(res => {
        res.data.forEach(element => {
          if (element != "") {
            //this.cardTitle = element.name;
            this.chartData = [
              ["Bot", "Sucesso", "Falha"],
              [element.name, element.success, element.fail]
            ];
            this.chartOptions.title =
              "Total de execuções: " + (element.success + element.fail);
          }
        });
      })
      .catch(() => {
        //erro 500 -> auth expired
        EventBus.$emit("dialogGeneric", true);
      });
  },
  methods: {
    ...mapActions("rpa", ["resultRpaUserChart"])
  },
  data() {
    return {
      chartData: [
        ["Bot", "Sucesso", "Falha"],
        ["", 0, 0]
      ],
      chartOptions: {
        title: "",
        height: 380,
        legend: { position: "top", maxLines: 2 },
        annotations: {
          textStyle: {
            fontSize: 15
          }
        },
        colors: ["#43CD80", "#FF4500"]
      },
      cardTitle: "Métricas RPA",
      data: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290"
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
    };
  }
};
</script>