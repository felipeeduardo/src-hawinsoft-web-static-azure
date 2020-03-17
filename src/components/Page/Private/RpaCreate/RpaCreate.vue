<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon>memory</v-icon>Robotic process automation
    </h1>
    <v-layout justify-center wrap class="mt-3">
      <v-flex xs12 sm6 text-xs-center>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card height="530">
            <v-card-text>
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
                {{this.newStep.waitForNavigation}}
                <v-switch
                  :disabled="this.newStep.eventRpa != `click`"
                  color="primary"
                  v-model="newStep.waitForNavigation"
                  :label="`Aguardar Navegação`"
                ></v-switch>
              </v-flex>
              <v-flex xs12 class="mt-4">
                <v-btn
                  required
                  :v-if="!this.addurl"
                  :disabled="!valid"
                  class="sizeBtnAdd"
                  color="success"
                  large
                  flat
                  outline
                  round
                  @click="addStep()"
                >Adicionar</v-btn>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-form>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card height="530" class="scroll-y">
          <v-card-text v-show="!this.showTimeline">
            <v-flex xs12 text-xs-center>
              <h3
                class="font-weight-light"
              >Utilize o Devtools do Chrome para auxiliar na captura do Selector</h3>
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
              <v-btn
                class="sizeBtnAdd"
                color="success"
                large
                flat
                outline
                round
                @click="saveStep()"
              >Salvar</v-btn>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import router from "@/router";
import TimeLine from "@/components/organisms/TimeLine";
export default {
  components: {
    TimeLine
  },
  data() {
    return {
      url: "",
      valid: true,
      addurl: false,
      showTimeline: false,
      countStepInput: 0,
      newStep: {
        eventRpa: null,
        selectorRpa: "",
        valueSelectorRpa: "",
        waitForNavigation: false
      },
      states: ["input", "click", "select", "getText", "getHtml", "screenshot"],
      listSteps: [],
      saveBot: {
        urlBot: null,
        steps: []
      },
      isUrlValid: [
        v => !!v || "Url é obrigatório",
        () => this.isUrl(this.url) || "Url inválido"
      ],
      isSelectorValid: [v => !!v || "Selector é obrigatório"],
      isEventValid: [v => !!v || "Event é obrigatório"]
    };
  },
  methods: {
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
        this.showTimeline = true;
        if (
          this.newStep.eventRpa == "input" ||
          this.newStep.eventRpa == "select"
        ) {
          this.countStepInput += 1;
        }
        this.listSteps.push({
          eventBot: this.newStep.eventRpa,
          SelectorBot: this.newStep.selectorRpa,
          waitForNavigation: this.newStep.waitForNavigation
        });
      }
    },
    saveStep() {
      this.saveBot.urlBot = this.url;
      this.listSteps.forEach(element => {
        this.saveBot.steps.push({
          selectorBot: element.SelectorBot,
          eventBot: element.eventBot,
          waitForNavigation: element.waitForNavigation,
          valueInputBot: ""
        });
      });
      //console.log(this.saveBot);
      //inserir no banco
      router.push({ name: "Rpa" });
    }
  }
};
</script>

<style scoped>
.sizeBtnSave {
  width: 40%;
}
.sizeBtnAdd {
  width: 55%;
}
</style>