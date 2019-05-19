<template>
  <v-layout row wrap class="py-3 px-2">
    <v-flex d-flex xs12 sm6 md6 class="px-1 py-1">
      <time-line/>
    </v-flex>
    <v-flex d-flex xs12 sm6 md6 class="px-1 py-1">
      <card-run/>
    </v-flex>
  </v-layout>
</template>

<script>
import TimeLine from "@/components/organisms/TimeLine";
import CardRun from "@/components/organisms/Card/CardRun";
export default {
  components: {
    TimeLine,
    CardRun
  }
};
</script>