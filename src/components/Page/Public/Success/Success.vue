<template>
  <v-layout text-xs-center wrap ma-4>
    <v-flex xs12>
      <v-img :src="require('@/assets/img/hawinsoft-success.png')" contain height="200"></v-img>
    </v-flex>
    <v-flex xs12>
      <h1 class="font-weight-light" color="grey--text">Registro efetuado com sucesso, aguarde aprovação!</h1>
      <h1 class="font-weight-light" color="grey--text">Verifique sua caixa de email ou sua caixa de spam!</h1>
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary" outline @click="goLogin()">
        <v-icon left>keyboard_backspace</v-icon>Login
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goLogin(path) {
      router.push({ name: "Login" });
    }
  }
};
</script>

<style>
</style>
