<template>
  <v-layout justify-center wrap class="py-1 px-2">
    <!--text-->
    <v-flex xs12 sm5>
      <v-flex xs12 class="mt-3">
        <v-img :src="require('@/assets/img/hawinsoft-id.png')" contain max-height="230"></v-img>
      </v-flex>
      <v-flex xs12 class="mt-2 text-center" text-xs-center>
        <h1 class="font-weight-light primary--text">HAWINSOFT</h1>
        <h2 class="font-weight">
          Web scraping
          <v-icon color="success" class="mr-1">sync_alt</v-icon>Browser remote
        </h2>
      </v-flex>
      <v-flex xs12 class="mt-2" text-xs-center>
        <h3 class="font-weight-light">
          Pensamos em como melhorar rotinas de trabalho, criando algoritmos inteligentes de acordo com sua necessidade. Distribuindo soluções fáceis de usar,
          eficiente e com qualidade em suas operações.
        </h3>
      </v-flex>
      <v-flex xs12 text-xs-center class="mt-2">
        <v-btn color="primary" round large outline @click="goNewUse()" class="sizebtn">Cadastre-se</v-btn>
        <v-btn color="green" round large outline @click="goLogin()" class="sizebtn">Login</v-btn>
      </v-flex>
      <v-flex xs12 class="mt-2 text-center" text-xs-center>
        <h4 class="font-weight-light">Versão 1.0</h4>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goNewUse() {
      router.push({ name: "Create" });
    },
    goLogin() {
      router.push({ name: "Login" });
    }
  }
};
</script>
<style scoped>
.sizebtn {
  width: 40%;
}
</style>>