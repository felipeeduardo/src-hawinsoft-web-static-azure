<template>
  <v-container>
    <v-layout text-xs-center justify-center wrap>
      <v-flex xs12 sm5>
        <v-card class="elevation-4">
          <v-card-title>
            <span class="title font-weight-light">Login</span>
          </v-card-title>
          <v-card-text>
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
            <v-btn color="success" flat>
              <v-icon>done</v-icon>
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