<template>
  <v-container grid-list-md>
    <h1 class="title font-weight-light">MENSAGENS</h1>
    <card-message />
  </v-container>
</template>

<script>
import CardMessage from "@/components/organisms/Card/CardMessage";
export default {
  components: {
    CardMessage
  }
};
</script>

<style>
</style>
