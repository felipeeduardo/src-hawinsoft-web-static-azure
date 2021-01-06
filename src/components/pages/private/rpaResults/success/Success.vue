<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-robot</v-icon>Robotic process
      automation
    </h1>
    <v-layout class="mt-3">
      <v-flex xs12>
        <v-card class="elevation-0">
          <v-card-title>
            <b>{{ this.botName }}</b>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
            <v-btn
              class="mt-3"
              fab
              dark
              small
              color="primary"
              @click="csvExport(successResults)"
            >
              <v-icon dark>download</v-icon>
            </v-btn>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="successResults"
            :search="search"
          >
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.created }}</td>
              <td class="text-xs-left">{{ props.item.timer }}</td>
              <td class="text-xs-left">{{ props.item.version }}</td>
              <td class="text-xs-left">{{ props.item.result }}</td>
            </template>
            <template v-slot:no-results>
              <v-alert outline :value="true" color="error" icon="warning"
                >Sua pesquisa por "{{ search }}" não encontrou nenhum
                resultado.</v-alert
              >
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { EventBus } from "@/services/event-bus.js";
export default {
  computed: {
    ...mapState("auth", ["auth"]),
    ...mapGetters("rpa", ["getRpaUserUnique"]),
  },
  methods: {
    ...mapActions("rpa", ["resultRpaUser"]),
    formatDateDb(date) {
      var data = new Date(date),
        dia = data.getDate().toString().padStart(2, "0"),
        mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
        ano = data.getFullYear();
      return dia + "/" + mes + "/" + ano;
    },
    csvExport(arrData) {
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += [
        Object.keys(arrData[0]).join(";"),
        ...arrData.map((item) => Object.values(item).join(";")),
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute(
        "download",
        this.botName + " - Sucesso - " + new Date().valueOf() + ".csv"
      );
      link.click();
    },
  },
  created() {
    this.botName = this.getRpaUserUnique.map((x) => x.name).toString();
    const data = {
      id_user: this.auth.user.id_user,
      id_rpa: parseInt(this.$route.params.Rid),
      flag: false,
      token: this.auth.token,
    };
    this.resultRpaUser(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((element) => {
            var obj = {
              created: this.formatDateDb(element.created),
              timer: JSON.parse(element.result).timer,
              version: JSON.parse(element.result).version,
              result: JSON.parse(element.result).response,
            };
            this.successResults.push(obj);
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
      botName: "",
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290",
      },
      search: "",
      headers: [
        {
          text: "Criado",
          align: "left",
          value: "created",
        },
        {
          text: "Tempo",
          align: "left",
          value: "timer",
        },
        {
          text: "Versão",
          align: "left",
          value: "version",
        },
        {
          text: "Resultado",
          align: "left",
          sortable: false,
          value: "result",
        },
      ],
      successResults: [],
    };
  },
};
</script>

<style>
</style>