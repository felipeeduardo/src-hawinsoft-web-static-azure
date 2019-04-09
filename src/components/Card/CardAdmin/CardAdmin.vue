<template>
  <v-layout row wrap>
    <v-flex xs6>
      <v-list two-line subheader>
        <!--<v-list-tile v-for="item in items" :key="item.title" avatar @click>-->
        <v-list-tile v-for="item in items" :key="item.title" avatar>
          <v-list-tile-avatar>
            <v-icon class="primary lighten-1 white--text">cloud_download</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
    <v-flex xs6>
      <v-list two-line subheader>
        <v-list-tile v-for="item in items" :key="item.title" avatar>
          <v-list-tile-avatar>
            <v-icon class="primary lighten-1 white--text">cloud_download</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Download client",
          subtitle: "version 1.0"
        }
      ]
    };
  }
};
</script>