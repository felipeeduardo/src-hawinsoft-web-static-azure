<template>
  <v-layout justify-center wrap class="py-1 px-2">
    <v-flex xs12 class="mt-3" text-xs-center>
      <v-flex class="mt-2">
        <h2 class="font-weight">
          Web scraping
          <v-icon color="success" class="mr-1">sync_alt</v-icon>Browser remote
        </h2>
      </v-flex>
      <v-flex class="mt-2 primary--text">
        <h2 class="font-weight-light">Crie bots utilizando o Chromium em nuvem.</h2>
      </v-flex>
      <v-flex class="mt-2">
        <h3
          class="font-weight-light"
        >Pensamos em como melhorar rotinas de trabalho, crie bots em nuvem de acordo com sua necessidade.</h3>
      </v-flex>
      <v-flex class="mt-2">
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon color="primary" size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-flex>
      <v-flex class="mt-3">
        <v-btn color="primary" flat outline>Sobre o projeto</v-btn>
      </v-flex>
      <v-img :src="require('@/assets/img/hawinsoft-home.jpg')" contain max-height="430"></v-img>
    </v-flex>
  </v-layout>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ]
    };
  },
  methods: {
    goLogin() {
      router.push({ name: "Login" });
    }
  }
};
</script>