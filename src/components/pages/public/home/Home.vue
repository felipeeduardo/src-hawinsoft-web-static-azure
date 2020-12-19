<template>
  <v-layout justify-center wrap class="py-1 px-2">
    <v-flex xs12 class="mt-0" text-xs-center>
      <v-flex class="mt-2">
        <h2 class="font-weight">
          Web scraping
          <v-icon color="success" class="mr-1">sync_alt</v-icon>Browser remote
        </h2>
      </v-flex>
      <v-flex class="mt-2 primary--text">
        <h2 class="font-weight-light">
          Crie bots utilizando o Chromium em nuvem.
        </h2>
        <h2 class="font-weight-light">Bots pré-pagos.</h2>
      </v-flex>
    </v-flex>
    <v-layout row wrap class="mt-3 mb-3">
      <v-flex d-flex xs12 sm4 md4 class="pa-1">
        <v-card class="elevation-0">
          <v-img
            :src="require('@/assets/img/hawinsoft-mount.jpg')"
            contain
            max-height="400"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline font-weight-light mb-2 primary--text">
                Bots de forma prática e simples.
              </h3>
              <div>
                Crie seus próprios robôs de forma prática e simples por meio de
                nosso construtor de passos.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 md4 class="pa-1">
        <v-card class="elevation-0">
          <v-img
            :src="require('@/assets/img/hawinsoft-rpa-exe.jpg')"
            contain
            max-height="400"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline font-weight-light mb-2 primary--text">
                Monitoramento
              </h3>
              <div>
                Monitore métricas de sucesso, falha e tempo de execução.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 md4 class="pa-1">
        <v-card class="elevation-0">
          <v-img
            :src="require('@/assets/img/hawinsoft-payment.jpg')"
            contain
            max-height="400"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline font-weight-light mb-2 primary--text">
                Pré-pago
              </h3>
              <div>
                Seu funcionamento é por meio pré-pago, insira créditos e use à
                vontade.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex class="mt-3" text-xs-center>
        <v-btn color="primary" large @click="goAbout()"
          >Conheça o projeto</v-btn
        >
      </v-flex>
      <v-flex xs12 class="mt-0" text-xs-center>
        <v-img
          :src="require('@/assets/img/hawinsoft-home.jpg')"
          contain
          max-height=""
        ></v-img>
        <v-flex class="mt-2">
          <h2 class="font-weight-light">
            Pensamos em como melhorar rotinas de trabalho, crie bots em nuvem de
            acordo com sua necessidade.
          </h2>
        </v-flex>
        <v-flex class="mt-2">
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon color="primary" size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
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
        "fab fa-instagram",
      ],
    };
  },
  methods: {
    goLogin() {
      router.push({ name: "Login" });
    },
    goAbout() {
      router.push({ name: "About" });
    },
  },
};
</script>