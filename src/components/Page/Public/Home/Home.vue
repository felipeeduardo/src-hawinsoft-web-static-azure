<template>
  <!--<v-layout wrap text-xs-center>
    <v-flex xs12 class="mt-3">
      <v-img :src="require('@/assets/img/hawinsoft-public.png')" contain max-height="450"></v-img>
    </v-flex>
    <v-flex xs12 class="mt-3">
      <span class="title font-weight-light">PLATAFORMA HAWINSOFT</span>
    </v-flex>
        <v-flex xs12 class="mt-3">
      <span class="title font-weight-light">...</span>
    </v-flex>
    <v-flex xs12 class="mt-3">
      <v-btn color="success" large outline @click="goNewUse()">Registre-se</v-btn>
    </v-flex>
  </v-layout>-->
  <v-layout row wrap class="py-1 px-2">
    <!--banner-->
    <v-flex xs12 sm7 text-xs-center>
      <v-flex xs12 class="mt-3">
        <v-img :src="require('@/assets/img/hawinsoft-public.png')" contain max-height="450"></v-img>
      </v-flex>
    </v-flex>
    <!--text-->
    <v-flex xs12 sm5>
      <v-flex xs12 class="mt-3">
        <h2 class="font-weight-light">
          <v-icon left color="success">done</v-icon>Automação de processos
        </h2>
      </v-flex>
      <v-flex xs12 class="mt-4">
        <h3 class="font-weight-light">
          Pensamos em como melhorar rotinas de trabalho, criando algoritmos inteligentes de acordo com sua necessidade. Distribuindo soluções fáceis de usar,
          eficiente e com qualidade em suas operações.
        </h3>
      </v-flex>
      <v-flex xs12 class="mt-3">
        <h3 class="font-weight-light">Problemas com tarefas rotineiras e cansativas?</h3>
        <h3
          class="font-weight-light"
        >Automatize o trabalho web com algoritmos de inteligência artificial.</h3>
        <h3 class="font-weight-light">Ganhe eficiência e qualidade em suas operações, com:</h3>
      </v-flex>
      <v-flex xs12 class="mt-3">
        <div>
          <v-icon left color="success">done</v-icon>Controle total dos processos;
        </div>
        <div>
          <v-icon left color="success">done</v-icon>Funcionamento em nuvem;
        </div>
        <div>
          <v-icon left color="success">done</v-icon>Monitoramento 24Hs.
        </div>
      </v-flex>
      <v-flex xs12 text-xs-center class="mt-5">
        <v-btn color="primary" round large outline block @click="goNewUse()">Veja como funciona</v-btn>
      </v-flex>
      <v-flex xs12 text-xs-center>
        <v-btn color="success" round large outline block @click="goNewUse()">Registre-se grátis</v-btn>
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
    }
  }
};
</script>