<template>
  <v-container grid-list-md>
    <v-layout text-xs-center wrap @click="goLogin()" :style="{ cursor: 'pointer'}">
      <v-flex xs12>
        <v-img :src="require('@/assets/img/hawinsoft-public.png')" contain max-height="470"></v-img>
      </v-flex>
      <v-flex xs12>
        <span class="title font-weight-light">Click here to login to the project</span>
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
