<template>
  <v-layout wrap text-xs-center>
    <v-flex xs12 class="mt-3">
      <v-img :src="require('@/assets/img/hawinsoft-public.png')" contain max-height="450"></v-img>
    </v-flex>
    <v-flex xs12 class="mt-3">
      <span class="title font-weight-light">PLATAFORM HAWINSOFT</span>
    </v-flex>
    <v-flex xs12 class="mt-3">
      <v-btn color="success" large outline @click="goNewUse()">Register</v-btn>
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