<template>
  <v-container grid-list-md>
    <dialog-generic :data="data" />
    <h1 class="title font-weight-light">
      <v-icon class="mr-1">memory</v-icon>Robotic process automation
    </h1>
    <v-layout justify-center wrap class="mt-3">
      <v-flex xs12>
        <v-card class="elevation-0">
          <v-card-text>
            <GChart type="BarChart" :data="chartData" :options="chartOptions" />
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
            this.chartOptions.title = element.name;
            this.cardTitle = element.name;
            this.chartData = [
              [
                "RPA",
                "Sucesso",
                { role: "annotation" },
                "Falha",
                { role: "annotation" }
              ],
              ["", element.success, element.success, element.fail, element.fail]
            ];
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
        [
          "RPA",
          "Sucesso",
          { role: "annotation" },
          "Falha",
          { role: "annotation" }
        ],
        ["", 0, "0", 0, "0"]
      ],
      chartOptions: {
        title: "",
        height: 390,
        vAxis: {
          title: "MÉTRICAS RPA"
        },
        hAxis: {
          format: "####"
        },
        legend: { position: "top", maxLines: 3 },
        annotations: {
          textStyle: {
            fontSize: 15
          }
        },
        colors: ["#43CD80", "#FF4500"]
      },
      cardTitle: "",
      data: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290"
      }
    };
  }
};
</script>