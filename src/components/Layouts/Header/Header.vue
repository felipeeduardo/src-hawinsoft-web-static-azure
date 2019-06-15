<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-side-icon @click="showMenuPrivate? gohome() : gopublic()">
      <v-img :src="require('@/assets/img/hawinsoft-white.png')" contain height="30"></v-img>
    </v-toolbar-side-icon>
    <v-toolbar-title
      class="headline text-uppercase"
      @click="showMenuPrivate? gohome() : gopublic()"
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
  showMenuPrivate: false,
  components: {
    MenuHeader
  },
  methods: {
    gohome() {
      router.push({ name: "Home" });
    },
    gopublic() {
      router.push({ name: "Public" });
    }
  },
  beforeCreate() {
    if (
      sessionStorage.getItem("id_hawinsoft") != "" &&
      sessionStorage.getItem("token_hawinsoft") != ""
    ) {
      this.showMenuPrivate = true;
    } else {
      this.showMenuPrivate = false;
      router.push({ name: "Public" });
    }
  }
};
</script>
