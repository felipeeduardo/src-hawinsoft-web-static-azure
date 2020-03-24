<template>
  <v-container grid-list-md>
    <dialog-generic :data="data" />
    <h1 class="title font-weight-light">
      <v-icon class="mr-1">memory</v-icon>Robotic process automation
    </h1>
    <v-layout justify-center wrap class="mt-3">
      <v-flex xs12 sm6>
        <v-card class="elevation-0">
          <v-card-text>
            <GChart type="BarChart" :data="chartData" :options="chartOptions" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="elevation-0">
          <v-card-text>
            <GChart type="PieChart" :data="chartData" :options="chartOptions" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card class="elevation-0">
          <div>
            <v-card-title>
              <h3 class="font-weight-light">{{this.cardTitle}}</h3>
            </v-card-title>
            <v-card-text>
              <v-data-table :headers="headers" :items="results">
                <template v-slot:items="props">
                  <td class="text-xs-left">{{ props.item.qtd }}</td>
                  <td class="text-xs-left">{{ props.item.date }}</td>
                  <td class="text-xs-right" style="width:5%;">
                    <v-btn
                      flat
                      icon
                      color="primary"
                      @click="goDownload(props.item.date,'csv', 'Result '+props.item.date+'.csv')"
                    >
                      <v-icon>arrow_downward</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </div>
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
    this.resultRpaUser(data)
      .then(res => {
        res.data.forEach(element => {
          if (element != "") {
            const item = {
              qtd: element.qtd,
              date: element.date_result.replace("T00:00:00.000Z", "")
            };
            this.results.push(item);
          }
        });
      })
      .catch(() => {
        //erro 500 -> auth expired
        EventBus.$emit("dialogGeneric", true);
      });
  },
  methods: {
    ...mapActions("rpa", ["resultRpaUser"]),
    ...mapActions("rpa", ["resultRpaUserSelected"]),
    goDownload(selected, fileType, fileName) {
      const data = {
        token: this.auth.token,
        id_user: this.auth.id,
        id_rpa_type: this.$route.params.Rid,
        date_selected: selected
      };
      this.resultRpaUserSelected(data)
        .then(res => {
          let resultRpa = "";
          res.data.forEach(element => {
            if (element != "") {
              resultRpa += element.result + "\r\n";
            }
          });
          var blob = new Blob([resultRpa], { type: fileType });
          var a = document.createElement("a");
          a.download = this.cardTitle + " - " + fileName;
          a.href = URL.createObjectURL(blob);
          a.dataset.downloadurl = [fileType, a.download, a.href].join(":");
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(function() {
            URL.revokeObjectURL(a.href);
          }, 1500);
        })
        .catch(() => {
          //erro 500 -> auth expired
          EventBus.$emit("dialogGeneric", true);
        });
    }
  },
  data() {
    return {
      chartData: [
        ["Year", "Sales", "Expenses"],
        ["2014", 1000, 400],
        ["2015", 1170, 460]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
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
      },
      headers: [
        {
          text: "Quantidade",
          align: "left",
          sortable: true,
          value: "name"
        },
        {
          text: "Data",
          align: "left",
          value: "dates"
        },
        {
          text: "",
          sortable: false,
          align: "",
          value: ""
        }
      ],
      results: []
    };
  }
};
</script>