<template>
  <v-layout row justify-center>
    <div>
      <v-dialog v-model="dialogEnabledOrDisabledRpa" persistent :max-width="this.data.size">
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline" v-if="this.data.active">{{this.data.nameRpa}}</div>
              <div class="headline" v-if="!this.data.active">Rpa inativo</div>
            </div>
          </v-card-title>
          <v-card-text>
            <h2
              class="title font-weight-light mb-3"
              v-if="this.data.active"
            >Tem certeza que deseja excluir ?</h2>
            <h2
              class="title font-weight-light mb-3"
              v-if="!this.data.active"
            >Para obter detalhes é preciso ativá-lo, deseja reativar ?</h2>
            <v-flex xs12>
              <v-alert :value="alertShowError" outline type="error">{{this.message}}</v-alert>
              <v-alert :value="alertShowSuccess" outline type="success">{{this.message}}</v-alert>
            </v-flex>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" outline @click="close()">Não</v-btn>
            <v-btn v-show="this.data.active" color="success" outline @click="disabledRpa()">Sim</v-btn>
            <v-btn v-show="!this.data.active" color="success" outline @click="enabledRpa()">Sim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapActions("rpa", ["deleteRpaUser"]),
    close() {
      this.dialogEnabledOrDisabledRpa = false;
    },
    disabledRpa() {
      const data = {
        id_user: this.data.id_user,
        id_rpa: this.data.id_rpa,
        token: this.data.token,
        flag: false,
      };
      this.deleteRpaUser(data)
        .then((res) => {
          if (res.status == 204) router.push({ name: "Rpa" });
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.alertShowError = true;
            this.message = "Sessão expirada!";
          } else {
            this.alertShowError = true;
            this.message = "Erro ao processar sua requisição.";
          }
        });
    },
    enabledRpa() {
      const data = {
        id_user: this.data.id_user,
        id_rpa: this.dialogEnabledOrDisabledRpaIdRpa,
        token: this.data.token,
        flag: true,
      };
      this.deleteRpaUser(data)
        .then((res) => {
          if (res.status == 204) {
            this.dialogEnabledOrDisabledRpa = false;
            router.push({
              name: "RpaUniue",
              params: {
                Pid: this.data.id_user,
                Rid: this.dialogEnabledOrDisabledRpaIdRpa,
              },
            });
          }
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.alertShowError = true;
            this.message = "Sessão expirada!";
          } else {
            this.alertShowError = true;
            this.message = "Erro ao processar sua requisição.";
          }
        });
    },
  },
  mounted() {
    EventBus.$on("dialogEnabledOrDisabledRpa", (event) => {
      this.dialogEnabledOrDisabledRpa = event;
    });
    EventBus.$on("dialogEnabledOrDisabledRpaIdRpa", (event) => {
      this.dialogEnabledOrDisabledRpaIdRpa = event;
    });
  },
  data() {
    return {
      alertShowError: false,
      alertShowSuccess: false,
      message: "",
      dialogEnabledOrDisabledRpa: false,
      dialogEnabledOrDisabledRpaIdRpa: 0,
    };
  },
};
</script>

<style>
</style>