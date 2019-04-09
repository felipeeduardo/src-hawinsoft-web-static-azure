<template>
  <v-toolbar app dark color="primary">
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
import MenuHeader from "@/components/Menu";
import router from "@/router";
export default {
  components: {
    MenuHeader
  },
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),
  methods: {
    gohome: function() {
      router.push({ name: "Home" });
    }
  }
};
</script>
