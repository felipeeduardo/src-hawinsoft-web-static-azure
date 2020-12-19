<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">
      <v-icon class="ma-1" size="20">fas fa-credit-card</v-icon>Créditos
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
        <div class="ma-3">
          <v-img
            class="mt-3"
            :src="require('@/assets/img/hawinsoft-pagseguro.png')"
            contain
            max-height="50"
          ></v-img>
        </div>
        <h1 class="title font-weight-light">Detalhes</h1>
        <v-data-table :headers="headers" :items="historic">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.created }}</td>
            <td class="text-xs-left">{{ props.item.description }}</td>
            <td class="text-xs-left">{{ props.item.credit }}</td>
          </template>
        </v-data-table>
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
import { EventBus } from "@/services/event-bus.js";
export default {
  data() {
    return {
      cardsPayment: ["30.00", "40.00", "50.00", "100.00"],
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290",
      },
      headers: [
        {
          text: "Data",
          align: "left",
          value: "Data",
        },
        {
          text: "Descrição",
          align: "left",
          sortable: false,
          value: "Descrição",
        },
        {
          text: "Valor",
          align: "left",
          sortable: false,
          value: "Valor",
        },
      ],
      historic: [],
    };
  },
  created() {
    const data = {
      id_user: this.auth.user.id_user,
      token: this.auth.token,
    };
    this.paymentCreditHistoric(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((el) => {
            var obj = {
              created: this.formatDateDb(el.created),
              description: el.description,
              credit: el.credit.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              }),
            };
            this.historic.push(obj);
          });
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          EventBus.$emit("dialogGeneric", true, this.dataDialog);
        }
      });
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    ...mapActions("payment", ["paymentAddCredit", "paymentCreditHistoric"]),
    formatDateDb(date) {
      var data = new Date(date),
        dia = data.getDate().toString().padStart(2, "0"),
        mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
        ano = data.getFullYear();
      return dia + "/" + mes + "/" + ano;
    },
    goPaymento(item) {
      let environmnetPayment = process.env.VUE_APP_ENVIRONMNET_PAYMENT;
      const data = {
        environmnet: environmnetPayment,
        id_user: this.auth.user.id_user,
        token: this.auth.token,
        transaction: "",
        credit: parseFloat(item),
        itemAmount: item,
        senderName: "",
        senderAreaCode: "",
        senderEmail: this.auth.user.email,
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
