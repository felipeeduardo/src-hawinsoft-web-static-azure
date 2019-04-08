<template>
  <v-container>
    <v-layout text-xs-center justify-center wrap>
      <v-flex xs12 sm5>
        <v-card class="elevation-7">
          <v-card-text>
            <v-img :src="require('../assets/hawinsoft.png')" class="my-3" contain height="130"></v-img>
            <h1 class="display-1 font-weight-bold mb-3">Project Hawinsoft</h1>
            <p class="subheading font-weight-regular">
              <a
                href="https://community.vuetifyjs.com"
                target="_blank"
                style=" text-decoration: none;"
              >Download client</a>
            </p>
            <v-form>
              <v-text-field prepend-icon="mail" name="email" label="Email" type="text"></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">
              <v-icon>check</v-icon>Login
            </v-btn>
          </v-card-actions>
        </v-card>

        <!--<v-alert :value="true" type="error">This is a error alert.</v-alert>-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
</style>
