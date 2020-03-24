<template>
  <v-layout row wrap class="mt-3">
    <v-flex v-for="item in data" :key="item.index" d-flex xs12 sm3 md3 class="px-2 py-1">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="elevation-1 text-md-center title-hover text-truncate"
          :style="{ cursor: 'pointer'}"
          @click="goPath(item.path, item.idRpa)"
        >
          <div class="py-4 card-bord-top">
            <v-img height="130px" contain :src="item.banner"></v-img>
          </div>
          <div></div>
          <v-divider light></v-divider>
          <v-card-text>
            <p class="title font-weight-light text-md-center">{{item.title}}</p>
            <span class="sub-title font-weight-light text-md-center">{{item.subtitle}}</span>
          </v-card-text>

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
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  computed: {
    ...mapState("auth", ["auth"])
  },
  methods: {
    goPath(path, id) {
      router.push({
        name: `${path}`,
        params: { Pid: this.auth.id, Rid: id }
      });
    }
  }
};
</script>
<style>
.title-hover:hover {
  color: #357ca5;
}
.card-bord-top {
  border-top-style: solid;
  border-top-color: #357ca5;
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