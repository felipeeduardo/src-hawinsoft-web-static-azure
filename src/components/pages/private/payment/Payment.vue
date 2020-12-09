<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-credit-card</v-icon>Inserir créditos
    </h1>
    <v-layout justify-center wrap>
      <v-flex xs12 sm7>
        <v-layout justify-center wrap class="mt-3">
          <v-flex xs12 sm3 v-for="item in cardsPayment" :key="item.index">
            <v-hover>
              <v-card
                class="elevation-0 title-hover"
                color="#6dafd5"
                dark
                :style="{ cursor: 'pointer' }"
                @click="goPaymento(item)"
              >
                <v-card-text>
                  <h2 class="text-xs-center font-weight-light">
                    R$ {{ item }}
                  </h2>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
        <v-img
          :src="require('@/assets/img/hawinsoft-pagseguro.png')"
          contain
          max-height="200"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm5>
        <v-img
          :src="require('@/assets/img/hawinsoft-payment.jpg')"
          contain
          max-height="500"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      cardsPayment: ["30.00", "40.00", "50.00", "100.00"],
    };
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    ...mapActions("payment", ["paymentAddCredit"]),
    goPaymento(item) {
      const data = {
        environmnet: process.env.VUE_APP_ENVIRONMNET_PAYMENT,
        id_user: this.auth.user.id_user,
        token: this.auth.token,
        transaction: "",
        credit: item,
        itemAmount: item,
        senderName: "",
        senderAreaCode: "",
        senderEmail: "f.l.p.eduardo@hotmail.com",
        senderPhone: "",
      };
      console.log(data);
      this.paymentAddCredit(data).then((res) => {
        if (res.status == 200) {
          window.open(res.data.text, "_blank");
        }
      });
    },
  },
};
</script>
