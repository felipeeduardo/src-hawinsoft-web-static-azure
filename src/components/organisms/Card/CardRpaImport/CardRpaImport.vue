<template>
  <v-layout row wrap>
    <v-flex xs12 sm4>
      <v-card class="elevation-3">
        <div class="card-bord-top">
          <v-card-text style="height:163px">
            <v-img height="130px" contain :src="require('@/assets/img/hawinsoft-import-data.png')"></v-img>
          </v-card-text>
          <v-divider light></v-divider>
          <!--button upload-->
          <upload-button
            class="px-2 py-2"
            color="success"
            block
            @file-update="fileImport"
            title="Import data"
            accept=".txt"
          ></upload-button>
        </div>
      </v-card>
    </v-flex>
    <v-flex xs12 sm8>
      <v-card class="elevation-3">
        <div class="card-bord-top">
          <v-card-text style="height:173px">
            <v-layout row wrap>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2" color="red--text">Success</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2">{{this.qtdSuccess}}</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2" color="success">Fail</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2">{{this.qtdFail}}</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2" color="success">Error</h3>
              </v-flex>
              <v-flex xs6>
                <h3 class="title font-weight-light py-2">{{this.qtdError}}</h3>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" outline @click="confirmImport()">
              <v-icon left>done</v-icon>Confirm import
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import UploadButton from "vuetify-upload-button";
export default {
  components: {
    UploadButton
  },
  methods: {
    fileImport(file) {
      const reader = new FileReader();
      const read = new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsText(file);
      });
      read.then(res => {
        res.split(";").forEach(element => {
          let line = element.replace("\n", "").replace("\r", "");
          if (line != "") {
            if (line.length == 11) {
              this.qtdSuccess++;
            } else {
              this.qtdError++;
            }
            this.data.push(line);
          }
        });
      });
    },
    confirmImport() {
      console.log("data", this.data);
    }
  },
  data() {
    return {
      data: [],
      qtdSuccess: 0,
      qtdFail: 0,
      qtdError: 0
    };
  }
};
</script>
