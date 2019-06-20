<template>
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon>chevron_right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/#/home"
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1"
      }
    ]
  })
};
</script>

<style>
</style>
