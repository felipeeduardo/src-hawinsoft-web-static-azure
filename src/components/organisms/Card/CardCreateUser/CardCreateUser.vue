<template>
  <v-container>
    <dialog-generic :data="dataDialog" />
    <v-layout justify-center wrap>
      <v-flex xs12 sm6>
        <v-flex xs12 class="mt-2 text-center" text-xs-center>
          <h1 class="font-weight-light primary--text">HAWINSOFT</h1>
          <h2 class="font-weight">
            Web scraping
            <v-icon color="success" class="mr-1">sync_alt</v-icon>Browser remote
          </h2>
        </v-flex>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            prepend-icon="mail"
            name="email"
            label="Email"
            type="text"
            required
            :rules="isEmailValid"
            v-model="form.email"
          ></v-text-field>
          <v-text-field
            prepend-icon="lock"
            name="password"
            label="Senha"
            id="password"
            type="password"
            required
            maxlength="8"
            :counter="8"
            v-model="form.password"
            :rules="isPasswordValid"
          ></v-text-field>
          <v-text-field
            prepend-icon="lock"
            name="confirmpassword"
            label="Confirmação de senha"
            id="confirmpassword"
            type="password"
            required
            maxlength="8"
            :counter="8"
            v-model="form.confirmpassword"
            :rules="isConfirmPasswordValid"
          ></v-text-field>
          <v-text-field
            prepend-icon="business"
            name="company"
            label="Empresa ou projeto"
            type="text"
            required
            v-model="form.company"
            :rules="isCompanyValid"
          ></v-text-field>
          <!--<v-checkbox v-model="checkbox" :rules="isCheck" label="você concorda?" required></v-checkbox>-->
        </v-form>
        <v-flex xs12 mt-3>
          <vue-recaptcha @verify="onVerify" @expired="onExpired" :sitekey="sitekey"></vue-recaptcha>
        </v-flex>
        <v-flex xs12 mt-3>
          <v-btn
            :disabled="!valid"
            color="success"
            large
            block
            flat
            outline
            round
            @click="validateNew()"
          >Registrar</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import DialogGeneric from "@/components/organisms/Dialog/DialogGeneric";
import VueRecaptcha from "vue-recaptcha";
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
//import mail from "@/services/mail"
export default {
  components: {
    VueRecaptcha,
    DialogGeneric
  },
  data() {
    return {
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290"
      },
      valid: true,
      recaptcha: false,
      sitekey: "6LeZ5KEUAAAAACpusBSqlh7MWDGXuIp42Ogkg16z",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        id_user_profile: 2,
        email: "",
        password: "",
        confirmpassword: "",
        company: ""
      },
      checkbox: false,
      isEmailValid: [
        v => !!v || "Email é obrigatório",
        v => this.reg.test(this.form.email) || "Email inválido"
      ],
      isPasswordValid: [
        v => !!v || "Senha é obrigatório",
        v => v.length >= 8 || "A senha deve ter no máximo 8 caracteres"
      ],
      isConfirmPasswordValid: [
        v => !!v || "Confirmação de senha é obrigatório",
        v =>
          v.length >= 8 ||
          "A Confirmação de senha deve ter no máximo 8 caracteres",
        v =>
          this.form.password === this.form.confirmpassword ||
          "Senha e confirmação de senha divergente"
      ],
      isCompanyValid: [v => !!v || "Empresa ou projeto é obrigatório"],
      isCheck: [v => !!v || "Você deve concordar em continuar"]
    };
  },
  methods: {
    ...mapActions("user", ["newUser"]),
    onVerify: function(recaptchaToken) {
      if (recaptchaToken) {
        this.recaptcha = true;
      }
    },
    onExpired: function() {
      this.$refs.recaptcha.reset();
    },
    validateNew() {
      if (this.$refs.form.validate()) {
        if (this.recaptcha) {
          this.newUser(this.form)
            .then(res => {
              if (res.data.message == "success") {
                router.push({ name: "Success" });
              } else {
                this.dataDialog.type = "error";
                this.dataDialog.title = "Erro.";
                this.dataDialog.textButton = "Ok, Entendi";
                this.dataDialog.iconButton = "check";
                this.dataDialog.sessionExpired = false;
                EventBus.$emit("dialogGeneric", true);
              }
            })
            .catch(err => {
              console.log("err", err);
            });
        } else {
          this.dataDialog.type = "error";
          this.dataDialog.title = "ReCaptcha inválido.";
          this.dataDialog.textButton = "Ok, Entendi";
          this.dataDialog.iconButton = "check";
          this.dataDialog.sessionExpired = false;
          EventBus.$emit("dialogGeneric", true);
        }
      }
    }
  }
};
</script>
<style>
.card-bord-top {
  border-top-style: solid;
  border-top-color: #357ca5;
}
</style>