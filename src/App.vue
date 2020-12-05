<template>
  <v-app light>
    <Content />
    <Footer />
  </v-app>
</template>

<script>
//components global
import Content from "./components/layouts/content";
import Footer from "./components/layouts/footer";
export default {
  name: "App",
  components: {
    Content,
    Footer,
  },
};
</script>
