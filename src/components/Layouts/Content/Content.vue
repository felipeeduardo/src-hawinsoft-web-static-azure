<template>
  <v-content class="white">
    <v-toolbar app dark clipped-left color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="this.auth.auth"></v-toolbar-side-icon>
      <v-toolbar-title @click.stop="drawer = !drawer" class="headline text-uppercase" exact>
        <span class="font-weight-light">HAWINSOFT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <menu-header></menu-header>
    </v-toolbar>

    <!--navigation-->
    <v-navigation-drawer v-if="this.auth.auth" v-model="drawer" fixed app clipped>
      <v-list dense v-if="this.auth.auth">
        <v-list-tile
          v-for="item in itemsMenuAuth"
          :key="item.index"
          @click="goPath(item.path, item.idRpa)"
        >
          <v-list-tile-action>
            <v-icon :color="item.colorIcon">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title :class="item.classColorText">{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--footer-->
    <!--<v-footer color="#3c8dbc" class="pa-3 white--text" app>
      <span>&copy; Hawinsoft - Versão 1.0</span>
      <v-spacer></v-spacer>
      <span>2019 - {{ new Date().getFullYear() }}</span>
    </v-footer>-->
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
      icons: [
        "fab fa-facebook",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ],
      drawer: null,
      itemsMenuAuth: [
        {
          icon: "fas fa-home",
          colorIcon: "",
          title: "Página inicial",
          classColorText: "",
          path: "Home"
        },
        {
          icon: "fas fa-robot",
          colorIcon: "",
          title: "Robotic process automation",
          classColorText: "",
          path: "Rpa"
        },
        {
          icon: "fas fa-cogs",
          colorIcon: "",
          title: "API's",
          classColorText: "",
          path: "Api"
        },
        {
          icon: "fas fa-bug",
          colorIcon: "",
          title: "Reportar problema",
          classColorText: "",
          path: "Report"
        },
        {
          icon: "fas fa-envelope",
          colorIcon: "",
          title: "Mensagem",
          classColorText: "",
          path: "Message"
        }
      ]
    };
  }
};
</script>
