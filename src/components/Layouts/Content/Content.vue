<template>
  <v-content>
    <v-toolbar app dark clipped-left color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <v-img :src="require('@/assets/img/hawinsoft-white.png')" contain height="30"></v-img>
      </v-toolbar-side-icon>
      <v-toolbar-title @click.stop="drawer = !drawer" class="headline text-uppercase" exact>
        <span class="font-weight-light">HAWINSOFT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <menu-header></menu-header>
    </v-toolbar>

    <!--navigation-->
    <v-navigation-drawer v-model="drawer" fixed app clipped>
      <!--navigation auth -> false -->
      <v-list dense v-if="!this.auth.auth">
        <v-list-tile
          v-for="item in itemsMenu"
          :key="item.index"
          @click="goPath(item.path, item.idRpa)"
        >
          <v-list-tile-action>
            <v-icon color="primary">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <!--navigation auth -> true -->
      <v-list dense v-if="this.auth.auth">
        <v-list-tile
          v-for="item in itemsMenuAuth"
          :key="item.index"
          @click="goPath(item.path, item.idRpa)"
        >
          <v-list-tile-action>
            <v-icon color="primary">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--footer-->
    <v-footer color="#3c8dbc" class="pa-3 white--text" app>
      <span>Plataform Hawinsoft</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <!--content-->
    <loader :loader="this.loading" />
    <router-view></router-view>
  </v-content>
</template>
<script>
import router from "@/router";
import MenuHeader from "@/components/organisms/Menu/Private/MenuHeader";
import Loader from "@/components/organisms/Loader";
import { mapState } from "vuex";
export default {
  components: {
    MenuHeader,
    Loader
  },
  methods: {
    goPath(path, id) {
      router.push({
        name: `${path}`,
        params: { Pid: this.auth.id, Rid: id }
      });
    }
  },
  computed: {
    ...mapState("auth", ["auth"]),
    ...mapState(["loading"])
  },
  data() {
    return {
      drawer: null,
      itemsMenu: [
        {
          icon: "home",
          title: "Home",
          path: "Public"
        },
        {
          icon: "lock",
          title: "Log in",
          path: "Login"
        },
        {
          icon: "person_add",
          title: "Register",
          path: "Create"
        }
      ],
      itemsMenuAuth: [
        {
          icon: "home",
          title: "Home",
          path: "Home"
        },
        {
          icon: "memory",
          title: "Robotic process automation",
          path: "Rpa"
        },
        {
          icon: "desktop_windows",
          title: "Test laboratory",
          path: "Test"
        },
        {
          icon: "bug_report",
          title: "Report problem",
          path: "Report"
        },
        {
          icon: "payment",
          title: "Payment",
          path: "Payment"
        }
      ]
    };
  }
};
</script>
