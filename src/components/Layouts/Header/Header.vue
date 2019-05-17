<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-side-icon @click="gohome()">
      <v-img :src="require('@/assets/img/hawinsoft-white.png')" contain height="30"></v-img>
    </v-toolbar-side-icon>
    <v-toolbar-title
      class="headline text-uppercase"
      @click="gohome()"
      exact
      :style="{ cursor: 'pointer'}"
    >
      <span class="font-weight-light">HAWINSOFT</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <menu-header></menu-header>
  </v-toolbar>
</template>

<script>
import MenuHeader from "@/components/organisms/Menu/Private/MenuHeader";
import router from "@/router";
export default {
  components: {
    MenuHeader
  },
  methods: {
    gohome: function() {
      router.push({ name: "Home" });
    }
  }
};
</script>
