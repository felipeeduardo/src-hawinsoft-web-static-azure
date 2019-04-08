<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">HAWINSOFT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <card-home/>
    </v-content>
  </v-app>
</template>

<script>
import CardHome from './components/CardHome'

export default {
  name: 'App',
  components: {
    CardHome
  },
  data () {
    return {
      //
    }
  }
}
</script>
