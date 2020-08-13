<template>
  <v-container grid-list-md>
    <dialog-generic :data="dataDialog" />
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-robot</v-icon>Robotic process automation
    </h1>
    <v-stepper alt-labels v-model="tabStep" class="mt-3 elevation-0">
      <v-stepper-header class="elevation-0">
        <v-stepper-step :complete="tabStep > 1" step="1">Definições</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="tabStep > 2" step="2">Construção</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Finalização</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1" class="grey lighten-5">
          <v-flex xs12 class="ma-3">
            <h3 class="title font-weight-light mb-3">Definições</h3>
            <v-form ref="definitionform" v-model="valid" lazy-validation class="mb-3">
              <v-flex xs12>
                <v-text-field
                  :disabled="this.addName"
                  v-model="nameBot"
                  prepend-icon="fas fa-robot"
                  label="Nome"
                  required
                  maxlength="20"
                  :counter="20"
                  :rules="isNameValid"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  :disabled="this.addurl"
                  v-model="url"
                  prepend-icon="open_in_browser"
                  label="Url"
                  required
                  :rules="isUrlValid"
                ></v-text-field>
              </v-flex>
            </v-form>
            <v-btn color="primary" outline @click="addDefinition()">Avançar</v-btn>
          </v-flex>
        </v-stepper-content>
        <v-stepper-content step="2" class="grey lighten-5">
          <v-flex xs12 class="ma-3">
            <h3 class="title font-weight-light mb-3">Construção</h3>
            <h3 class="font-weight-light">
              <span class="red--text">*</span> Utilize o Devtools do Chrome para auxiliar na
              <b>
                captura do
                Selector
              </b>
            </h3>
            <v-form ref="definitionstepsform" v-model="valid" lazy-validation class="mb-3">
              <v-flex xs12>
                <v-text-field
                  v-model="newStep.selectorRpa"
                  prepend-icon="code"
                  label="Selector"
                  required
                  :rules="isSelectorValid"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-select
                  required
                  :rules="isEventValid"
                  :items="states"
                  v-model="newStep.eventRpa"
                  label="Event"
                  single-line
                  prepend-icon="code"
                ></v-select>
              </v-flex>
              <v-flex xs12 text-xs-center>
                <v-switch
                  :disabled="this.newStep.eventRpa != `click`"
                  color="primary"
                  v-model="newStep.waitForNavigation"
                  :label="`Aguardar Navegação`"
                ></v-switch>
              </v-flex>
            </v-form>
            <v-btn
              color="success"
              required
              :v-if="!this.addurl"
              :disabled="!valid"
              outline
              @click="addStep()"
            >Adicionar</v-btn>
            <v-btn
              color="primary"
              outline
              @click="addDefinitionSteps()"
            >Avançar com {{this.countSteps==1? this.countSteps +' passo':this.countSteps +' passos'}}</v-btn>
            <v-btn color="primary" outline @click="tabStep = 1">Voltar</v-btn>
          </v-flex>
        </v-stepper-content>
        <v-stepper-content step="3" class="grey lighten-5">
          <v-flex xs12 class="ma-4">
            <h3 class="title font-weight-light mb-3">Finalização</h3>
            <v-flex xs12 class="ma-3">
              <h3 class="text-truncate font-weight-light">{{this.url}}</h3>
            </v-flex>
            <time-line :data="listSteps" />
            <v-flex xs12 class="mt-4">
              <v-btn color="success" outline @click="saveStep()">Finalizar</v-btn>
              <v-btn color="primary" outline @click="tabStep = 2">Voltar</v-btn>
            </v-flex>
          </v-flex>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import router from "@/router";
import { mapActions, mapState } from "vuex";
import { EventBus } from "@/services/event-bus.js";
import DialogGeneric from "@/components/organisms/Dialog/DialogGeneric";
import TimeLine from "@/components/organisms/TimeLine";
export default {
  components: {
    TimeLine,
    DialogGeneric,
  },
  data() {
    return {
      tabStep: 0,
      countSteps: 0,
      url: "",
      nameBot: "",
      valid: true,
      addurl: false,
      addName: false,
      showTimeline: false,
      countStepInput: 0,
      newStep: {
        eventRpa: null,
        selectorRpa: "",
        valueSelectorRpa: "",
        waitForNavigation: false,
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
      states: [],
      listSteps: [],
      saveBot: {
        Url: null,
        Steps: [],
      },
      isNameValid: [(v) => !!v || "Nome é obrigatório"],
      isUrlValid: [
        (v) => !!v || "Url é obrigatório",
        () => this.isUrl(this.url) || "Url inválido",
      ],
      isSelectorValid: [(v) => !!v || "Selector é obrigatório"],
      isEventValid: [(v) => !!v || "Event é obrigatório"],
    };
  },
  created() {
    const data = {
      token: this.auth.token,
    };
    this.RpaEvents(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((element) => {
            this.states.push(element.name);
          });
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          EventBus.$emit("dialogGeneric", true);
        }
      });
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    ...mapActions("rpa", ["RpaEvents"]),
    ...mapActions("rpa", ["NewRpaUser"]),
    isUrl(urlInput) {
      var res = urlInput.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      );
      if (res == null) return false;
      else return true;
    },
    addDefinition() {
      if (this.$refs.definitionform.validate()) {
        this.addurl = true;
        this.addName = true;
        this.tabStep = 2;
      }
    },
    addDefinitionSteps() {
      if (this.$refs.definitionstepsform.validate()) {
        if (this.listSteps.length != 0) {
          this.tabStep = 3;
        }
      }
    },
    addStep() {
      if (this.$refs.definitionstepsform.validate()) {
        this.showTimeline = true;
        if (
          this.newStep.eventRpa == "input" ||
          this.newStep.eventRpa == "select"
        ) {
          this.countStepInput += 1;
        }
        this.listSteps.push({
          BotEvent: this.newStep.eventRpa,
          Selector: this.newStep.selectorRpa,
          waitForNavigation: this.newStep.waitForNavigation,
        });
        this.countSteps += 1;
      }
    },
    saveStep() {
      //OBJECT CREATION
      this.saveBot.Url = this.url;
      this.listSteps.forEach((element) => {
        this.saveBot.Steps.push({
          Selector: element.Selector,
          BotEvent: element.BotEvent,
          waitForNavigation: element.waitForNavigation,
          ValueSelector: "",
        });
      });
      const data = {
        token: this.auth.token,
        //body
        name: this.nameBot,
        steps: this.saveBot,
        id_user: this.auth.user.id_user,
      };
      this.NewRpaUser(data)
        .then((res) => {
          if (res.status == 204) router.push({ name: "Rpa" });
        })
        .catch((err) => {
          if (err.response.status == 401) {
            EventBus.$emit("dialogGeneric", true);
          }
        });
    },
  },
};
</script>