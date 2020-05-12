<template>
  <v-container grid-list-md>
    <dialog-generic :data="dataDialog" />
    <dialog-import :data="dataDialogImport" />
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
              <v-btn color="primary" block medium round flat @click="ResultsRpa()">
                <v-icon medium color="primary">bar_chart</v-icon>
              </v-btn>
              <v-btn color="error" block medium round flat @click="deleteRpa()">
                <v-icon medium color="error">delete</v-icon>
              </v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="elevation-0 heightCard">
          <v-card-title>
            <h1 class="title font-weight-light">Backlog</h1>
          </v-card-title>
          <v-card-text>
            <h1 class="text-xs-center ma-2">123</h1>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card class="elevation-0">
          <v-card-title>
            <h1 class="title font-weight-light">JSON</h1>
          </v-card-title>
          <v-card-text>
            <json-viewer :value="this.steps" :expand-depth="2" copyable></json-viewer>
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
import DialogGeneric from "@/components/organisms/Dialog/DialogGeneric";
import DialogImport from "@/components/organisms/Dialog/DialogImportData";
import JsonViewer from "vue-json-viewer";
export default {
  components: {
    DialogGeneric,
    DialogImport,
    JsonViewer
  },
  computed: {
    ...mapState("auth", ["auth"])
  },
  created() {
    const data = {
      id_user: this.auth.id,
      id_rpa: this.$route.params.Rid,
      token: this.auth.token
    };
    this.UniqueRpaUser(data)
      .then(res => {
        res.data.forEach(element => {
          this.botName = element.name;
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
  },
  data() {
    return {
      steps: {},
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
      count: 0
    };
  },
  methods: {
    ...mapActions("rpa", [
      "RpaBrowserRemore",
      "UniqueRpaUser",
      "deleteRpaUser"
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
      const data = {
        id_user: this.auth.id,
        id_rpa: this.$route.params.Rid,
        token: this.auth.token
      };
      this.deleteRpaUser(data)
        .then(res => {
          if (res.status == 201) router.push({ name: "Rpa" });
        })
        .catch(() => {
          //erro 500 -> auth expired
          EventBus.$emit("dialogGeneric", true);
        });
    }
  }
};
</script>
<style scoped>
.heightCard {
  height: 160px;
}
</style>