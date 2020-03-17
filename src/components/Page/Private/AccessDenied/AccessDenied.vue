<template>
  <v-container grid-list-md>
    <v-layout text-xs-center wrap ma-4>
      <v-flex xs12>
        <v-img :src="require('@/assets/img/hawinsoft-error.png')" contain height="150"></v-img>
      </v-flex>
      <v-flex xs12 mt-3>
        <h1 class="font-weight-light" color="grey--text">Acesso negado!</h1>
      </v-flex>
      <v-flex xs12>
        <v-btn color="primary" outline round @click="goLogin()">
          <v-icon left>keyboard_backspace</v-icon>Página inicial
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goLogin() {
      router.push({ name: "Home" });
    }
  }
};
</script>

<style>
</style>