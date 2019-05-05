<template>
  <v-app light>
    <Header/>
    <Content/>
    <Footer/>
  </v-app>
</template>

<script>
//components global
import Header from "./components/Layouts/Header";
import Content from "./components/Layouts/Content";
import Footer from "./components/Layouts/Footer";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer
  }
};
</script>
