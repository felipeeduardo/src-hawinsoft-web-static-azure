<template>
  <v-breadcrumbs :items="data">
    <template v-slot:divider>
      <v-icon>chevron_right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  }
};
</script>
