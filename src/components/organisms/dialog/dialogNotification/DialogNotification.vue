<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogNotification" :max-width="this.data.size">
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Notificações</div>
            </div>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="messages" :search="search">
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.created }}</td>
                <td class="text-xs-left">{{ props.item.title }}</td>
                <td class="text-xs-left">{{ props.item.message }}</td>
              </template>
              <template v-slot:no-results>
                <v-alert outline :value="true" color="error" icon="warning"
                  >Sua pesquisa por "{{ search }}" não encontrou nenhum
                  resultado.</v-alert
                >
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    ...mapActions("user", ["notificationUser"]),
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
      token: this.auth.token,
    };
    this.notificationUser(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((element) => {
            var obj = {
              created: this.formatDateDb(element.created),
              title: element.title,
              message: element.message,
            };
            this.messages.push(obj);
          });
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          EventBus.$emit("dialogGeneric", true, this.dataDialog);
        }
      });
  },
  mounted() {
    EventBus.$on("dialogNotification", (event) => {
      this.dialogNotification = event;
    });
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Data",
          align: "left",
          value: "Data",
        },
        {
          text: "Assunto",
          align: "left",
          sortable: false,
          value: "Assunto",
        },
        {
          text: "Notificação",
          align: "left",
          sortable: false,
          value: "Notificação",
        },
      ],
      messages: [],
      dialogNotification: false,
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290",
      },
    };
  },
};
</script>

<style>
</style>

