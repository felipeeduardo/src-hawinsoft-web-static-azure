<template>
  <v-timeline align-top dense>
    <v-timeline-item color="success" small fill-dot v-for="(item, i) in data" :key="i" icon="code">
      <v-layout>
        <v-flex xs4>
          <strong>Event:</strong>
          <div class="caption ellipsis">{{item.eventBot}}</div>
        </v-flex>
        <v-flex xs4 v-if="item.SelectorBot == null">
          <strong>Data:</strong>
          <div class="caption ellipsis">{{item.dataBot}}</div>
        </v-flex>
        <v-flex xs8 v-if="item.SelectorBot != null">
          <strong>Selector:</strong>
          <div class="caption ellipsis">{{item.SelectorBot}}</div>
        </v-flex>
        <v-flex>
          <v-btn
            v-if="item.btEdit"
            color="success"
            small
            flat
            outline
            round
            @click="openEdit(item.idStep)"
          >Editar</v-btn>
        </v-flex>
      </v-layout>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    openEdit(event) {
      // eslint-disable-next-line no-console
      console.log(event);
    }
  }
};
</script>