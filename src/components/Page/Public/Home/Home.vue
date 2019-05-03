<template>
  <v-container grid-list-md text-xs-center>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('@/assets/img/hawinsoft-public.png')" contain max-height="450"></v-img>
      </v-flex>
      <v-flex xs12>
        <v-btn flat large color="primary" @click="goLogin()">Login in project</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goLogin: function() {
      router.push({ name: "Login" });
    }
  }
};
</script>
