<template>
  <v-layout row wrap class="py-3 px-2">
    <v-flex v-for="item in card" :key="item.title" d-flex xs12 sm6 md6 class="px-1 py-1">
      <v-card class="elevation-3">
        <v-img class="white--text" height="200px" contain :src="item.banner"></v-img>
        <v-card-title>
          <span class="title font-weight-light">{{item.title}}</span>
        </v-card-title>

        <v-list two-line subheader>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{item.icon}}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{item.menu_1}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{item.icon}}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{item.menu_1}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      card: [
        {
          banner: require("@/assets/img/hawinsoft-rpa-banner.png"),
          title: "Robotic process automation",
          icon: "person",
          iconClass: "primary lighten-1 white--text",
          menu_1: "My space",
          subtitle: "..."
        },
        {
          banner: require("@/assets/img/hawinsoft-test-banner.png"),
          title: "Software testing",
          icon: "folder",
          iconClass: "primary lighten-1 white--text",
          menu_1: "Recipes",
          subtitle: "Jan 17, 2014"
        }
      ]
    };
  }
};
</script>
