<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-side-icon>
      <v-img :src="require('@/assets/img/hawinsoft-white.png')" contain height="30"></v-img>
    </v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase" exact>
      <span class="font-weight-light">HAWINSOFT</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <menu-header></menu-header>
  </v-toolbar>
</template>

<script>
import MenuHeader from "@/components/organisms/menu/private/menuHeader";
export default {
  components: {
    MenuHeader
  }
};
</script>
