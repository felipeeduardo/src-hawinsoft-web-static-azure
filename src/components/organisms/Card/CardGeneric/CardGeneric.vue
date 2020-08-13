<template>
  <v-layout row wrap class="mt-3">
    <v-flex v-for="item in data" :key="item.index" d-flex xs12 sm6 md6 class="pa-1">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="elevation-0 grey lighten-5 title-hover text-truncate"
          :style="{ cursor: 'pointer'}"
          @click="item.enabled? goPath(item.path, item.idRpa):goInative(item.idRpa)"
        >
          <div class="py-2 card-bord-top"></div>
          <v-card-text>
            <p class="headline font-weight-light">
              <v-icon v-show="item.iconActive" class="ma-1" size="25">{{item.icon}}</v-icon>
              {{item.title}}
            </p>
            <p class="sub-title font-weight-light">{{item.subtitle}}</p>
          </v-card-text>
          <v-divider light></v-divider>
          <v-card-actions>
            <h3 v-if="item.chip" class="font-weight-light" color="success-text">
              <span v-if="item.enabled" class="green--text">Ativo</span>
              <span v-if="!item.enabled" class="red--text">Inativo</span>
            </h3>
            <v-spacer></v-spacer>
            <v-icon color="primary" size="15">fas fa-arrow-right</v-icon>
          </v-card-actions>
          <v-expand-transition>
            <div
              v-if="hover"
              :class="`d-flex transition-fast-in-fast-out ${item.hoveColor} darken-6 v-card--reveal display-3 ${item.hoveTextColor}`"
              style="height: 100%;"
            >{{item.hoveText}}</div>
          </v-expand-transition>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
export default {
  props: {
    data: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      dialogReport: false,
      dialogRemove: false,
    };
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    goPath(path, id) {
      if (path == "Notification") {
        EventBus.$emit("dialogNotification", true);
      } else if (path == "Report") {
        EventBus.$emit("dialogReport", true);
      } else {
        router.push({
          name: `${path}`,
          params: { Rid: id },
        });
      }
    },
    goInative(id) {
      EventBus.$emit("dialogEnabledOrDisabledRpaIdRpa", id);
      EventBus.$emit("dialogEnabledOrDisabledRpa", true);
    },
  },
};
</script>
<style>
.title-hover:hover {
  color: #2b468b;
}
.card-bord-top {
  border-top-style: solid;
  border-top-color: #2b468b;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>