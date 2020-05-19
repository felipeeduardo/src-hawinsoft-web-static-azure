<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-robot</v-icon>Robotic process automation
    </h1>
    <v-layout class="mt-3">
      <v-flex xs12>
        <v-card class="elevation-0">
          <v-data-table :headers="headers" :items="desserts" :search="search">
            <template v-slot:items>
              <tr>
                <json-viewer :value="{'name':'123'}" :expand-depth="3" copyable></json-viewer>
              </tr>
            </template>
            <template v-slot:no-results>
              <v-alert
                :value="true"
                color="error"
                icon="warning"
              >Sua pesquisa por "{{ search }}" não encontrou nenhum resultado.</v-alert>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JsonViewer from "vue-json-viewer";
export default {
  components: {
    JsonViewer
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Sucesso JSON",
          align: "left",
          sortable: false,
          value: "name"
        }
      ],
      desserts: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  }
};
</script>

<style>
</style>