<template>
  <v-container grid-list-md>
    <dialog-generic :data="dataDialog" />
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-robot</v-icon>Robotic process automation
    </h1>
    <v-layout justify-center wrap class="mt-3">
      <v-flex xs12 sm6 text-xs-center>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card height="530" class="elevation-0 grey lighten-5">
            <v-card-text>
              <v-flex xs12>
                <v-text-field
                  :disabled="this.addName"
                  v-model="nameBot"
                  prepend-icon="insert_emoticon"
                  label="Nome"
                  required
                  maxlength="20"
                  :counter="20"
                  :rules="isNameValid"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 text-xs-center>
                <h3 class="font-weight-light">
                  <span class="red--text">*</span> Utilize o Devtools do Chrome para auxiliar na
                  <b>
                    captura do
                    Selector
                  </b>
                </h3>
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
              <v-flex xs12 text-xs-center>
                <v-btn
                  required
                  :v-if="!this.addurl"
                  :disabled="!valid"
                  color="success"
                  flat
                  outline
                  @click="addStep()"
                >Adicionar</v-btn>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-form>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card height="530" class="scroll-y elevation-0 grey lighten-5">
          <v-card-text v-show="!this.showTimeline">
            <v-flex xs12 text-xs-center>
              <h3 class="font-weight-light">Exemplo de captura do Selector</h3>
            </v-flex>
            <v-flex xs12>
              <v-img
                class="mb-3"
                height="430px"
                contain
                :src="require('@/assets/img/hawinsoft-selector.png')"
              ></v-img>
            </v-flex>
          </v-card-text>
          <v-card-text v-show="this.showTimeline">
            <v-flex xs12>
              <h3 class="text-truncate font-weight-light">{{this.url}}</h3>
            </v-flex>
            <time-line :data="listSteps" />
            <v-flex xs12 text-xs-center>
              <v-btn color="success" flat outline @click="saveStep()">Salvar</v-btn>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
    DialogGeneric
  },
  data() {
    return {
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
        waitForNavigation: false
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
      states: [],
      listSteps: [],
      saveBot: {
        Url: null,
        Steps: []
      },
      isNameValid: [v => !!v || "Nome é obrigatório"],
      isUrlValid: [
        v => !!v || "Url é obrigatório",
        () => this.isUrl(this.url) || "Url inválido"
      ],
      isSelectorValid: [v => !!v || "Selector é obrigatório"],
      isEventValid: [v => !!v || "Event é obrigatório"]
    };
  },
  created() {
    const data = {
      token: this.auth.token
    };
    this.RpaEvents(data)
      .then(res => {
        if (res.data != "") {
          res.data.forEach(element => {
            this.states.push(element.name);
          });
        }
      })
      .catch(() => {
        //erro 500 -> auth expired
        EventBus.$emit("dialogGeneric", true);
      });
  },
  computed: {
    ...mapState("auth", ["auth"])
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
    addStep() {
      if (this.$refs.form.validate()) {
        this.addurl = true;
        this.addName = true;
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
          waitForNavigation: this.newStep.waitForNavigation
        });
      }
    },
    saveStep() {
      //OBJECT CREATION
      this.saveBot.Url = this.url;
      this.listSteps.forEach(element => {
        this.saveBot.Steps.push({
          Selector: element.Selector,
          BotEvent: element.BotEvent,
          waitForNavigation: element.waitForNavigation,
          ValueSelector: ""
        });
      });
      const data = {
        token: this.auth.token,
        //body
        name: this.nameBot,
        steps: this.saveBot,
        id_user: this.auth.id
      };
      this.NewRpaUser(data)
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