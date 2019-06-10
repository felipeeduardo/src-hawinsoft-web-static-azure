<template>
  <v-card class="elevation-3">
    <v-img
      class="white--text"
      height="200px"
      contain
      :src="require('@/assets/img/hawinsoft-rpa-banner.png')"
    ></v-img>
    <v-card-title>
      <span class="title font-weight-light">Robotic process automation</span>
    </v-card-title>

    <v-list two-line subheader>
      <v-list-tile v-for="item in items" :key="item.title" avatar @click>
        <v-list-tile-avatar>
          <v-icon :class="[item.iconClass]">{{item.icon}}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>My space</v-list-tile-title>
          <v-list-tile-sub-title>...</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "person",
          iconClass: "primary lighten-1 white--text",
          title: "My space",
          subtitle: "..."
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Recipes",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014"
        }
      ]
    };
  }
};
</script>
