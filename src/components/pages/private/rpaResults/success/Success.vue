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
            <v-btn color="primary" outline>Exportar</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="successResults"
            :search="search"
          >
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.created }}</td>
              <td class="text-xs-left">
                <json-viewer
                  class="ma-2"
                  :value="JSON.parse(props.item.result)"
                  :expand-depth="1"
                  copyable
                ></json-viewer>
              </td>
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
import { mapState, mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
import JsonViewer from "vue-json-viewer";
export default {
  components: {
    JsonViewer,
  },
  computed: {
    ...mapState("auth", ["auth"]),
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
  },
  created() {
    const data = {
      id_user: this.auth.user.id_user,
      id_rpa: parseInt(this.$route.params.Rid),
      flag: true,
      token: this.auth.token,
    };
    this.resultRpaUser(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((element) => {
            var obj = {
              created: this.formatDateDb(element.created),
              result: element.result,
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