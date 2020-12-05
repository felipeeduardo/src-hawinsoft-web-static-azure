<template>
  <v-layout text-xs-center wrap ma-4>
    <v-flex xs12>
      <v-img
        :src="require('@/assets/img/hawinsoft-page-under-construction.png')"
        contain
        height="250"
      ></v-img>
    </v-flex>
    <v-flex xs12>
      <h1 class="font-weight-light" color="grey--text">Página em construção</h1>
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary" outline @click="goHome()">
        <v-icon left>keyboard_backspace</v-icon>Página inicial
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goHome(path) {
      router.push({ name: "Home" });
    }
  }
};
</script>

<style>
</style>
